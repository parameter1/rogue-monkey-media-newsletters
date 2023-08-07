module.exports = (style) => Object.keys(style).filter(
  (key) => style[key] && style[key].trim(),
).reduce((str, key) => `${key}: ${style[key]}; ${str}`, '').trim();
