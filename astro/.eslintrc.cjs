module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: ["plugin:tailwindcss/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser",
    },
  ],
  settings: {
    tailwindcss: {
      tags: ["tw"],
      classRegex: "^\\w*?[Cc]lass(Name)?$",
    },
  },
}
