<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AJP Construction',
        url: 'https://www.ajp-construction.fr',
        telephone: '+262692422492',
        email: 'ajc.pedroa@outlook.fr',
        description: 'Entreprise de bâtiment tous corps d\'état à La Réunion. Terrassement, gros œuvre, charpente, couverture et second œuvre.',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'La Réunion',
          addressCountry: 'FR',
          postalCode: '974',
        },
        areaServed: [
          { '@type': 'City', name: 'Saint-Denis' },
          { '@type': 'City', name: 'Saint-Pierre' },
          { '@type': 'City', name: 'Saint-Paul' },
          { '@type': 'City', name: 'Le Port' },
        ],
        sameAs: [
          'https://www.facebook.com/profile.php?id=61564770301404',
        ],
        logo: 'https://www.ajp-construction.fr/logo.png',
        image: 'https://www.ajp-construction.fr/og-image.jpg',
        priceRange: '€€',
      }),
    },
  ],
})
</script>
