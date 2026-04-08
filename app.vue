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
        '@type': ['LocalBusiness', 'GeneralContractor'],
        name: 'AJP Construction',
        url: 'https://www.ajp-construction.fr',
        telephone: '+262692422492',
        email: 'ajc.pedroa@outlook.fr',
        description: 'Entreprise de construction à La Réunion (974) tous corps d\'état. Terrassement, gros œuvre, charpente, couverture et second œuvre.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'La Réunion',
          addressLocality: 'La Réunion',
          addressRegion: 'La Réunion',
          addressCountry: 'FR',
          postalCode: '97400',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -21.115141,
          longitude: 55.536384,
        },
        areaServed: [
          { '@type': 'State', name: 'La Réunion' },
          { '@type': 'City', name: 'Saint-Denis' },
          { '@type': 'City', name: 'Saint-Pierre' },
          { '@type': 'City', name: 'Saint-Paul' },
          { '@type': 'City', name: 'Le Port' },
          { '@type': 'City', name: 'Saint-André' },
          { '@type': 'City', name: 'Saint-Louis' },
          { '@type': 'City', name: 'La Possession' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
        ],
        hasMap: 'https://maps.google.com/?q=La+Réunion+974+France',
        sameAs: [
          'https://www.facebook.com/profile.php?id=61564770301404',
        ],
        logo: 'https://www.ajp-construction.fr/logo.png',
        image: 'https://www.ajp-construction.fr/og-image.jpg',
        priceRange: '€€',
        knowsAbout: [
          'Construction',
          'Terrassement',
          'Gros œuvre',
          'Charpente',
          'Couverture',
          'Second œuvre',
          'BTP',
          'Maçonnerie',
          'Béton armé',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qu\'est-ce qu\'AJP Construction à La Réunion ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AJP Construction est une entreprise de construction à La Réunion (974) spécialisée dans les travaux tous corps d\'état : terrassement VRD, gros œuvre, charpente, couverture et second œuvre. Nous intervenons sur l\'ensemble de l\'île depuis plus de 10 ans.',
            },
          },
          {
            '@type': 'Question',
            name: 'Dans quelles villes de La Réunion intervenez-vous ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AJP Construction intervient sur toute l\'île de La Réunion : Saint-Denis, Saint-Pierre, Saint-Paul, Le Port, Saint-André, Saint-Louis, La Possession et l\'ensemble du département 974.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment obtenir un devis pour des travaux de construction à La Réunion ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vous pouvez demander un devis gratuit en ligne sur notre site ajp-construction.fr ou nous appeler au 06 92 42 24 92. Nous répondons sous 48h pour tous vos projets de construction à La Réunion.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quels types de travaux réalise AJP Construction à La Réunion ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AJP Construction réalise tous types de travaux BTP à La Réunion : terrassement et VRD, gros œuvre (fondations, maçonnerie, béton armé), charpente et couverture, ainsi que le second œuvre (plomberie, électricité, peinture, carrelage).',
            },
          },
          {
            '@type': 'Question',
            name: 'AJP Construction réalise-t-il des constructions neuves à La Réunion ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, AJP Construction réalise des constructions neuves à La Réunion de A à Z : du terrassement du terrain jusqu\'aux finitions. Nous prenons en charge l\'ensemble du projet de construction.',
            },
          },
        ],
      }),
    },
  ],
})
</script>
