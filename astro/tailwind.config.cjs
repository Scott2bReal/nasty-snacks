/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        custom: `cubic-bezier(0.83, 0, 0.17, 1)`,
      },
      transitionDuration: {
        2000: "2000ms",
      },
      backgroundImage: {
        bigSnacks: "url(images/inverted_snacks_big.JPG)",
      },
      screens: {
        wide: "890px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    },
  ],
}
