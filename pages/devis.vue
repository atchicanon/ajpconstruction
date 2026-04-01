<template>
  <div>
    <!-- Hero -->
    <section class="bg-dark-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Demander un devis</h1>
        <p class="text-xl text-dark-300 max-w-2xl mx-auto">
          Décrivez votre projet et recevez un devis gratuit et sans engagement sous 48h.
        </p>
      </div>
    </section>

    <!-- Formulaire -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <!-- Formulaire principal -->
          <div class="lg:col-span-2">
            <form @submit.prevent="submitForm" class="space-y-8">
              <!-- Informations personnelles -->
              <div>
                <h2 class="text-xl font-bold text-dark-900 mb-6 flex items-center gap-2">
                  <span class="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Vos coordonnées
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-dark-700 mb-2">Nom *</label>
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-dark-700 mb-2">Prénom *</label>
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-dark-700 mb-2">Email *</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-medium text-dark-700 mb-2">Téléphone *</label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="06 92 XX XX XX"
                    />
                  </div>
                </div>
              </div>

              <!-- Projet -->
              <div>
                <h2 class="text-xl font-bold text-dark-900 mb-6 flex items-center gap-2">
                  <span class="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Votre projet
                </h2>
                <div class="space-y-6">
                  <div>
                    <label for="projectType" class="block text-sm font-medium text-dark-700 mb-2">Type de travaux *</label>
                    <select
                      id="projectType"
                      v-model="form.projectType"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="" disabled>Sélectionnez le type de travaux</option>
                      <option value="terrassement">Terrassement & VRD</option>
                      <option value="gros-oeuvre">Gros œuvre</option>
                      <option value="charpente">Charpente & Couverture</option>
                      <option value="second-oeuvre">Second œuvre</option>
                      <option value="renovation">Rénovation complète</option>
                      <option value="construction">Construction neuve</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label for="location" class="block text-sm font-medium text-dark-700 mb-2">Lieu du chantier *</label>
                    <input
                      id="location"
                      v-model="form.location"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Ville ou commune"
                    />
                  </div>

                  <div>
                    <label for="budget" class="block text-sm font-medium text-dark-700 mb-2">Budget estimé</label>
                    <select
                      id="budget"
                      v-model="form.budget"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Non défini</option>
                      <option value="moins-10k">Moins de 10 000 €</option>
                      <option value="10k-30k">10 000 € - 30 000 €</option>
                      <option value="30k-80k">30 000 € - 80 000 €</option>
                      <option value="80k-150k">80 000 € - 150 000 €</option>
                      <option value="plus-150k">Plus de 150 000 €</option>
                    </select>
                  </div>

                  <div>
                    <label for="description" class="block text-sm font-medium text-dark-700 mb-2">Description du projet *</label>
                    <textarea
                      id="description"
                      v-model="form.description"
                      required
                      rows="5"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Décrivez votre projet en quelques lignes : nature des travaux, surface, contraintes particulières..."
                    />
                  </div>
                </div>
              </div>

              <!-- Submit -->
              <div class="pt-4">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="btn-primary w-full md:w-auto text-lg px-10 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isSubmitting">Envoyer ma demande de devis</span>
                  <span v-else class="flex items-center gap-2">
                    <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Envoi en cours...
                  </span>
                </button>
              </div>
            </form>

            <!-- Success message -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
            >
              <div v-if="submitSuccess" class="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 class="font-bold text-green-800">Demande envoyée avec succès !</h3>
                    <p class="text-green-700 mt-1">Nous avons bien reçu votre demande de devis. Nous vous recontacterons sous 48h.</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Sidebar coordonnées -->
          <div class="lg:col-span-1">
            <div class="bg-gray-50 rounded-2xl p-8 sticky top-28">
              <h3 class="text-lg font-bold text-dark-900 mb-6">Nos coordonnées</h3>

              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-dark-900">Adresse</p>
                    <p class="text-dark-400 text-sm">La Réunion (974)</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-dark-900">Téléphone</p>
                    <a href="tel:+262692422492" class="text-dark-400 text-sm hover:text-primary-500 transition-colors">06 92 42 24 92</a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-dark-900">Email</p>
                    <p class="text-dark-400 text-sm">contact@ajp-construction.fr</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-dark-900">Disponibilité</p>
                    <p class="text-dark-400 text-sm">Lun - Ven : 7h - 17h</p>
                    <p class="text-dark-400 text-sm">Sam : 7h - 12h</p>
                  </div>
                </div>
              </div>

              <div class="mt-8 p-4 bg-primary-50 rounded-xl">
                <p class="text-primary-700 text-sm font-medium">
                  Devis gratuit et sans engagement. Réponse sous 48h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Demander un devis — AJP Construction',
  meta: [
    { name: 'description', content: 'Demandez un devis gratuit à AJP Construction pour vos travaux de bâtiment à La Réunion. Réponse sous 48h.' },
  ],
})

const form = reactive({
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  budget: '',
  description: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

async function submitForm() {
  isSubmitting.value = true

  await $fetch('/api/devis', { method: 'POST', body: form })

  submitSuccess.value = true
  isSubmitting.value = false

  Object.assign(form, {
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '',
    description: '',
  })
}
</script>
