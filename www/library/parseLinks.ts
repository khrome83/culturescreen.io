export default (createElement: Function, text: string) => {
  const linkedTextRegExp = /\[\[(.*?)\]\]/g;
  let template = text;
  const output = [];
  let matches = linkedTextRegExp.exec(template);
  const replacements = {};

  while (matches != null) {
    const [href, label] = matches[1].split("|");
    replacements[matches[0]] = { href, label };
    matches = linkedTextRegExp.exec(template);
  }

  Object.keys(replacements).forEach(key => {
    template = template.replace(`${key}`, `^${key}^`)
  });

  const parts = template.split('^');
  parts.forEach(part => {
    if (replacements[part] === undefined) {
      output.push(part);
    } else {
      const { href, label } = replacements[part];
      const useLabel = label !== undefined ? label : href;
      if (/((https{0,1}|ftp|tel|mail):\/\/)|^www.|.{1}(com|net|org|io)/i.test(href)) {
        output.push(createElement('a', { attrs: { href, rel: 'noopener', target: '_blank' } }, useLabel))
      } else {
        output.push(createElement('nuxt-link', { attrs: { to: href } }, useLabel))
      }
    }
  });

  return output;
};
