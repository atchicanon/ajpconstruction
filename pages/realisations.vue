<template>
  <div>
    <!-- Hero -->
    <section class="bg-dark-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Nos Réalisations</h1>
        <p class="text-xl text-dark-300 max-w-2xl mx-auto">
          Découvrez nos chantiers réalisés à La Réunion. Chaque projet témoigne de notre savoir-faire.
        </p>
      </div>
    </section>

    <!-- Filters & Gallery -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filtres par catégorie -->
        <div class="flex flex-wrap gap-3 justify-center mb-12">
          <button
            v-for="cat in categories"
            :key="cat"
            class="px-5 py-2 rounded-full text-sm font-medium transition-colors"
            :class="selectedCategory === cat
              ? 'bg-primary-500 text-white shadow-lg'
              : 'bg-gray-100 text-dark-600 hover:bg-gray-200'"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Grille des réalisations -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="real in filteredRealisations"
            :key="real.id"
            class="group cursor-pointer"
            @click="openProject(real)"
          >
            <div class="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <svg class="w-16 h-16 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/60 transition-colors duration-300 flex items-center justify-center">
                <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Voir le projet
                </span>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2.5 py-0.5 bg-primary-50 text-primary-600 rounded-full text-xs font-medium">
                  {{ real.category }}
                </span>
                <span class="text-dark-300 text-xs">{{ real.year }}</span>
              </div>
              <h3 class="text-lg font-bold text-dark-900 group-hover:text-primary-500 transition-colors">
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
        <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="selectedProject = null">
          <div class="absolute inset-0 bg-dark-900/80" @click="selectedProject = null" />
          <div class="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <!-- Close button -->
            <button
              class="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              @click="selectedProject = null"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Image placeholder -->
            <div class="bg-gradient-to-br from-primary-100 to-primary-200 aspect-video rounded-t-2xl flex items-center justify-center">
              <svg class="w-20 h-20 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <!-- Content -->
            <div class="p-8">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                  {{ selectedProject.category }}
                </span>
                <span class="text-dark-300 text-sm">{{ selectedProject.year }}</span>
                <span class="text-dark-300 text-sm flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {{ selectedProject.location }}
                </span>
              </div>
              <h2 class="text-2xl font-bold text-dark-900 mb-4">{{ selectedProject.title }}</h2>
              <p class="text-dark-400 leading-relaxed">{{ selectedProject.description }}</p>

              <div class="mt-8">
                <NuxtLink to="/devis" class="btn-primary" @click="selectedProject = null">
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
import { categories, realisations, type Realisation } from '~/data/realisations'

useHead({
  title: 'Nos Réalisations — AJP Construction',
  meta: [
    { name: 'description', content: 'Découvrez les réalisations d\'AJP Construction à La Réunion : chantiers de terrassement, gros œuvre, charpente et second œuvre.' },
  ],
})

const selectedCategory = ref<string>('Tous')
const selectedProject = ref<Realisation | null>(null)

const filteredRealisations = computed(() => {
  if (selectedCategory.value === 'Tous') return realisations
  return realisations.filter(r => r.category === selectedCategory.value)
})

function openProject(project: Realisation) {
  selectedProject.value = project
}
</script>
