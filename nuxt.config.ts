// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    '@nuxt/content', '@nuxt/ui',  "@pinia/nuxt"
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  css: [
    // Global CSS files

    './assets/css/vendor/bootstrap.min.css',
    './assets/css/plugins/bootstrap-select.min.css',
    './assets/css/plugins/slick-theme.css',
    './assets/css/plugins/slick.css',
    './assets/css/plugins/animation.css',
    './assets/css/plugins/feature.css',
    './assets/css/plugins/fontawesome-all.min.css',
    './assets/ui.css',
    './assets/css/style.css',
    ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
