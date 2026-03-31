<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-24">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/logo.png" alt="AJP Construction" class="h-20 w-auto" />
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-dark-600 hover:text-primary-500 font-medium transition-colors"
            active-class="text-primary-500"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/devis" class="btn-primary text-sm">
            Demander un devis
          </NuxtLink>
        </nav>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t shadow-lg">
        <nav class="px-4 py-4 flex flex-col gap-3">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-dark-600 hover:text-primary-500 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
            active-class="text-primary-500 bg-primary-50"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/devis" class="btn-primary text-center mt-2" @click="mobileMenuOpen = false">
            Demander un devis
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>

  <!-- Spacer -->
  <div class="h-24" />
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/a-propos', label: 'À propos' },
]
</script>
