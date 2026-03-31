<template>
  <footer class="bg-dark-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Logo & description -->
        <div>
          <img src="/logo.png" alt="AJP Construction" class="h-16 w-auto mb-4 brightness-0 invert" />
          <p class="text-dark-300 text-sm leading-relaxed">
            Entreprise tous corps d'état à La Réunion. Terrassement, VRD, gros œuvre, charpente, couverture et second œuvre.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <ul class="space-y-3 text-sm text-dark-300">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>La Réunion (974)</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+262692XXXXXX" class="hover:text-primary-400 transition-colors">06 92 XX XX XX</a>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@ajpconstruction.re" class="hover:text-primary-400 transition-colors">contact@ajpconstruction.re</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-dark-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-dark-400 text-sm">
          &copy; {{ new Date().getFullYear() }} AJP Construction. Tous droits réservés.
        </p>
        <NuxtLink to="/mentions-legales" class="text-dark-400 hover:text-primary-400 text-sm transition-colors">
          Mentions légales
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Nos services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/devis', label: 'Demander un devis' },
  { to: '/mentions-legales', label: 'Mentions légales' },
]
</script>
