<template>
  <div class="bg-dark-900 text-white">
    <!-- HERO -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="Chantier" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-dark-900/50" />
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <!-- Logo grand -->

        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 border border-primary-500/30 rounded-full text-sm font-medium text-primary-400 mb-8">
            Tous corps d'état — La Réunion
          </div>

          <h1 class="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
            Construisons<br/>ensemble
            <span class="text-primary-500"> votre<br/>projet</span>
          </h1>

          <p class="text-xl text-dark-300 mb-10 leading-relaxed max-w-xl">
            Du terrassement aux finitions, AJP Construction vous accompagne sur tous vos travaux de bâtiment à La Réunion.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/devis" class="btn-primary text-base px-7 py-3.5 flex items-center justify-center gap-2">
              Demander un devis gratuit
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <a href="#realisations" class="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Voir nos réalisations
            </a>
          </div>
        </div>
      </div>

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

    <!-- RÉALISATIONS aperçu -->
    <section id="realisations" class="py-24 bg-dark-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Nos <span class="text-primary-500">réalisations</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto cursor-pointer" @click="goToCategory('Gros œuvre')">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80" alt="Construction" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
            <div class="absolute bottom-6 left-6 text-white font-bold text-xl">Construction neuve</div>
          </div>

          <div class="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer" @click="goToCategory('Terrassement & VRD')">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Terrassement" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent" />
            <div class="absolute bottom-4 left-4 text-white font-bold">Terrassement</div>
          </div>

          <div class="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer" @click="goToCategory('Charpente & Couverture')">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" alt="Toiture" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent" />
            <div class="absolute bottom-4 left-4 text-white font-bold">Toiture</div>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/realisations" class="btn-primary px-8 py-3">
            Voir toutes nos réalisations
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- EXPERTISE -->
    <section id="expertise" class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Nos domaines <span class="text-primary-500">d'expertise</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div v-for="service in services" :key="service.title" class="bg-dark-800 rounded-2xl p-7 border border-dark-700">
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl" :class="service.iconBg">
                {{ service.icon }}
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
                <p class="text-dark-400 text-sm leading-relaxed mb-4">{{ service.description }}</p>
                <ul class="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  <li v-for="item in service.items" :key="item" class="flex items-center gap-2 text-sm text-dark-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA ROUGE -->
    <section id="contact" class="relative overflow-hidden bg-primary-500 py-24">
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-6xl font-extrabold text-white mb-6">Un projet en tête ?</h2>
        <p class="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
          Contactez-nous pour obtenir un devis gratuit et sans engagement. Nous intervenons sur toute l'île de La Réunion.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/devis" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-500 font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors">
            Demander un devis gratuit
          </NuxtLink>
          <a href="tel:+262692000000" class="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
            Nous appeler
          </a>
        </div>

        <div class="flex flex-wrap justify-center gap-8 mt-12 text-primary-100 text-sm">
          <span class="flex items-center gap-2">0692 00 00 00</span>
          <span class="flex items-center gap-2">contact@ajp-construction.re</span>
          <span class="flex items-center gap-2">La Réunion (974)</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const stats = [
  { value: '15+', label: 'Années' },
  { value: '500+', label: 'Projets' },
  { value: '100%', label: 'Satisfaction' },
]

const services = [
  {
    icon: '⛏️',
    iconBg: 'bg-orange-500/20',
    title: 'Terrassement & VRD',
    description: 'Préparation de terrain, voirie et réseaux divers pour vos projets.',
    items: ['Décapage', 'Fouilles', 'VRD', 'Assainissement'],
  },
  {
    icon: '🏗️',
    iconBg: 'bg-red-500/20',
    title: 'Gros œuvre',
    description: 'Fondations, maçonnerie, structure béton armé.',
    items: ['Fondations', 'Maçonnerie', 'Dallage', 'Béton armé'],
  },
  {
    icon: '🏠',
    iconBg: 'bg-sky-500/20',
    title: 'Charpente & Couverture',
    description: 'Charpente bois ou métal, couverture et étanchéité.',
    items: ['Charpente bois', 'Charpente métal', 'Couverture', 'Étanchéité'],
  },
  {
    icon: '🔧',
    iconBg: 'bg-emerald-500/20',
    title: 'Second œuvre',
    description: 'Plomberie, électricité, peinture, carrelage.',
    items: ['Plomberie', 'Électricité', 'Peinture', 'Carrelage'],
  },
]

function goToCategory(category: string) {
  router.push({ path: '/realisations', query: { category } })
}
</script>
