<template>
  <div class="bg-dark-900 border border-dark-700 rounded-2xl overflow-hidden">
    <!-- Header -->
    <div class="bg-dark-800 px-8 py-6 border-b border-dark-700">
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center shrink-0">
          <svg class="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <div>
          <span class="section-label text-xs">Outil gratuit</span>
          <h2 class="text-xl md:text-2xl font-display text-white tracking-wide">ESTIMEZ VOTRE BUDGET</h2>
        </div>
      </div>
      <p class="text-dark-400 text-sm mt-3">Tarifs indicatifs pour La Réunion. Estimation non contractuelle.</p>
    </div>

    <div class="p-8 md:p-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Configurateur gauche -->
        <div class="space-y-8">
          <!-- Type de projet -->
          <div>
            <label class="block text-white font-semibold mb-4 text-sm uppercase tracking-widest">Type de projet</label>
            <div class="grid grid-cols-2 gap-2">
              <button
                v-for="type in projectTypes"
                :key="type.value"
                class="flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left"
                :class="config.projectType === type.value
                  ? 'border-primary-500 bg-primary-500/10 text-white'
                  : 'border-dark-700 bg-dark-800 text-dark-400 hover:border-dark-500 hover:text-white'"
                @click="config.projectType = type.value"
              >
                <span class="text-lg shrink-0">{{ type.icon }}</span>
                <span class="text-sm font-medium leading-tight">{{ type.label }}</span>
              </button>
            </div>
          </div>

          <!-- Surface -->
          <div>
            <label class="block text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Surface
              <span class="text-primary-500 ml-2 normal-case font-bold text-base">{{ config.surface }} m²</span>
            </label>
            <div class="space-y-3">
              <input
                v-model.number="config.surface"
                type="range"
                :min="surfaceMin"
                :max="surfaceMax"
                :step="surfaceStep"
                class="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary-500 bg-dark-700"
              />
              <div class="flex justify-between text-dark-500 text-xs">
                <span>{{ surfaceMin }} m²</span>
                <span>{{ surfaceMax }} m²</span>
              </div>
            </div>
          </div>

          <!-- Finitions -->
          <div>
            <label class="block text-white font-semibold mb-4 text-sm uppercase tracking-widest">Niveau de finitions</label>
            <div class="space-y-2">
              <button
                v-for="level in finitionLevels"
                :key="level.value"
                class="w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 transition-all duration-200 cursor-pointer"
                :class="config.finition === level.value
                  ? 'border-primary-500 bg-primary-500/10'
                  : 'border-dark-700 bg-dark-800 hover:border-dark-500'"
                @click="config.finition = level.value"
              >
                <div class="text-left">
                  <p class="font-semibold text-white text-sm">{{ level.label }}</p>
                  <p class="text-dark-400 text-xs mt-0.5">{{ level.description }}</p>
                </div>
                <div class="flex gap-1 shrink-0 ml-4">
                  <span
                    v-for="i in 3"
                    :key="i"
                    class="w-3 h-3 rounded-full"
                    :class="i <= level.stars ? 'bg-gold-400' : 'bg-dark-600'"
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Résultat droite -->
        <div class="flex flex-col">
          <div
            class="flex-1 rounded-2xl border-2 p-8 transition-all duration-500"
            :class="estimate ? 'border-gold-500/40 bg-dark-800' : 'border-dark-700 bg-dark-800'"
          >
            <div v-if="estimate">
              <!-- Fourchette principale -->
              <div class="text-center mb-8">
                <p class="text-dark-400 text-sm uppercase tracking-widest mb-3">Estimation indicative</p>
                <div class="font-display text-4xl md:text-5xl text-white tracking-wide leading-none">
                  {{ formatPrice(estimate.min) }}
                </div>
                <div class="text-dark-400 text-lg my-2">—</div>
                <div class="font-display text-4xl md:text-5xl text-gold-400 tracking-wide leading-none">
                  {{ formatPrice(estimate.max) }}
                </div>
                <p class="text-dark-500 text-xs mt-4">hors taxes · prix indicatifs La Réunion</p>
              </div>

              <!-- Détails -->
              <div class="space-y-3 mb-8">
                <div class="flex items-center justify-between py-3 border-b border-dark-700">
                  <span class="text-dark-400 text-sm">Durée estimée</span>
                  <span class="text-white font-semibold text-sm">{{ estimate.duration }}</span>
                </div>
                <div class="flex items-center justify-between py-3 border-b border-dark-700">
                  <span class="text-dark-400 text-sm">Surface configurée</span>
                  <span class="text-white font-semibold text-sm">{{ config.surface }} m²</span>
                </div>
                <div class="flex items-center justify-between py-3">
                  <span class="text-dark-400 text-sm">Prix moyen indicatif</span>
                  <span class="text-white font-semibold text-sm">{{ estimate.pricePerM2 }}</span>
                </div>
              </div>

              <!-- Avertissement -->
              <div class="bg-dark-700 rounded-xl p-4 mb-6">
                <p class="text-dark-300 text-xs leading-relaxed">
                  <strong class="text-gold-400">Important :</strong> Cette estimation est indicative et peut varier selon la configuration du terrain, les accès chantier, et les spécificités techniques de votre projet.
                </p>
              </div>

              <!-- CTA -->
              <NuxtLink
                to="/devis"
                class="w-full block text-center px-6 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold uppercase tracking-widest rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/20"
              >
                Obtenir un devis précis →
              </NuxtLink>
            </div>

            <!-- État vide -->
            <div v-else class="h-full flex flex-col items-center justify-center text-center py-8">
              <div class="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <p class="text-dark-400 font-medium">Sélectionnez un type de projet</p>
              <p class="text-dark-600 text-sm mt-1">L'estimation apparaîtra ici</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type ProjectType = 'construction' | 'extension' | 'renovation' | 'terrassement'
type FinitionLevel = 'economique' | 'standard' | 'premium'

const config = reactive({
  projectType: '' as ProjectType | '',
  surface: 100,
  finition: 'standard' as FinitionLevel,
})

const projectTypes = [
  { value: 'construction' as ProjectType, label: 'Construction neuve', icon: '🏗️' },
  { value: 'extension' as ProjectType, label: 'Extension', icon: '📐' },
  { value: 'renovation' as ProjectType, label: 'Rénovation', icon: '🔨' },
  { value: 'terrassement' as ProjectType, label: 'Terrassement', icon: '🚜' },
]

const finitionLevels = [
  { value: 'economique' as FinitionLevel, label: 'Économique', description: 'Matériaux standards, fonctionnel', stars: 1 },
  { value: 'standard' as FinitionLevel, label: 'Standard', description: 'Bon rapport qualité / prix', stars: 2 },
  { value: 'premium' as FinitionLevel, label: 'Premium', description: 'Matériaux haut de gamme', stars: 3 },
]

const surfaceConfig = computed(() => {
  switch (config.projectType) {
    case 'construction': return { min: 50, max: 400, step: 10, default: 120 }
    case 'extension': return { min: 20, max: 200, step: 5, default: 50 }
    case 'renovation': return { min: 20, max: 300, step: 10, default: 80 }
    case 'terrassement': return { min: 100, max: 2000, step: 50, default: 500 }
    default: return { min: 20, max: 400, step: 10, default: 100 }
  }
})

const surfaceMin = computed(() => surfaceConfig.value.min)
const surfaceMax = computed(() => surfaceConfig.value.max)
const surfaceStep = computed(() => surfaceConfig.value.step)

watch(() => config.projectType, () => {
  config.surface = surfaceConfig.value.default
})

// Tarifs €/m² [min, max] — prix La Réunion (légèrement supérieurs à la métropole)
const rates: Record<ProjectType, Record<FinitionLevel, [number, number]>> = {
  construction: {
    economique: [1400, 1750],
    standard: [1750, 2300],
    premium: [2300, 3500],
  },
  extension: {
    economique: [1200, 1600],
    standard: [1600, 2100],
    premium: [2100, 3000],
  },
  renovation: {
    economique: [350, 650],
    standard: [650, 1200],
    premium: [1200, 2000],
  },
  terrassement: {
    economique: [30, 60],
    standard: [60, 110],
    premium: [110, 180],
  },
}

const durations: Record<ProjectType, Record<FinitionLevel, string>> = {
  construction: {
    economique: '8 – 12 mois',
    standard: '10 – 14 mois',
    premium: '12 – 18 mois',
  },
  extension: {
    economique: '3 – 5 mois',
    standard: '4 – 7 mois',
    premium: '6 – 10 mois',
  },
  renovation: {
    economique: '1 – 3 mois',
    standard: '2 – 5 mois',
    premium: '4 – 8 mois',
  },
  terrassement: {
    economique: '1 – 3 semaines',
    standard: '2 – 6 semaines',
    premium: '4 – 10 semaines',
  },
}

const estimate = computed(() => {
  if (!config.projectType) return null

  const [rateMin, rateMax] = rates[config.projectType as ProjectType][config.finition]
  const total = config.surface
  const min = Math.round((total * rateMin) / 1000) * 1000
  const max = Math.round((total * rateMax) / 1000) * 1000
  const avgRate = Math.round((rateMin + rateMax) / 2)
  const duration = durations[config.projectType as ProjectType][config.finition]

  return {
    min,
    max,
    duration,
    pricePerM2: `~${avgRate.toLocaleString('fr-FR')} €/m²`,
  }
})

function formatPrice(n: number): string {
  if (n >= 1000000) {
    return `${(n / 1000000).toFixed(1).replace('.', ',')} M€`
  }
  if (n >= 1000) {
    return `${Math.round(n / 1000)} k€`
  }
  return `${n.toLocaleString('fr-FR')} €`
}
</script>
