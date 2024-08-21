// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-feather-icons", "nuxt-musicfyplayer"],
  alias: {
    "@Utils": "./utils",
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
      theme: {
        extend: {
          colors: {
            main: "#8e48e4",
            light: "#F8FAFC",
            gold: "#F5B015",
            green: "#10B981",
          },
          screens: {
            smartphone: { max: "430px" },
            tablet: { min: "431px", max: "1024px" },
            dekstop: { min: "1025px", max: "3840px" },
          },
        },
      },
    },
  },
});
