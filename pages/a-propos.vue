<template>
  <div class="bg-dark-900 text-white min-h-screen">
    <!-- Hero -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-transparent" />
      <div class="absolute top-10 right-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-6 animate-on-scroll">
          Notre histoire
        </span>
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 animate-on-scroll">
          À <span class="text-primary-500">propos</span>
        </h1>
        <p class="text-xl text-dark-300 max-w-2xl mx-auto animate-on-scroll delay-100">
          Découvrez AJP Construction et notre engagement pour vos projets à La Réunion.
        </p>
      </div>
    </section>

    <!-- Présentation -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-bold mb-8">
              Votre partenaire <span class="text-primary-500">BTP</span> à La Réunion
            </h2>
            <div class="space-y-5 text-dark-300 leading-relaxed text-lg">
              <p>
                AJP Construction est une entreprise de bâtiment tous corps d'état basée à La Réunion. Nous intervenons sur l'ensemble de l'île pour des projets de construction neuve, de rénovation et d'aménagement.
              </p>
              <p>
                Notre équipe de professionnels qualifiés maîtrise l'ensemble des corps de métier du bâtiment : du terrassement aux finitions, en passant par le gros œuvre et la charpente.
              </p>
              <p>
                Notre engagement : vous offrir un travail de qualité, dans le respect des délais et de votre budget.
              </p>
            </div>
          </div>

          <div class="animate-on-scroll delay-200">
            <div class="relative group">
              <div class="absolute -inset-1 rounded-2xl gradient-border opacity-40 group-hover:opacity-80 transition-opacity duration-500 blur-sm" />
              <div class="relative bg-dark-800 rounded-2xl p-16 flex items-center justify-center border border-dark-700">
                <img src="/logo.png" alt="AJP Construction" class="w-56 h-auto group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chiffres clés -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
          Nos chiffres <span class="text-primary-500">clés</span>
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="animate-on-scroll relative group"
            :class="'delay-' + (i + 1) + '00'"
          >
            <div class="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div class="relative bg-dark-800 rounded-2xl p-8 text-center border border-dark-700 group-hover:border-primary-500/30 transition-colors duration-500">
              <div class="text-4xl md:text-5xl font-extrabold text-primary-500 mb-3">{{ stat.value }}</div>
              <div class="text-dark-400 font-medium text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Valeurs -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
          Nos <span class="text-primary-500">valeurs</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(value, i) in values"
            :key="value.title"
            class="animate-on-scroll group"
            :class="'delay-' + (i + 1) + '00'"
          >
            <div class="bg-dark-800 rounded-2xl p-8 border border-dark-700 hover:border-primary-500/30 transition-all duration-500 h-full">
              <div class="w-14 h-14 bg-primary-500/10 border border-primary-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 group-hover:glow-red transition-all duration-500">
                <svg class="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="value.iconPath" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">{{ value.title }}</h3>
              <p class="text-dark-400 leading-relaxed">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative animate-on-scroll">
          <div class="absolute -inset-1 rounded-2xl gradient-border opacity-30 blur-sm" />
          <div class="relative bg-dark-800 rounded-2xl p-12 md:p-16 text-center border border-dark-700">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Travaillons <span class="text-primary-500">ensemble</span></h2>
            <p class="text-dark-300 text-lg mb-10 max-w-xl mx-auto">
              Vous avez un projet ? Parlons-en et construisons-le ensemble.
            </p>
            <NuxtLink to="/devis" class="btn-primary text-lg px-10 py-4 glow-red">
              Contactez-nous
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'À propos — AJP Construction',
  meta: [
    { name: 'description', content: 'Découvrez AJP Construction, entreprise tous corps d\'état à La Réunion. Notre équipe, nos valeurs et notre savoir-faire.' },
  ],
})

useScrollAnimation()

const stats = [
  { value: '10+', label: 'Années d\'expérience' },
  { value: '100+', label: 'Projets réalisés' },
  { value: '974', label: 'Toute La Réunion' },
  { value: '100%', label: 'Satisfaction client' },
]

const values = [
  {
    title: 'Qualité',
    description: 'Nous nous engageons à fournir un travail de qualité supérieure, avec des matériaux adaptés au climat réunionnais.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Fiabilité',
    description: 'Respect des délais, transparence sur les coûts et communication constante tout au long de votre projet.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Proximité',
    description: 'Basés à La Réunion, nous connaissons les spécificités locales et sommes réactifs pour chaque intervention.',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
]
</script>
