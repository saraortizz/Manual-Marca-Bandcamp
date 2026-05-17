export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['@/styles/style.scss'],
  app: {
    head: {
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
