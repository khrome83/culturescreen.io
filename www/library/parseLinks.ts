export default (text: string) => {
  const linkedTextRegExp = /\[\[(.*?)\]\]/g;
  let output = text;
  let matches = linkedTextRegExp.exec(output);
  const replacements = {};

  while (matches != null) {
    const [href, label] = matches[1].split("|");
    replacements[matches[0]] = { href, label };
    matches = linkedTextRegExp.exec(output);
  }

  Object.keys(replacements).forEach(key => {
    const { href, label } = replacements[key];
    const useLabel = label !== undefined ? label : href;
    if (/((https{0,1}|ftp|tel|mail):\/\/)|^www.|.{1}(com|net|org|io)/i.test(href)) {
      output = output.replace(`${key}`, `<a href="${href}" rel="noopener" target="_blank">${useLabel}</a>`);
    } else {
      output = output.replace(`${key}`, `<nuxt-link to="${href}">${useLabel}</nuxt-link>`);
    }
  });

  return output;
};
