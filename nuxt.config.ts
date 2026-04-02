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
      title: 'AJP Construction — Entreprise BTP tous corps d\'état à La Réunion',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AJP Construction — Entreprise de bâtiment tous corps d\'état à La Réunion. Terrassement, gros œuvre, charpente, couverture et second œuvre. Devis gratuit sous 48h. Saint-Denis, Saint-Pierre, Saint-Paul, Le Port.' },
        { name: 'keywords', content: 'entreprise BTP La Réunion, construction Réunion, terrassement Réunion, gros oeuvre Réunion, charpente couverture Réunion, maçonnerie Saint-Denis, travaux bâtiment 974, entrepreneur général Réunion, devis construction gratuit' },
        { property: 'og:site_name', content: 'AJP Construction' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:url', content: 'https://www.ajp-construction.fr' },
        { property: 'og:title', content: 'AJP Construction — Entreprise BTP La Réunion' },
        { property: 'og:description', content: 'Entreprise de bâtiment tous corps d\'état à La Réunion. Terrassement, gros œuvre, charpente, couverture et second œuvre. Devis gratuit sous 48h.' },
        { property: 'og:image', content: 'https://www.ajp-construction.fr/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'AJP Construction — Entreprise BTP La Réunion' },
        { name: 'twitter:description', content: 'Entreprise de bâtiment tous corps d\'état à La Réunion. Terrassement, gros œuvre, charpente, couverture et second œuvre. Devis gratuit sous 48h.' },
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
