<template>
  <footer class="bg-dark-900 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="w-9 h-9 bg-primary-500 rounded-xl flex items-center justify-center font-bold text-white text-sm shrink-0">
            A
          </div>
          <span class="font-bold text-white">AJP Construction</span>
        </NuxtLink>

        <!-- Copyright -->
        <p class="text-dark-500 text-sm">
          &copy; {{ new Date().getFullYear() }} AJP Construction. Tous droits réservés.
        </p>

        <!-- Liens -->
        <NuxtLink to="/mentions-legales" class="text-dark-500 hover:text-dark-300 text-sm transition-colors">
          Mentions légales
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
