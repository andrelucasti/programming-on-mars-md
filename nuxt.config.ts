// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  scripts: {
    registry: {
      googleAnalytics:{
        id:'G-756VBWSN8Q'
      }
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    "@pinia/nuxt",
    '@nuxt/scripts',
    '@nuxtjs/sitemap'
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://programmingonmars.io'
    }
  },
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
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: 'Programming On Mars - %s',
      meta:[
        { property: 'authors', content: 'André Lucas' },
        { property: 'og:title', content: 'Programming On Mars'},
        { property: 'og:description', content: 'Become the software engineer able to Programming on Mars'},
        { property: 'og:type', content: 'website'},
        { property: 'og:url', content: 'https://programmingonmars.io'},
        { property: 'og:image', content: 'https://programmingonmars.io/images/logo/logo.png'},
        { name: 'robots', content: 'index, follow' },
        { name: 'twitter:card', content: 'summary-large-image' },
        { name: 'twitter:site', content: '@progemmarte' },
        { name: 'twitter:creator', content: '@andrelucastic' },
        { name: 'twitter:title', content: 'Programming On Mars' },
        { name: 'twitter:description', content: 'Become the software engineer able to Programming on Mars' },
        { name: 'twitter:image', content: 'https://programmingonmars.io/images/logo/logo.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon_io/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes:'16x16',href: '/favicon_io/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes:'32x32',href: '/favicon_io/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes:'180x180',href: '/favicon_io/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon_io/site.webmanifest' }
      ]
    }
  }
})