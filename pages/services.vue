<template>
  <div class="bg-dark-900 text-white min-h-screen">
    <!-- Hero -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-transparent" />
      <div class="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-6 animate-on-scroll">
          Tous corps d'état
        </span>
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 animate-on-scroll">
          Nos <span class="text-primary-500">Services</span>
        </h1>
        <p class="text-xl text-dark-300 max-w-2xl mx-auto animate-on-scroll delay-100">
          Nous maîtrisons chaque étape de votre projet de construction ou de rénovation à La Réunion.
        </p>
      </div>
    </section>

    <!-- Services détaillés -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-32">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <!-- Contenu -->
            <div :class="{ 'lg:order-2': index % 2 === 1 }" class="animate-on-scroll">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
                <span class="w-2 h-2 bg-primary-500 rounded-full" />
                <span class="text-primary-400 text-sm font-medium">{{ service.tag }}</span>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ service.title }}</h2>
              <p class="text-dark-300 leading-relaxed mb-8 text-lg">{{ service.description }}</p>
              <ul class="space-y-4">
                <li v-for="(item, i) in service.items" :key="item" class="flex items-start gap-3 animate-on-scroll" :class="'delay-' + (i + 1) + '00'">
                  <div class="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-dark-200">{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Visual card -->
            <div :class="{ 'lg:order-1': index % 2 === 1 }" class="animate-on-scroll delay-200">
              <div class="relative group">
                <div class="absolute -inset-1 rounded-2xl gradient-border opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div class="relative bg-dark-800 rounded-2xl p-12 flex flex-col items-center justify-center aspect-[4/3] border border-dark-700 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
                  <span class="text-8xl mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500">{{ service.emoji }}</span>
                  <span class="text-dark-400 font-medium text-lg relative z-10">{{ service.tag }}</span>
                </div>
              </div>
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
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Besoin d'un devis ?</h2>
            <p class="text-dark-300 text-lg mb-10 max-w-xl mx-auto">
              Décrivez-nous votre projet et recevez un devis personnalisé gratuit sous 48h.
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
  title: 'Services BTP La Réunion — Terrassement, Gros œuvre, Charpente | AJP Construction',
  meta: [
    { name: 'description', content: 'AJP Construction intervient sur tous vos travaux BTP à La Réunion : terrassement VRD, gros œuvre béton armé, charpente couverture, second œuvre. Devis gratuit. Saint-Denis, Saint-Pierre, Saint-Paul, Le Port.' },
  ],
})

useScrollAnimation()

const services = [
  {
    tag: 'Préparation',
    title: 'Terrassement & VRD',
    emoji: '🚜',
    description: 'Nous préparons votre terrain et réalisons l\'ensemble des travaux de voirie et réseaux divers nécessaires à votre projet.',
    items: [
      'Décapage et nivellement de terrain',
      'Fouilles et tranchées',
      'Voirie et réseaux divers (VRD)',
      'Assainissement et drainage',
      'Remblaiement et compactage',
    ],
  },
  {
    tag: 'Structure',
    title: 'Gros œuvre',
    emoji: '🏗️',
    description: 'La base solide de tout projet de construction. Nous réalisons l\'ensemble des travaux de structure, des fondations jusqu\'aux murs porteurs.',
    items: [
      'Fondations (semelles, radiers, pieux)',
      'Maçonnerie et murs porteurs',
      'Dallage et planchers béton',
      'Béton armé et structures',
      'Élévation et escaliers',
    ],
  },
  {
    tag: 'Toiture',
    title: 'Charpente & Couverture',
    emoji: '🏠',
    description: 'De la charpente à la couverture, nous assurons la protection et la durabilité de votre toiture face au climat réunionnais.',
    items: [
      'Charpente traditionnelle bois',
      'Charpente métallique',
      'Couverture en tôle et tuiles',
      'Étanchéité de toiture',
      'Zinguerie et évacuation des eaux',
    ],
  },
  {
    tag: 'Finitions',
    title: 'Second œuvre',
    emoji: '🔨',
    description: 'Toutes les finitions pour rendre votre construction habitable et confortable. Un travail soigné jusque dans les moindres détails.',
    items: [
      'Plomberie et sanitaires',
      'Électricité et domotique',
      'Peinture intérieure et extérieure',
      'Carrelage et revêtements de sol',
      'Menuiserie et agencement',
      'Cloisons et faux plafonds',
    ],
  },
]
</script>
