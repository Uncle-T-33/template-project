// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs
/** @type {import("prettier").Config} */
const config = {
  useTabs: false,
  printWidth: 256,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'always',
  parser: 'babel',
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: false
};

module.exports = config;
