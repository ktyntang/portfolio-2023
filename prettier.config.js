// prettier.config.js

const config = {
  printWidth: 120,
  tabWidth: 4,
  useTabs: true,
  jsxSingleQuote: true,
  importOrder: ["^react(.*)", "<THIRD_PARTY_MODULES>", "@/(.*)", "^[./]"],
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
