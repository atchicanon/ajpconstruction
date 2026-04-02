<template>
  <div class="bg-dark-800 rounded-2xl p-8 md:p-10 border border-dark-700">
    <!-- Header -->
    <div class="text-center mb-8">
      <span class="inline-flex items-center px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">Réponse rapide</span>
      <h2 class="text-2xl md:text-3xl font-display text-white mt-2 tracking-wide">3 QUESTIONS, ON VOUS RAPPELLE</h2>
      <p class="text-dark-300 mt-2 text-sm">Pas de long formulaire. Donnez-nous l'essentiel, on s'occupe du reste.</p>
    </div>

    <!-- Progress bar -->
    <div class="flex items-center gap-2 mb-10">
      <div
        v-for="s in 3"
        :key="s"
        class="flex-1 h-1 rounded-full transition-all duration-500"
        :class="s <= currentStep ? 'bg-primary-500' : 'bg-dark-600'"
      ></div>
    </div>

    <!-- Step 1: Type de projet -->
    <Transition name="step" mode="out-in">
      <div v-if="currentStep === 1" key="step1">
        <p class="text-white font-semibold mb-5 text-lg">
          <span class="text-primary-500 mr-2">01.</span> Quel type de projet ?
        </p>
        <div class="grid grid-cols-2 gap-3">
          <button
            v-for="type in projectTypes"
            :key="type.value"
            class="flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 cursor-pointer text-center group"
            :class="wizard.projectType === type.value
              ? 'border-primary-500 bg-primary-500/10 text-white'
              : 'border-dark-600 bg-dark-700 text-dark-300 hover:border-dark-500 hover:text-white'"
            @click="selectProjectType(type.value)"
          >
            <span class="text-xl">{{ type.icon }}</span>
            <span class="text-xs font-medium leading-tight">{{ type.label }}</span>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Step 2: Timing -->
    <Transition name="step" mode="out-in">
      <div v-if="currentStep === 2" key="step2">
        <p class="text-white font-semibold mb-5 text-lg">
          <span class="text-primary-500 mr-2">02.</span> Quand souhaitez-vous démarrer ?
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            v-for="t in timings"
            :key="t.value"
            class="flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left"
            :class="wizard.timing === t.value
              ? 'border-primary-500 bg-primary-500/10 text-white'
              : 'border-dark-600 bg-dark-700 text-dark-300 hover:border-dark-500 hover:text-white'"
            @click="selectTiming(t.value)"
          >
            <span class="text-2xl shrink-0">{{ t.icon }}</span>
            <span class="font-medium">{{ t.label }}</span>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Step 3: Téléphone -->
    <Transition name="step" mode="out-in">
      <div v-if="currentStep === 3" key="step3">
        <p class="text-white font-semibold mb-5 text-lg">
          <span class="text-primary-500 mr-2">03.</span> Votre numéro de téléphone
        </p>
        <div class="max-w-sm">
          <input
            v-model="wizard.phone"
            type="tel"
            placeholder="06 92 XX XX XX"
            autofocus
            class="w-full px-5 py-4 bg-dark-700 border-2 border-dark-600 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 text-lg transition-colors"
            @keyup.enter="submitWizard"
          />
          <p class="text-dark-400 text-sm mt-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            Numéro utilisé uniquement pour vous rappeler, jamais partagé.
          </p>
        </div>

        <button
          :disabled="!wizard.phone || isSubmitting"
          class="mt-6 px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold uppercase tracking-widest rounded-xl transition-all duration-200 flex items-center gap-3 cursor-pointer"
          @click="submitWizard"
        >
          <span v-if="!isSubmitting">AJP me rappelle →</span>
          <span v-else class="flex items-center gap-2">
            <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Envoi en cours...
          </span>
        </button>
      </div>
    </Transition>

    <!-- Confirmation -->
    <Transition name="step" mode="out-in">
      <div v-if="currentStep === 4" key="step4" class="text-center py-4">
        <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 class="text-white text-xl font-bold mb-2">Demande envoyée !</h3>
        <p class="text-dark-300 text-sm leading-relaxed">
          AJP Construction vous rappelle <strong class="text-gold-400">dans les plus brefs délais</strong>.<br/>
          Vous pouvez aussi nous joindre directement :
        </p>
        <a
          :href="whatsappSuccessUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-xl text-white font-bold transition-all duration-200 hover:scale-105"
          style="background-color: #25D366;"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Continuer sur WhatsApp
        </a>
      </div>
    </Transition>

    <!-- Back button -->
    <div v-if="currentStep > 1 && currentStep < 4" class="mt-6">
      <button class="text-dark-400 hover:text-white text-sm transition-colors cursor-pointer" @click="currentStep--">
        ← Retour
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentStep = ref(1)
const isSubmitting = ref(false)

const wizard = reactive({
  projectType: '',
  timing: '',
  phone: '',
})

const projectTypes = [
  { value: 'Construction neuve', label: 'Construction neuve', icon: '🏗️' },
  { value: 'Rénovation', label: 'Rénovation', icon: '🔨' },
  { value: 'Extension', label: 'Extension', icon: '📐' },
  { value: 'Terrassement', label: 'Terrassement', icon: '🚜' },
  { value: 'Charpente / Couverture', label: 'Charpente / Couverture', icon: '🏠' },
  { value: 'Autre', label: 'Autre projet', icon: '📋' },
]

const timings = [
  { value: 'Dès que possible', label: 'Dès que possible', icon: '⚡' },
  { value: 'Dans 3 mois', label: 'Dans 3 mois', icon: '📅' },
  { value: 'Dans 6 mois', label: 'Dans 6 mois', icon: '🗓️' },
  { value: 'Date non définie', label: 'Date non définie', icon: '🤔' },
]

const whatsappSuccessUrl = computed(() => {
  const msg = encodeURIComponent(`Bonjour AJP Construction, j'ai soumis une demande de rappel. Mon projet : ${wizard.projectType}.`)
  return `https://wa.me/262692422492?text=${msg}`
})

function selectProjectType(value: string) {
  wizard.projectType = value
  currentStep.value = 2
}

function selectTiming(value: string) {
  wizard.timing = value
  currentStep.value = 3
}

async function submitWizard() {
  if (!wizard.phone) return
  isSubmitting.value = true
  await $fetch('/api/rappel', { method: 'POST', body: wizard })
  currentStep.value = 4
  isSubmitting.value = false
}
</script>

<style scoped>
.step-enter-active,
.step-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.step-enter-from {
  opacity: 0;
  transform: translateX(16px);
}
.step-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}
</style>
