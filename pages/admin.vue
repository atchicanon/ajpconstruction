<template>
  <div class="bg-dark-900 text-white min-h-screen">
    <!-- Login -->
    <div v-if="!authenticated" class="min-h-screen flex items-center justify-center px-4">
      <div class="bg-dark-800 rounded-2xl p-8 border border-dark-700 w-full max-w-sm">
        <div class="text-center mb-8">
          <img src="/logo.png" alt="AJP Construction" class="h-16 mx-auto mb-4" />
          <h1 class="text-xl font-bold">Administration</h1>
          <p class="text-dark-400 text-sm mt-2">Connectez-vous pour gérer le site</p>
        </div>
        <form @submit.prevent="login">
          <label class="block text-sm font-medium text-dark-300 mb-2">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Mot de passe"
          />
          <p v-if="loginError" class="text-red-400 text-sm mt-2">Mot de passe incorrect</p>
          <button type="submit" :disabled="loginLoading" class="btn-primary w-full mt-4 disabled:opacity-50">
            {{ loginLoading ? 'Connexion...' : 'Se connecter' }}
          </button>
        </form>
      </div>
    </div>

    <!-- Admin panel -->
    <div v-else>
      <!-- Header admin -->
      <header class="bg-dark-800 border-b border-dark-700 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div class="flex items-center gap-4">
            <img src="/logo.png" alt="AJP Construction" class="h-10" />
            <span class="font-bold text-lg">Administration</span>
          </div>
          <div class="flex items-center gap-4">
            <NuxtLink to="/" target="_blank" class="text-dark-400 hover:text-white text-sm transition-colors">
              Voir le site
            </NuxtLink>
            <button @click="logout" class="text-dark-400 hover:text-red-400 text-sm transition-colors">
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div class="bg-dark-800 rounded-xl p-6 border border-dark-700">
            <p class="text-dark-400 text-sm">Total réalisations</p>
            <p class="text-3xl font-bold text-primary-500 mt-1">{{ realisations.length }}</p>
          </div>
          <div class="bg-dark-800 rounded-xl p-6 border border-dark-700">
            <p class="text-dark-400 text-sm">Total photos</p>
            <p class="text-3xl font-bold text-primary-500 mt-1">{{ totalPhotos }}</p>
          </div>
          <div class="bg-dark-800 rounded-xl p-6 border border-dark-700">
            <p class="text-dark-400 text-sm">Catégories</p>
            <p class="text-3xl font-bold text-primary-500 mt-1">{{ uniqueCategories }}</p>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">Réalisations</h2>
          <button @click="openAddModal" class="btn-primary text-sm">
            + Ajouter une réalisation
          </button>
        </div>

        <!-- Liste des réalisations -->
        <div v-if="realisations.length === 0" class="bg-dark-800 rounded-2xl p-12 border border-dark-700 text-center">
          <p class="text-dark-400 text-lg mb-4">Aucune réalisation pour le moment</p>
          <button @click="openAddModal" class="btn-primary">Ajouter votre première réalisation</button>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="real in realisations"
            :key="real.id"
            class="bg-dark-800 rounded-xl border border-dark-700 p-6 hover:border-dark-600 transition-colors"
          >
            <div class="flex flex-col md:flex-row gap-6">
              <!-- Thumbnail -->
              <div class="w-full md:w-48 shrink-0">
                <div v-if="real.images.length > 0" class="aspect-[4/3] rounded-lg overflow-hidden bg-dark-700">
                  <img :src="real.images[0]" :alt="real.title" class="w-full h-full object-cover" />
                </div>
                <div v-else class="aspect-[4/3] rounded-lg bg-dark-700 flex items-center justify-center">
                  <svg class="w-10 h-10 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <!-- Info -->
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <h3 class="text-lg font-bold">{{ real.title }}</h3>
                    <div class="flex flex-wrap items-center gap-2 mt-2">
                      <span class="px-2.5 py-0.5 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium">
                        {{ real.category }}
                      </span>
                      <span class="text-dark-400 text-sm">{{ real.location }}</span>
                      <span class="text-dark-500 text-sm">{{ real.year }}</span>
                    </div>
                    <p class="text-dark-400 text-sm mt-2 line-clamp-2">{{ real.description }}</p>
                    <p class="text-dark-500 text-xs mt-2">{{ real.images.length }} photo(s)</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <button
                      @click="openEditModal(real)"
                      class="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
                      title="Modifier"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      @click="deleteRealisation(real)"
                      class="p-2 rounded-lg bg-dark-700 hover:bg-red-500/20 hover:text-red-400 transition-colors"
                      title="Supprimer"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal ajout/édition -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 overflow-y-auto">
          <div class="absolute inset-0 bg-dark-900/80" @click="showModal = false" />
          <div class="relative bg-dark-800 rounded-2xl w-full max-w-2xl border border-dark-700 shadow-2xl mb-20">
            <!-- Header -->
            <div class="flex items-center justify-between p-6 border-b border-dark-700">
              <h2 class="text-xl font-bold">{{ editingReal ? 'Modifier' : 'Ajouter' }} une réalisation</h2>
              <button @click="showModal = false" class="p-2 hover:bg-dark-700 rounded-lg transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Form -->
            <form @submit.prevent="saveRealisation" class="p-6 space-y-5">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-dark-300 mb-2">Titre *</label>
                  <input
                    v-model="form.title"
                    required
                    class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Villa à Saint-Denis"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-dark-300 mb-2">Catégorie *</label>
                  <select
                    v-model="form.category"
                    required
                    class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="" disabled>Choisir une catégorie</option>
                    <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-dark-300 mb-2">Lieu *</label>
                  <input
                    v-model="form.location"
                    required
                    class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Saint-Denis"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-dark-300 mb-2">Année</label>
                  <input
                    v-model="form.year"
                    class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="2025"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-dark-300 mb-2">Description</label>
                <textarea
                  v-model="form.description"
                  rows="3"
                  class="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                  placeholder="Décrivez le chantier..."
                />
              </div>

              <!-- Upload photos -->
              <div>
                <label class="block text-sm font-medium text-dark-300 mb-2">Photos</label>

                <!-- Photos existantes -->
                <div v-if="form.images.length > 0" class="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-4">
                  <div v-for="(img, i) in form.images" :key="i" class="relative group aspect-square rounded-lg overflow-hidden bg-dark-700">
                    <img :src="img" class="w-full h-full object-cover" />
                    <button
                      type="button"
                      @click="removeImage(i)"
                      class="absolute top-1 right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Zone de drop -->
                <div
                  class="border-2 border-dashed border-dark-600 rounded-xl p-8 text-center hover:border-primary-500/50 transition-colors cursor-pointer"
                  :class="{ 'border-primary-500 bg-primary-500/5': isDragging }"
                  @click="fileInput?.click()"
                  @dragover.prevent="isDragging = true"
                  @dragleave="isDragging = false"
                  @drop.prevent="handleDrop"
                >
                  <svg class="w-10 h-10 text-dark-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p class="text-dark-400 text-sm">
                    <span class="text-primary-400 font-medium">Cliquez</span> ou glissez vos photos ici
                  </p>
                  <p class="text-dark-500 text-xs mt-1">JPG, PNG — plusieurs fichiers acceptés</p>
                </div>
                <input
                  ref="fileInput"
                  type="file"
                  multiple
                  accept="image/*"
                  class="hidden"
                  @change="handleFileSelect"
                />

                <!-- Progress -->
                <div v-if="uploading" class="mt-3 flex items-center gap-3">
                  <div class="flex-1 bg-dark-700 rounded-full h-2 overflow-hidden">
                    <div class="bg-primary-500 h-full rounded-full transition-all duration-300" :style="{ width: uploadProgress + '%' }" />
                  </div>
                  <span class="text-dark-400 text-sm">{{ uploadProgress }}%</span>
                </div>
              </div>

              <!-- Submit -->
              <div class="flex items-center justify-end gap-3 pt-4 border-t border-dark-700">
                <button type="button" @click="showModal = false" class="px-6 py-2.5 text-dark-400 hover:text-white transition-colors">
                  Annuler
                </button>
                <button type="submit" :disabled="saving" class="btn-primary disabled:opacity-50">
                  {{ saving ? 'Enregistrement...' : (editingReal ? 'Modifier' : 'Ajouter') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

useHead({ title: 'Admin — AJP Construction' })

// Auth
const authenticated = ref(false)
const password = ref('')
const loginError = ref(false)
const loginLoading = ref(false)

async function login() {
  loginLoading.value = true
  loginError.value = false
  try {
    await $fetch('/api/auth/login', { method: 'POST', body: { password: password.value } })
    authenticated.value = true
    loadRealisations()
  } catch {
    loginError.value = true
  } finally {
    loginLoading.value = false
  }
}

async function logout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  authenticated.value = false
  password.value = ''
}

// Data
interface Realisation {
  id: string
  title: string
  category: string
  location: string
  description: string
  images: string[]
  year: string
}

const realisations = ref<Realisation[]>([])

const categories = [
  'Terrassement & VRD',
  'Gros œuvre',
  'Charpente & Couverture',
  'Second œuvre',
  'Rénovation',
  'Construction neuve',
]

const totalPhotos = computed(() => realisations.value.reduce((sum, r) => sum + r.images.length, 0))
const uniqueCategories = computed(() => new Set(realisations.value.map(r => r.category)).size)

async function loadRealisations() {
  realisations.value = await $fetch<Realisation[]>('/api/realisations')
}

// Modal
const showModal = ref(false)
const editingReal = ref<Realisation | null>(null)
const saving = ref(false)

const form = reactive({
  title: '',
  category: '',
  location: '',
  description: '',
  images: [] as string[],
  year: new Date().getFullYear().toString(),
})

function resetForm() {
  form.title = ''
  form.category = ''
  form.location = ''
  form.description = ''
  form.images = []
  form.year = new Date().getFullYear().toString()
}

function openAddModal() {
  editingReal.value = null
  resetForm()
  showModal.value = true
}

function openEditModal(real: Realisation) {
  editingReal.value = real
  form.title = real.title
  form.category = real.category
  form.location = real.location
  form.description = real.description
  form.images = [...real.images]
  form.year = real.year
  showModal.value = true
}

async function saveRealisation() {
  saving.value = true
  try {
    if (editingReal.value) {
      await $fetch(`/api/realisations/${editingReal.value.id}`, {
        method: 'PUT',
        body: { ...form },
      })
    } else {
      await $fetch('/api/realisations', {
        method: 'POST',
        body: { ...form },
      })
    }
    showModal.value = false
    await loadRealisations()
  } catch (e) {
    console.error('Erreur:', e)
  } finally {
    saving.value = false
  }
}

async function deleteRealisation(real: Realisation) {
  if (!confirm(`Supprimer "${real.title}" ?`)) return

  await $fetch(`/api/realisations/${real.id}`, { method: 'DELETE' })
  await loadRealisations()
}

// Upload
const fileInput = ref<HTMLInputElement | null>(null)
const uploading = ref(false)
const uploadProgress = ref(0)
const isDragging = ref(false)

function removeImage(index: number) {
  form.images.splice(index, 1)
}

async function uploadFiles(files: FileList | File[]) {
  if (!files.length) return

  uploading.value = true
  uploadProgress.value = 0

  const folder = form.title
    ? form.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')
    : 'upload-' + Date.now()

  const formData = new FormData()
  formData.append('folder', folder)

  for (const file of files) {
    formData.append('files', file)
  }

  // Simulate progress
  const progressInterval = setInterval(() => {
    if (uploadProgress.value < 90) uploadProgress.value += 10
  }, 200)

  try {
    const result = await $fetch<{ files: string[] }>('/api/upload', {
      method: 'POST',
      body: formData,
    })

    form.images.push(...result.files)
    uploadProgress.value = 100
  } catch (e) {
    console.error('Upload error:', e)
  } finally {
    clearInterval(progressInterval)
    setTimeout(() => {
      uploading.value = false
      uploadProgress.value = 0
    }, 500)
  }
}

function handleFileSelect(e: Event) {
  const input = e.target as HTMLInputElement
  if (input.files) uploadFiles(input.files)
  input.value = ''
}

function handleDrop(e: DragEvent) {
  isDragging.value = false
  if (e.dataTransfer?.files) uploadFiles(e.dataTransfer.files)
}
</script>
