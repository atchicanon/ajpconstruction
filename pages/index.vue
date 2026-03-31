<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-dark-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 opacity-90" />
      <div class="absolute top-20 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div class="absolute bottom-10 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <div class="max-w-3xl">
          <span class="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-6 animate-on-scroll">
            Tous corps d'état &mdash; La Réunion
          </span>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-on-scroll">
            Construisons ensemble
            <span class="text-primary-500">votre projet</span>
          </h1>
          <p class="text-xl text-dark-300 mb-10 leading-relaxed animate-on-scroll delay-100">
            Du terrassement aux finitions, AJP Construction vous accompagne sur tous vos travaux de bâtiment à La Réunion. Qualité, fiabilité et savoir-faire depuis des années.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 animate-on-scroll delay-200">
            <NuxtLink to="/devis" class="btn-primary text-lg px-8 py-4 glow-red">
              Demander un devis gratuit
            </NuxtLink>
            <NuxtLink to="/realisations" class="btn-outline border-white/30 text-white hover:bg-white hover:text-dark-900 text-lg px-8 py-4">
              Voir nos réalisations
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Domaines d'expertise - Mis en valeur -->
    <section class="bg-dark-900 text-white py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <span class="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-6 animate-on-scroll">
            Notre expertise
          </span>
          <h2 class="text-3xl md:text-5xl font-extrabold animate-on-scroll">
            Nos domaines <span class="text-primary-500">d'expertise</span>
          </h2>
          <p class="text-lg text-dark-400 mt-6 max-w-2xl mx-auto animate-on-scroll delay-100">
            Une entreprise tous corps d'état pour répondre à tous vos besoins en construction et rénovation.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div
            v-for="(service, i) in services"
            :key="service.title"
            class="animate-on-scroll group relative"
            :class="'delay-' + (i + 1) + '00'"
          >
            <div class="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div class="relative bg-dark-800 rounded-2xl p-8 lg:p-10 border border-dark-700 group-hover:border-primary-500/30 transition-all duration-500 h-full">
              <div class="flex items-start gap-6">
                <div class="w-16 h-16 bg-primary-500/10 border border-primary-500/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-500">
                  <span class="text-3xl">{{ service.icon }}</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">{{ service.title }}</h3>
                  <p class="text-dark-400 leading-relaxed mb-4">{{ service.description }}</p>
                  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <li v-for="item in service.items" :key="item" class="flex items-center gap-2 text-sm text-dark-300">
                      <div class="w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0" />
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-14 animate-on-scroll">
          <NuxtLink to="/services" class="btn-outline border-primary-500/50 text-primary-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 px-8 py-3">
            Découvrir tous nos services
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Photos / Galerie aperçu -->
    <section class="bg-dark-800 py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-extrabold text-white animate-on-scroll">
            Nos <span class="text-primary-500">réalisations</span>
          </h2>
          <p class="text-lg text-dark-400 mt-6 max-w-2xl mx-auto animate-on-scroll delay-100">
            Quelques-uns de nos chantiers réalisés à La Réunion.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          <div
            v-for="(photo, i) in photos"
            :key="i"
            class="animate-on-scroll group relative overflow-hidden rounded-2xl aspect-[4/3]"
            :class="[
              'delay-' + (i + 1) + '00',
              i === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : ''
            ]"
          >
            <div class="absolute inset-0 bg-gradient-to-br" :class="photo.gradient" />
            <div class="absolute inset-0 flex flex-col items-center justify-center p-4">
              <span class="text-5xl mb-3 group-hover:scale-110 transition-transform duration-500">{{ photo.emoji }}</span>
              <span class="text-white font-semibold text-center text-sm lg:text-base">{{ photo.label }}</span>
            </div>
            <div class="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-colors duration-300" />
          </div>
        </div>

        <div class="text-center mt-14 animate-on-scroll">
          <NuxtLink to="/realisations" class="btn-primary px-8 py-3 glow-red">
            Voir toutes nos réalisations
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why choose us -->
    <section class="bg-dark-900 text-white py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-extrabold animate-on-scroll">
            Pourquoi choisir <span class="text-primary-500">AJP</span> ?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(item, i) in advantages"
            :key="item.title"
            class="text-center animate-on-scroll group"
            :class="'delay-' + (i + 1) + '00'"
          >
            <div class="w-20 h-20 bg-primary-500/10 border border-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-500">
              <svg class="w-9 h-9 text-primary-500 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.iconPath" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ item.title }}</h3>
            <p class="text-dark-400 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-primary-500" />
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-primary-600/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 animate-on-scroll">
          Un projet en tête ?
        </h2>
        <p class="text-xl text-primary-100 mb-10 animate-on-scroll delay-100">
          Contactez-nous pour obtenir un devis gratuit et sans engagement. Nous intervenons sur toute l'île de La Réunion.
        </p>
        <NuxtLink to="/devis" class="inline-flex items-center justify-center px-10 py-4 bg-white text-primary-500 font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-2xl animate-on-scroll delay-200">
          Demander un devis gratuit
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'AJP Construction — Tous travaux BTP à La Réunion',
})

useScrollAnimation()

const services = [
  {
    icon: '🚜',
    title: 'Terrassement & VRD',
    description: 'Préparation de terrain, voirie et réseaux divers pour vos projets de construction.',
    items: ['Décapage', 'Fouilles', 'VRD', 'Assainissement'],
  },
  {
    icon: '🧱',
    title: 'Gros œuvre',
    description: 'Fondations, maçonnerie, structure béton armé. Des bases solides pour votre construction.',
    items: ['Fondations', 'Maçonnerie', 'Dallage', 'Béton armé'],
  },
  {
    icon: '🏠',
    title: 'Charpente & Couverture',
    description: 'Charpente bois ou métal, couverture et étanchéité pour une toiture durable.',
    items: ['Charpente bois', 'Charpente métal', 'Couverture', 'Étanchéité'],
  },
  {
    icon: '🔨',
    title: 'Second œuvre',
    description: 'Plomberie, électricité, peinture, carrelage et toutes les finitions de votre projet.',
    items: ['Plomberie', 'Électricité', 'Peinture', 'Carrelage'],
  },
]

const photos = [
  { emoji: '🏗️', label: 'Construction neuve', gradient: 'from-primary-700 to-dark-800' },
  { emoji: '🚜', label: 'Terrassement', gradient: 'from-amber-700 to-dark-800' },
  { emoji: '🏠', label: 'Toiture', gradient: 'from-sky-700 to-dark-800' },
  { emoji: '🧱', label: 'Maçonnerie', gradient: 'from-orange-700 to-dark-800' },
  { emoji: '🔨', label: 'Rénovation', gradient: 'from-emerald-700 to-dark-800' },
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
