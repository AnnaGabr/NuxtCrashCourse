const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: {
    files: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
      //"./nuxt.config.{js,ts}", // it is commented because https://github.com/nuxt-modules/tailwindcss/issues/429
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};