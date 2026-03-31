<template>
  <div class="bg-dark-900 text-white">

    <!-- HERO -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden">
      <!-- Background photo -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Chantier de construction"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-dark-900/30" />
        <div class="absolute inset-0 bg-dark-900/40" />
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 border border-primary-500/30 rounded-full text-sm font-medium text-primary-400 mb-8">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
            </svg>
            Tous corps d'état — La Réunion
          </div>

          <h1 class="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
            Construisons<br/>
            ensemble
            <span class="bg-gradient-to-r from-primary-500 to-orange-400 bg-clip-text text-transparent"> votre<br/>projet</span>
          </h1>

          <p class="text-xl text-dark-300 mb-10 leading-relaxed max-w-xl">
            Du terrassement aux finitions, AJP Construction vous accompagne sur tous vos travaux de bâtiment à La Réunion. Qualité, fiabilité et savoir-faire depuis des années.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/devis" class="btn-primary text-base px-7 py-3.5 inline-flex items-center gap-2">
              Demander un devis gratuit
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/realisations" class="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base">
              Voir nos réalisations
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Stats bar -->
      <div class="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-dark-900/60 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-3 divide-x divide-white/10">
            <div v-for="stat in stats" :key="stat.label" class="py-6 px-8 text-center">
              <div class="text-3xl font-extrabold text-white">{{ stat.value }}</div>
              <div class="text-dark-400 text-sm mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERTISE -->
    <section id="expertise" class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-5">
            Notre expertise
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold">
            Nos domaines <span class="bg-gradient-to-r from-primary-500 to-orange-400 bg-clip-text text-transparent">d'expertise</span>
          </h2>
          <p class="text-dark-400 mt-5 text-lg max-w-2xl mx-auto">
            Une entreprise tous corps d'état pour répondre à tous vos besoins en construction et rénovation.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-dark-800 rounded-2xl p-7 border border-dark-700 hover:border-dark-600 transition-all duration-300 group"
          >
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl" :class="service.iconBg">
                {{ service.icon }}
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">{{ service.title }}</h3>
                <p class="text-dark-400 text-sm leading-relaxed mb-4">{{ service.description }}</p>
                <ul class="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  <li v-for="item in service.items" :key="item" class="flex items-center gap-2 text-sm text-dark-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RÉALISATIONS aperçu -->
    <section id="realisations" class="py-24 bg-dark-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-5">
            Portfolio
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold">
            Nos <span class="bg-gradient-to-r from-primary-500 to-orange-400 bg-clip-text text-transparent">réalisations</span>
          </h2>
          <p class="text-dark-400 mt-5 text-lg">Quelques-uns de nos chantiers réalisés à La Réunion.</p>
        </div>

        <!-- Bento grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Grande carte gauche -->
          <div class="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80"
              alt="Construction neuve"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
            <div class="absolute bottom-6 left-6">
              <span class="text-white font-bold text-xl">Construction neuve</span>
            </div>
          </div>

          <!-- Petites cartes droite -->
          <div v-for="photo in sidePhotos" :key="photo.label" class="relative group rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              :src="photo.src"
              :alt="photo.label"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-transparent to-transparent" />
            <div class="absolute bottom-4 left-4">
              <span class="text-white font-bold">{{ photo.label }}</span>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/realisations" class="btn-primary px-8 py-3">
            Voir toutes nos réalisations
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- POURQUOI NOUS -->
    <section class="py-24 bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(item, i) in advantages" :key="item.title" class="text-center group">
            <div class="w-16 h-16 bg-dark-800 border border-dark-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-500">
              <svg class="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.iconPath" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ item.title }}</h3>
            <p class="text-dark-400 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA ROUGE -->
    <section class="relative overflow-hidden bg-primary-500 py-24">
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-primary-700/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-6xl font-extrabold text-white mb-6">Un projet en tête ?</h2>
        <p class="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
          Contactez-nous pour obtenir un devis gratuit et sans engagement. Nous intervenons sur toute l'île de La Réunion.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/devis" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-500 font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-2xl">
            Demander un devis gratuit
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <a href="tel:+262692000000" class="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-lg text-lg hover:bg-white/10 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Nous appeler
          </a>
        </div>

        <!-- Coordonnées -->
        <div class="flex flex-wrap justify-center gap-8 mt-12 text-primary-100 text-sm">
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0692 00 00 00
          </span>
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            contact@ajp-construction.re
          </span>
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            La Réunion (974)
          </span>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'AJP Construction — Tous travaux BTP à La Réunion',
})

useScrollAnimation()

const stats = [
  { value: '15+', label: 'Années d\'expérience' },
  { value: '500+', label: 'Projets réalisés' },
  { value: '100%', label: 'Satisfaction client' },
]

const services = [
  {
    icon: '⛏️',
    iconBg: 'bg-orange-500/20 text-orange-400',
    title: 'Terrassement & VRD',
    description: 'Préparation de terrain, voirie et réseaux divers pour vos projets de construction.',
    items: ['Décapage', 'Fouilles', 'VRD', 'Assainissement'],
  },
  {
    icon: '🏗️',
    iconBg: 'bg-red-500/20 text-red-400',
    title: 'Gros œuvre',
    description: 'Fondations, maçonnerie, structure béton armé. Des bases solides pour votre construction.',
    items: ['Fondations', 'Maçonnerie', 'Dallage', 'Béton armé'],
  },
  {
    icon: '🏠',
    iconBg: 'bg-sky-500/20 text-sky-400',
    title: 'Charpente & Couverture',
    description: 'Charpente bois ou métal, couverture et étanchéité pour une toiture durable.',
    items: ['Charpente bois', 'Charpente métal', 'Couverture', 'Étanchéité'],
  },
  {
    icon: '🔧',
    iconBg: 'bg-emerald-500/20 text-emerald-400',
    title: 'Second œuvre',
    description: 'Plomberie, électricité, peinture, carrelage et toutes les finitions de votre projet.',
    items: ['Plomberie', 'Électricité', 'Peinture', 'Carrelage'],
  },
]

const sidePhotos = [
  {
    label: 'Terrassement',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    label: 'Toiture',
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
]

const advantages = [
  {
    title: 'Tous corps d\'état',
    description: 'Un seul interlocuteur pour l\'ensemble de vos travaux, du début à la fin du chantier.',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Toute La Réunion',
    description: 'Nous intervenons sur l\'ensemble de l\'île, du Nord au Sud, de l\'Est à l\'Ouest.',
    iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Qualité garantie',
    description: 'Une équipe qualifiée et expérimentée pour des réalisations conformes à vos attentes.',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]
</script>
