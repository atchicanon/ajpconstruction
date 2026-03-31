<template>
  <div class="bg-dark-900 text-white min-h-screen">
    <!-- Hero -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-transparent" />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 animate-on-scroll">
          Nos <span class="text-primary-500">Réalisations</span>
        </h1>
        <p class="text-xl text-dark-300 max-w-2xl mx-auto animate-on-scroll delay-100">
          Découvrez nos chantiers réalisés à La Réunion. Chaque projet témoigne de notre savoir-faire.
        </p>
      </div>
    </section>

    <!-- Filters & Gallery -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filtres par catégorie -->
        <div class="flex flex-wrap gap-3 justify-center mb-12 animate-on-scroll">
          <button
            v-for="cat in allCategories"
            :key="cat"
            class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            :class="selectedCategory === cat
              ? 'bg-primary-500 text-white shadow-lg glow-red'
              : 'bg-dark-800 text-dark-400 border border-dark-700 hover:border-primary-500/30 hover:text-white'"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Grille des réalisations -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(real, i) in filteredRealisations"
            :key="real.id"
            class="group cursor-pointer animate-on-scroll"
            :class="'delay-' + ((i % 4) + 1) + '00'"
            @click="openProject(real)"
          >
            <div class="relative overflow-hidden rounded-2xl bg-dark-800 aspect-[4/3] border border-dark-700 group-hover:border-primary-500/30 transition-all duration-500">
              <!-- Photo ou placeholder -->
              <img
                v-if="real.images.length > 0"
                :src="real.images[0]"
                :alt="real.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div v-else class="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                <svg class="w-16 h-16 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span class="text-white font-semibold">Voir le projet</span>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2.5 py-0.5 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium">
                  {{ real.category }}
                </span>
                <span class="text-dark-500 text-xs">{{ real.year }}</span>
              </div>
              <h3 class="text-lg font-bold group-hover:text-primary-400 transition-colors">
                {{ real.title }}
              </h3>
              <p class="text-dark-400 text-sm mt-1 flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {{ real.location }}
              </p>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="filteredRealisations.length === 0" class="text-center py-20">
          <svg class="w-20 h-20 text-dark-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="text-dark-400 text-lg">Aucune réalisation dans cette catégorie pour le moment.</p>
        </div>
      </div>
    </section>

    <!-- Modal projet -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div class="absolute inset-0 bg-dark-900/80" @click="selectedProject = null" />
          <div class="relative bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-dark-700">
            <!-- Close button -->
            <button
              class="absolute top-4 right-4 z-10 w-10 h-10 bg-dark-700/90 rounded-full flex items-center justify-center hover:bg-dark-600 transition-colors"
              @click="selectedProject = null"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Images carousel -->
            <div v-if="selectedProject.images.length > 0" class="relative">
              <img
                :src="selectedProject.images[currentImageIndex]"
                :alt="selectedProject.title"
                class="w-full aspect-video object-cover rounded-t-2xl"
              />
              <!-- Nav arrows -->
              <template v-if="selectedProject.images.length > 1">
                <button
                  @click="currentImageIndex = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length"
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-900/60 rounded-full flex items-center justify-center hover:bg-dark-900/80 transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  @click="currentImageIndex = (currentImageIndex + 1) % selectedProject.images.length"
                  class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-900/60 rounded-full flex items-center justify-center hover:bg-dark-900/80 transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <!-- Dots -->
                <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  <button
                    v-for="(_, i) in selectedProject.images"
                    :key="i"
                    @click="currentImageIndex = i"
                    class="w-2 h-2 rounded-full transition-colors"
                    :class="i === currentImageIndex ? 'bg-white' : 'bg-white/40'"
                  />
                </div>
              </template>
            </div>
            <div v-else class="bg-gradient-to-br from-dark-700 to-dark-800 aspect-video rounded-t-2xl flex items-center justify-center">
              <svg class="w-20 h-20 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <!-- Content -->
            <div class="p-8">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium">
                  {{ selectedProject.category }}
                </span>
                <span class="text-dark-400 text-sm">{{ selectedProject.year }}</span>
                <span class="text-dark-400 text-sm flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {{ selectedProject.location }}
                </span>
              </div>
              <h2 class="text-2xl font-bold mb-4">{{ selectedProject.title }}</h2>
              <p class="text-dark-400 leading-relaxed">{{ selectedProject.description }}</p>

              <!-- Thumbnails grid -->
              <div v-if="selectedProject.images.length > 1" class="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-6">
                <button
                  v-for="(img, i) in selectedProject.images"
                  :key="i"
                  @click="currentImageIndex = i"
                  class="aspect-square rounded-lg overflow-hidden border-2 transition-colors"
                  :class="i === currentImageIndex ? 'border-primary-500' : 'border-transparent opacity-60 hover:opacity-100'"
                >
                  <img :src="img" class="w-full h-full object-cover" />
                </button>
              </div>

              <div class="mt-8">
                <NuxtLink to="/devis" class="btn-primary glow-red" @click="selectedProject = null">
                  Un projet similaire ? Demandez un devis
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nos Réalisations — AJP Construction',
  meta: [
    { name: 'description', content: 'Découvrez les réalisations d\'AJP Construction à La Réunion : chantiers de terrassement, gros œuvre, charpente et second œuvre.' },
  ],
})

useScrollAnimation()

interface Realisation {
  id: string
  title: string
  category: string
  location: string
  description: string
  images: string[]
  year: string
}

const { data: realisations } = await useFetch<Realisation[]>('/api/realisations')

const allCategories = computed(() => {
  const cats = new Set(realisations.value?.map(r => r.category) || [])
  return ['Tous', ...cats]
})

const selectedCategory = ref<string>('Tous')
const selectedProject = ref<Realisation | null>(null)
const currentImageIndex = ref(0)

const route = useRoute()

const filteredRealisations = computed(() => {
  if (!realisations.value) return []
  if (selectedCategory.value === 'Tous') return realisations.value
  return realisations.value.filter(r => r.category === selectedCategory.value)
})

onMounted(() => {
  if (route.query.category) {
    selectedCategory.value = String(route.query.category)
  }
})

function openProject(project: Realisation) {
  selectedProject.value = project
  currentImageIndex.value = 0
}
</script>
