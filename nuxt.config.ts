export default defineNuxtConfig({
  compatibilityDate: '2025-03-31',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://www.ajp-construction.fr',
    name: 'AJP Construction',
  },

  sitemap: {
    strictNuxtContentPaths: false,
  },

  app: {
    head: {
      title: 'AJP Construction — Tous travaux BTP à La Réunion',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AJP Construction — Entreprise tous corps d\'état à La Réunion. Terrassement, VRD, gros œuvre, charpente, couverture et second œuvre.' },
        { property: 'og:site_name', content: 'AJP Construction' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.ajp-construction.fr' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.ajp-construction.fr' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700;800&display=swap' },
      ],
    },
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dlyacp0oo/image/upload/',
    },
  },
})
