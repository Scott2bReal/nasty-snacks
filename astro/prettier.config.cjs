/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  tailwindConfig: "./tailwind.config.cjs",
  pluginSearchDirs: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: 'astro',
      },
    }
  ],
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
};
