const capitalize = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

const createErrorMessage = (code, rule, target): string => {
  const label = capitalize(target);

  switch (code) {
    case "required":
      return `${label} is required.`;
    case "email":
      return `${label} is not formatted corrrectly.`;
    case "rul":
      return `${label} is not valid URL.`;
    case "minLength":
      return `${label} must be ${rule.min} characters long.`;
    case "maxLength":
      return `${label} can not be more than ${rule.max} characters long.`;
    case "between":
      return `${label} must be between ${rule.min} and ${rule.max}.`;
    case "minValue":
      return `${label} must be atleast ${rule.min}.`;
    case "maxValue":
      return `${label} must be no more than ${rule.max}.`;
    case "alpha":
      return `${label} can only be characters A-Z and a-z.`;
    case "alphaNum":
      return `${label} can only be characters A-Z, a-z or 0-9.`;
    case "numeric":
      return `${label} must be a number.`;
    case "integer":
      return `${label} must be a whole number, no decimal place.`;
    case "decimal":
      return `${label} must be a decimal number.`;
    default:
      return "";
  }
};

export default (localErrorState, serverErrorState, target): Array<string> => {
  const errorMessages = [];
  if (localErrorState.$error) {
    Object.entries(localErrorState.$params).forEach(([key, rule]) => {
      if (!localErrorState[key]) {
        const msg = createErrorMessage(key, rule, target);
        if (msg) errorMessages.push(msg);
      }
    });
  }

  if (localErrorState.$dirty && serverErrorState.target === target) {
    errorMessages.push(serverErrorState.message);
  }

  return errorMessages;
};
