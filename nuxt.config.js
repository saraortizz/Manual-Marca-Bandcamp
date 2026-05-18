export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['@/styles/style.scss'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png?v=2' },
        { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png?v=2' },
      ],
      title: 'Bandcamp',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})
