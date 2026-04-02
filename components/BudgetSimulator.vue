<template>
  <div class="bg-dark-900 border border-dark-700 rounded-2xl overflow-hidden">
    <!-- Header -->
    <div class="bg-dark-800 px-6 py-5 border-b border-dark-700">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 bg-gold-500/20 rounded-lg flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <div>
          <span class="section-label text-xs">Outil gratuit</span>
          <h2 class="text-lg md:text-xl font-display text-white tracking-wide leading-tight">ESTIMEZ VOTRE BUDGET</h2>
        </div>
      </div>
      <p class="text-dark-400 text-xs mt-2">Tarifs indicatifs pour La Réunion. Estimation non contractuelle.</p>
    </div>

    <div class="p-6">
      <!-- Type de projet -->
      <div class="mb-6">
        <label class="block text-white font-semibold mb-3 text-xs uppercase tracking-widest">Type de projet</label>
        <div class="grid grid-cols-2 gap-2">
          <button
            v-for="type in projectTypes"
            :key="type.value"
            class="flex items-center gap-2 px-3 py-3 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left min-w-0"
            :class="config.projectType === type.value
              ? 'border-primary-500 bg-primary-500/10 text-white'
              : 'border-dark-700 bg-dark-800 text-dark-400 hover:border-dark-500 hover:text-white'"
            @click="config.projectType = type.value"
          >
            <span class="text-base shrink-0">{{ type.icon }}</span>
            <span class="text-xs font-medium leading-tight min-w-0">{{ type.label }}</span>
          </button>
        </div>
      </div>

      <!-- Surface + Finitions côte à côte sur md+ -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- Surface -->
        <div>
          <label class="block text-white font-semibold mb-3 text-xs uppercase tracking-widest">
            Surface — <span class="text-primary-500 normal-case font-bold">{{ config.surface }} m²</span>
          </label>
          <input
            v-model.number="config.surface"
            type="range"
            :min="surfaceMin"
            :max="surfaceMax"
            :step="surfaceStep"
            class="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary-500 bg-dark-700"
          />
          <div class="flex justify-between text-dark-500 text-xs mt-2">
            <span>{{ surfaceMin }} m²</span>
            <span>{{ surfaceMax }} m²</span>
          </div>
        </div>

        <!-- Finitions -->
        <div>
          <label class="block text-white font-semibold mb-3 text-xs uppercase tracking-widest">Finitions</label>
          <div class="space-y-1.5">
            <button
              v-for="level in finitionLevels"
              :key="level.value"
              class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl border-2 transition-all duration-200 cursor-pointer"
              :class="config.finition === level.value
                ? 'border-primary-500 bg-primary-500/10'
                : 'border-dark-700 bg-dark-800 hover:border-dark-500'"
              @click="config.finition = level.value"
            >
              <div class="text-left min-w-0 mr-3">
                <p class="font-semibold text-white text-xs">{{ level.label }}</p>
                <p class="text-dark-400 text-xs truncate">{{ level.description }}</p>
              </div>
              <div class="flex gap-1 shrink-0">
                <span
                  v-for="i in 3"
                  :key="i"
                  class="w-2.5 h-2.5 rounded-full"
                  :class="i <= level.stars ? 'bg-gold-400' : 'bg-dark-600'"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Résultat -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div v-if="estimate" class="border-2 border-gold-500/30 bg-dark-800 rounded-2xl p-5">
          <!-- Fourchette -->
          <p class="text-dark-400 text-xs uppercase tracking-widest mb-3 text-center">Estimation indicative</p>
          <div class="flex items-center justify-center gap-4 mb-4">
            <span class="font-display text-3xl md:text-4xl text-white tracking-wide">{{ formatPrice(estimate.min) }}</span>
            <span class="text-dark-500">—</span>
            <span class="font-display text-3xl md:text-4xl text-gold-400 tracking-wide">{{ formatPrice(estimate.max) }}</span>
          </div>
          <p class="text-dark-500 text-xs text-center mb-4">hors taxes · prix indicatifs La Réunion</p>

          <!-- Détails -->
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="bg-dark-700 rounded-lg p-3 text-center">
              <p class="text-dark-400 text-xs mb-1">Durée</p>
              <p class="text-white font-semibold text-xs leading-tight">{{ estimate.duration }}</p>
            </div>
            <div class="bg-dark-700 rounded-lg p-3 text-center">
              <p class="text-dark-400 text-xs mb-1">Surface</p>
              <p class="text-white font-semibold text-xs">{{ config.surface }} m²</p>
            </div>
            <div class="bg-dark-700 rounded-lg p-3 text-center">
              <p class="text-dark-400 text-xs mb-1">Prix/m²</p>
              <p class="text-white font-semibold text-xs">{{ estimate.pricePerM2 }}</p>
            </div>
          </div>

          <NuxtLink
            to="/devis"
            class="w-full block text-center px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm uppercase tracking-widest rounded-xl transition-all duration-200"
          >
            Devis précis gratuit →
          </NuxtLink>
        </div>
      </Transition>

      <!-- État vide -->
      <div v-if="!estimate" class="border-2 border-dark-700 bg-dark-800 rounded-2xl p-6 text-center">
        <div class="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg class="w-6 h-6 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <p class="text-dark-400 text-sm font-medium">Sélectionnez un type de projet</p>
        <p class="text-dark-600 text-xs mt-1">L'estimation apparaîtra ici</p>
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
  { value: 'economique' as FinitionLevel, label: 'Économique', description: 'Matériaux standards', stars: 1 },
  { value: 'standard' as FinitionLevel, label: 'Standard', description: 'Bon rapport qualité/prix', stars: 2 },
  { value: 'premium' as FinitionLevel, label: 'Premium', description: 'Haut de gamme', stars: 3 },
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
    economique: '8–12 mois',
    standard: '10–14 mois',
    premium: '12–18 mois',
  },
  extension: {
    economique: '3–5 mois',
    standard: '4–7 mois',
    premium: '6–10 mois',
  },
  renovation: {
    economique: '1–3 mois',
    standard: '2–5 mois',
    premium: '4–8 mois',
  },
  terrassement: {
    economique: '1–3 sem.',
    standard: '2–6 sem.',
    premium: '4–10 sem.',
  },
}

const estimate = computed(() => {
  if (!config.projectType) return null

  const [rateMin, rateMax] = rates[config.projectType as ProjectType][config.finition]
  const min = Math.round((config.surface * rateMin) / 1000) * 1000
  const max = Math.round((config.surface * rateMax) / 1000) * 1000
  const avgRate = Math.round((rateMin + rateMax) / 2)
  const duration = durations[config.projectType as ProjectType][config.finition]

  return {
    min,
    max,
    duration,
    pricePerM2: `~${avgRate.toLocaleString('fr-FR')} €`,
  }
})

function formatPrice(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1).replace('.', ',')} M€`
  if (n >= 1000) return `${Math.round(n / 1000)} k€`
  return `${n.toLocaleString('fr-FR')} €`
}
</script>
