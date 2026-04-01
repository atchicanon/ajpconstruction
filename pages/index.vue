<template>
  <div class="bg-dark-900 text-white">
    <!-- HERO -->
    <section class="relative min-h-[95vh] flex items-center overflow-hidden">
      <!-- Background image -->
      <div class="absolute inset-0">
        <img :src="homepage.heroImage" alt="Chantier" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-dark-900/30" />
      </div>

      <!-- Diagonal structural line -->
      <div class="absolute top-0 right-[30%] bottom-0 w-px bg-white/5 -rotate-6 origin-top" />

      <!-- Red vertical accent bar -->
      <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary-500" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div class="max-w-3xl pl-6">
          <!-- Badge -->
          <div class="hero-badge flex items-center gap-3 mb-8">
            <div class="h-px w-8 bg-gold-500" />
            <span class="section-label text-gold-500">Tous corps d'état — La Réunion</span>
          </div>

          <!-- Animated red line -->
          <div class="hero-line h-0.5 bg-primary-500 w-24 mb-6" />

          <!-- Title -->
          <h1 class="font-display leading-none mb-8">
            <span class="hero-title-1 block text-6xl md:text-8xl lg:text-9xl text-white tracking-wide">
              CONSTRUISONS
            </span>
            <span class="hero-title-2 block text-6xl md:text-8xl lg:text-9xl text-primary-500 tracking-wide">
              ENSEMBLE
            </span>
          </h1>

          <p class="hero-body text-lg text-dark-300 mb-10 leading-relaxed max-w-xl font-light">
            Du terrassement aux finitions, AJP Construction vous accompagne sur tous vos travaux de bâtiment à La Réunion.
          </p>

          <div class="hero-cta flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/devis" class="btn-primary text-base px-7 py-3.5 flex items-center justify-center gap-2 tracking-wide uppercase text-sm">
              Demander un devis gratuit
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <a href="#realisations" class="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm tracking-wide uppercase">
              Voir nos réalisations
            </a>
          </div>
        </div>
      </div>

      <!-- Stats bar -->
      <div class="hero-stats absolute bottom-0 left-0 right-0 border-t border-white/10 bg-dark-900/80 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-3 divide-x divide-white/10">
            <div v-for="stat in stats" :key="stat.label" class="py-6 px-8 text-center">
              <div class="font-display text-4xl text-white tracking-wide">{{ stat.value }}</div>
              <div class="text-dark-400 text-xs mt-1 tracking-widest uppercase font-medium">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RÉALISATIONS aperçu -->
    <section id="realisations" class="py-24 bg-dark-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between mb-16">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="h-px w-8 bg-primary-500" />
              <span class="section-label">Projets récents</span>
            </div>
            <h2 class="font-display text-5xl md:text-6xl text-white tracking-wide leading-none">
              NOS <span class="text-primary-500">RÉALISATIONS</span>
            </h2>
          </div>
          <NuxtLink to="/realisations" class="hidden md:flex items-center gap-2 text-sm text-dark-300 hover:text-white transition-colors tracking-wider uppercase font-medium">
            Tout voir
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl aspect-[4/3] md:aspect-auto cursor-pointer" @click="goToCategory(homepage.cards[0].category)">
            <img :src="homepage.cards[0].image" :alt="homepage.cards[0].label" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <div class="h-px w-8 bg-primary-500 mb-3" />
              <div class="font-display text-2xl text-white tracking-wide">{{ homepage.cards[0].label.toUpperCase() }}</div>
            </div>
          </div>

          <div class="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer" @click="goToCategory(homepage.cards[1].category)">
            <img :src="homepage.cards[1].image" :alt="homepage.cards[1].label" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <div class="font-display text-lg text-white tracking-wide">{{ homepage.cards[1].label.toUpperCase() }}</div>
            </div>
          </div>

          <div class="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer" @click="goToCategory(homepage.cards[2].category)">
            <img :src="homepage.cards[2].image" :alt="homepage.cards[2].label" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <div class="font-display text-lg text-white tracking-wide">{{ homepage.cards[2].label.toUpperCase() }}</div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8 md:hidden">
          <NuxtLink to="/realisations" class="btn-primary px-8 py-3">
            Voir toutes nos réalisations
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- EXPERTISE -->
    <section id="expertise" class="py-24 relative diagonal-accent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-4">
            <div class="h-px w-8 bg-primary-500" />
            <span class="section-label">Savoir-faire</span>
          </div>
          <h2 class="font-display text-5xl md:text-6xl text-white tracking-wide leading-none">
            DOMAINES <span class="text-primary-500">D'EXPERTISE</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark-700">
          <div
            v-for="(service, i) in services"
            :key="service.title"
            class="bg-dark-900 p-8 hover:bg-dark-800 transition-colors group"
          >
            <div class="flex items-start gap-6">
              <div class="shrink-0">
                <div class="font-display text-5xl text-dark-700 group-hover:text-primary-500/30 transition-colors leading-none">
                  0{{ i + 1 }}
                </div>
              </div>
              <div class="flex-1 pt-1">
                <h3 class="font-display text-2xl text-white tracking-wide mb-3 group-hover:text-primary-400 transition-colors">{{ service.title.toUpperCase() }}</h3>
                <p class="text-dark-400 text-sm leading-relaxed mb-4">{{ service.description }}</p>
                <ul class="grid grid-cols-2 gap-x-4 gap-y-2">
                  <li v-for="item in service.items" :key="item" class="flex items-center gap-2 text-sm text-dark-300">
                    <div class="w-1 h-1 bg-primary-500 shrink-0" />
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="relative overflow-hidden bg-dark-900 py-28 border-t border-white/5">
      <!-- Background accent -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-transparent" />
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-12 bg-gold-500" />
          <span class="section-label text-gold-500">Passons à l'action</span>
          <div class="h-px w-12 bg-gold-500" />
        </div>

        <h2 class="font-display text-6xl md:text-8xl text-white mb-6 tracking-wide leading-none">
          UN PROJET<br/><span class="text-primary-500">EN TÊTE ?</span>
        </h2>

        <p class="text-lg text-dark-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Contactez-nous pour obtenir un devis gratuit et sans engagement. Nous intervenons sur toute l'île de La Réunion.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/devis" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors text-sm tracking-widest uppercase">
            Demander un devis gratuit
          </NuxtLink>
          <a href="tel:+262692422492" class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors text-sm tracking-widest uppercase">
            Nous appeler
          </a>
        </div>

        <div class="flex flex-wrap justify-center gap-8 mt-12 text-dark-400 text-sm">
          <span>06 92 42 24 92</span>
          <span class="text-dark-700">|</span>
          <span>contact@ajp-construction.fr</span>
          <span class="text-dark-700">|</span>
          <span>La Réunion (974)</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

interface HomepageConfig {
  heroImage: string
  cards: Array<{ image: string; label: string; category: string }>
}

const { data: homepageData } = await useFetch<HomepageConfig>('/api/homepage')
const homepage = computed(() => homepageData.value ?? {
  heroImage: '',
  cards: [
    { image: '', label: 'Construction neuve', category: 'Gros œuvre' },
    { image: '', label: 'Terrassement', category: 'Terrassement & VRD' },
    { image: '', label: 'Toiture & Couverture', category: 'Charpente & Couverture' },
  ],
})

const stats = [
  { value: '15+', label: 'Années d\'expérience' },
  { value: '500+', label: 'Projets réalisés' },
  { value: '100%', label: 'Satisfaction client' },
]

const services = [
  {
    title: 'Terrassement & VRD',
    description: 'Préparation de terrain, voirie et réseaux divers pour vos projets.',
    items: ['Décapage', 'Fouilles', 'VRD', 'Assainissement'],
  },
  {
    title: 'Gros œuvre',
    description: 'Fondations, maçonnerie, structure béton armé.',
    items: ['Fondations', 'Maçonnerie', 'Dallage', 'Béton armé'],
  },
  {
    title: 'Charpente & Couverture',
    description: 'Charpente bois ou métal, couverture et étanchéité.',
    items: ['Charpente bois', 'Charpente métal', 'Couverture', 'Étanchéité'],
  },
  {
    title: 'Second œuvre',
    description: 'Plomberie, électricité, peinture, carrelage.',
    items: ['Plomberie', 'Électricité', 'Peinture', 'Carrelage'],
  },
]

function goToCategory(category: string) {
  router.push({ path: '/realisations', query: { category } })
}
</script>
