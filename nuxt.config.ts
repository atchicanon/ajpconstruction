export default defineNuxtConfig({
  compatibilityDate: '2025-03-31',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  app: {
    head: {
      title: 'AJP Construction — Tous travaux BTP à La Réunion',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AJP Construction — Entreprise tous corps d\'état à La Réunion. Terrassement, VRD, gros œuvre, charpente, couverture et second œuvre.' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' },
      ],
    },
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/<your-cloud-name>/image/upload/',
    },
  },
})
