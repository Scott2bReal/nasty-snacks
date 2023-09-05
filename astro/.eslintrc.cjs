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
    },
  ],
  settings: {
    tailwindcss: {
      tags: ["tw"],
      classRegex: "^\\w*?[Cc]lass(Name)?$",
    },
  },
}
