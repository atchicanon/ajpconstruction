<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="AJP" class="h-12 w-auto" />
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-dark-300 hover:text-white text-xs tracking-widest uppercase font-medium transition-colors"
            active-class="text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- CTA -->
        <div class="hidden md:block">
          <NuxtLink
            to="/devis"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold tracking-widest uppercase rounded transition-colors duration-150 whitespace-nowrap"
          >
            Devis gratuit
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
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
      <div v-if="mobileMenuOpen" class="md:hidden bg-dark-900 border-t border-white/10">
        <nav class="px-4 py-4 flex flex-col gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-dark-300 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
            active-class="text-white bg-white/5"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/devis"
            class="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold tracking-widest uppercase rounded transition-colors duration-150 w-full"
            @click="mobileMenuOpen = false"
          >
            Devis gratuit
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>

  <!-- Spacer -->
  <div class="h-20" />
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/#expertise', label: 'Expertise' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/devis', label: 'Contact' },
]
</script>
