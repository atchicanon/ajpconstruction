<template>
  <div class="bg-dark-900 text-white min-h-screen">
    <!-- Hero -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-transparent" />
      <div class="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-6">
          Nouveau
        </span>
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6">
          Location de <span class="text-primary-500">mini-pelle</span>
        </h1>
        <p class="text-xl text-dark-300 max-w-2xl mx-auto">
          AJP Construction met à votre disposition une mini-pelle Carter CT60-9 pour vos travaux de terrassement à La Réunion, avec ou sans chauffeur.
        </p>
      </div>
    </section>

    <!-- Fiche matériel -->
    <section class="py-12 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Photo -->
          <div class="relative group">
            <div class="absolute -inset-1 rounded-2xl gradient-border opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            <div class="relative bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden">
              <img
                src="/materiel/pelle-carter-ct60-9.jpg"
                alt="Mini-pelle Carter CT60-9 disponible à la location chez AJP Construction La Réunion"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Contenu -->
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <span class="w-2 h-2 bg-primary-500 rounded-full" />
              <span class="text-primary-400 text-sm font-medium">Matériel disponible</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Mini-pelle Carter CT60-9</h2>
            <p class="text-dark-300 leading-relaxed mb-8 text-lg">
              Idéale pour les fouilles, tranchées, nivellements et petits terrassements sur terrain difficile d'accès. Compacte et maniable, elle intervient là où les grosses machines ne passent pas.
            </p>
            <ul class="space-y-4 mb-10">
              <li v-for="item in specs" :key="item" class="flex items-start gap-3">
                <div class="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-3.5 h-3.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-dark-200">{{ item }}</span>
              </li>
            </ul>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/devis" class="btn-primary text-base px-8 py-3.5 text-center">
                Demander un devis de location
              </NuxtLink>
              <a href="tel:+262692422492" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm">
                06 92 42 24 92
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Facebook -->
    <section class="py-12 md:py-20 border-t border-white/5">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="relative">
          <div class="absolute -inset-1 rounded-2xl gradient-border opacity-30 blur-sm" />
          <div class="relative bg-dark-800 rounded-2xl p-10 md:p-14 border border-dark-700">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Suivez nos annonces de location</h2>
            <p class="text-dark-300 mb-8 max-w-xl mx-auto">
              Retrouvez la mini-pelle en photo, ses disponibilités et nos autres annonces sur notre page Facebook.
            </p>
            <a
              href="https://www.facebook.com/share/1Sdfbr7mtS/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold rounded-lg transition-colors text-sm"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z"/>
              </svg>
              Voir la page Facebook
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <div class="absolute -inset-1 rounded-2xl gradient-border opacity-30 blur-sm" />
          <div class="relative bg-dark-800 rounded-2xl p-12 md:p-16 text-center border border-dark-700">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Besoin de la pelle pour un chantier ?</h2>
            <p class="text-dark-300 text-lg mb-10 max-w-xl mx-auto">
              Contactez-nous pour connaître les disponibilités et le tarif de location adapté à votre projet.
            </p>
            <NuxtLink to="/devis" class="btn-primary text-lg px-10 py-4 glow-red">
              Demander un devis gratuit
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Location de mini-pelle La Réunion — Carter CT60-9 | AJP Construction',
  meta: [
    { name: 'description', content: 'AJP Construction propose la location d\'une mini-pelle Carter CT60-9 à La Réunion (974) pour vos travaux de terrassement, fouilles et nivellement. Devis gratuit.' },
    { property: 'og:url', content: 'https://www.ajp-construction.fr/location' },
    { property: 'og:title', content: 'Location de mini-pelle La Réunion — AJP Construction' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ajp-construction.fr/location' },
  ],
})

const specs = [
  'Poids : environ 6 tonnes',
  'Chenilles caoutchouc — accès terrain souple',
  'Godet de terrassement inclus',
  'Idéale pour fouilles, tranchées et nivellement',
  'Location avec ou sans chauffeur',
  'Disponible sur toute La Réunion',
]
</script>
