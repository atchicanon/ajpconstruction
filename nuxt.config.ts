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
    exclude: ['/admin'],
  },

  app: {
    head: {
      title: 'AJP Construction — Entreprise de Construction à La Réunion | BTP 974',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AJP Construction, entreprise de construction à La Réunion (974). Terrassement, gros œuvre, charpente, couverture et second œuvre. Devis gratuit sous 48h. Intervient à Saint-Denis, Saint-Pierre, Saint-Paul, Le Port.' },
        { name: 'keywords', content: 'construction réunion, entreprise construction réunion, BTP réunion 974, constructeur réunion, gros oeuvre réunion, terrassement réunion, charpente réunion, maçonnerie saint-denis réunion, travaux bâtiment 974, devis construction gratuit réunion' },
        { name: 'geo.region', content: 'FR-RE' },
        { name: 'geo.placename', content: 'La Réunion' },
        { name: 'geo.position', content: '-21.115141;55.536384' },
        { name: 'ICBM', content: '-21.115141, 55.536384' },
        { property: 'og:site_name', content: 'AJP Construction' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:url', content: 'https://www.ajp-construction.fr' },
        { property: 'og:title', content: 'AJP Construction — Entreprise de Construction à La Réunion' },
        { property: 'og:description', content: 'Entreprise de construction à La Réunion (974) tous corps d\'état. Terrassement, gros œuvre, charpente, couverture et second œuvre. Devis gratuit sous 48h.' },
        { property: 'og:image', content: 'https://www.ajp-construction.fr/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'AJP Construction — Entreprise de Construction à La Réunion' },
        { name: 'twitter:description', content: 'Entreprise de construction à La Réunion (974) tous corps d\'état. Terrassement, gros œuvre, charpente, couverture et second œuvre. Devis gratuit sous 48h.' },
        { name: 'twitter:image', content: 'https://www.ajp-construction.fr/og-image.jpg' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.ajp-construction.fr' },
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
