<template>
  <div class="bg-dark-900 text-white min-h-screen">
    <!-- Hero -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-transparent" />
      <div class="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-6">
          Location de matériel
        </span>
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6">
          Nos <span class="text-primary-500">publications</span>
        </h1>
        <p class="text-xl text-dark-300 max-w-2xl mx-auto">
          Vidéos, tutoriels et actualités autour de notre matériel de location à La Réunion.
        </p>
      </div>
    </section>

    <!-- Publications -->
    <section class="py-12 md:py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="pending" class="text-center text-dark-400 py-20">
          Chargement...
        </div>

        <div v-else-if="!publications?.length" class="bg-dark-800 rounded-2xl p-12 border border-dark-700 text-center">
          <p class="text-dark-300 text-lg">Aucune publication pour le moment.</p>
          <p class="text-dark-500 text-sm mt-2">Revenez bientôt pour découvrir nos vidéos et tutoriels.</p>
        </div>

        <div v-else class="space-y-16">
          <article v-for="pub in publications" :key="pub.id">
            <div class="relative">
              <div class="absolute -inset-1 rounded-2xl gradient-border opacity-30 blur-sm" />
              <div class="relative bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden">
                <div v-if="pub.image" class="aspect-video bg-black">
                  <img :src="pub.image" :alt="pub.title" class="w-full h-full object-cover" />
                </div>
                <div v-if="pub.videoUrl" class="aspect-video bg-black">
                  <iframe
                    v-if="getVideoEmbedUrl(pub.videoUrl)"
                    :src="getVideoEmbedUrl(pub.videoUrl)!"
                    class="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center">
                    <a :href="pub.videoUrl" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 underline">
                      Voir la vidéo
                    </a>
                  </div>
                </div>
                <div class="p-6 md:p-8">
                  <h2 class="text-2xl font-bold mb-3">{{ pub.title }}</h2>
                  <p v-if="pub.description" class="text-dark-300 leading-relaxed">{{ pub.description }}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Facebook -->
    <section class="py-12 md:py-20 border-t border-white/5">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="relative">
          <div class="absolute -inset-1 rounded-2xl gradient-border opacity-30 blur-sm" />
          <div class="relative bg-dark-800 rounded-2xl p-10 md:p-14 border border-dark-700">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Suivez-nous sur Facebook</h2>
            <p class="text-dark-300 mb-8 max-w-xl mx-auto">
              Retrouvez toutes nos annonces de location et nos dernières vidéos sur notre page Facebook.
            </p>
            <a
              href="https://www.facebook.com/share/1Sdfbr7mtS/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold rounded-lg transition-colors text-sm"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z"/>
              </svg>
              Voir la page Facebook
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <div class="absolute -inset-1 rounded-2xl gradient-border opacity-30 blur-sm" />
          <div class="relative bg-dark-800 rounded-2xl p-12 md:p-16 text-center border border-dark-700">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Besoin de matériel pour un chantier ?</h2>
            <p class="text-dark-300 text-lg mb-10 max-w-xl mx-auto">
              Contactez-nous pour connaître les disponibilités et le tarif de location adapté à votre projet.
            </p>
            <NuxtLink to="/devis" class="btn-primary text-lg px-10 py-4 glow-red">
              Demander un devis gratuit
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Publications & tutoriels location de matériel — AJP Construction La Réunion',
  meta: [
    { name: 'description', content: 'Vidéos, tutoriels et actualités autour du matériel de location AJP Construction à La Réunion (974) : mini-pelle et autres engins de chantier.' },
    { property: 'og:url', content: 'https://www.ajp-construction.fr/publications' },
    { property: 'og:title', content: 'Publications & tutoriels location de matériel — AJP Construction' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ajp-construction.fr/publications' },
  ],
})

interface Publication {
  id: string
  title: string
  description: string
  videoUrl: string
  image: string
  createdAt: string
}

const { data: publications, pending } = await useFetch<Publication[]>('/api/publications')
</script>
