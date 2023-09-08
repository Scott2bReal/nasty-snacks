// @ts-check
var config = require("eslint-define-config")
var defineConfig = config.defineConfig

module.exports = defineConfig({
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: ["plugin:tailwindcss/recommended", "plugin:astro/jsx-a11y-recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser",
    },
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
  ],
  settings: {
    tailwindcss: {
      tags: ["tw"],
      classRegex: "^\\w*?[Cc]lass(Name)?$",
    },
  },
})
