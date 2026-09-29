<template>
  <div
    v-if="visible"
    role="dialog"
    aria-label="Consentement aux cookies"
    class="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[90] bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-200 p-5"
  >
    <p class="text-sm leading-relaxed">
      Nous utilisons des cookies pour mesurer l'audience du site. Vous pouvez les accepter ou les refuser.
      <NuxtLink to="/mentions-legales" class="underline text-primary-500">En savoir plus</NuxtLink>
    </p>
    <div class="mt-4 flex gap-3">
      <button
        type="button"
        class="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold hover:bg-gray-50"
        @click="choose('denied')"
      >
        Refuser
      </button>
      <button
        type="button"
        class="flex-1 px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600"
        @click="choose('granted')"
      >
        Accepter
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const KEY = 'cookie-consent'
const visible = ref(false)

function update(value: 'granted' | 'denied') {
  const gtag = (window as any).gtag
  gtag?.('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  })
}

function choose(value: 'granted' | 'denied') {
  try { localStorage.setItem(KEY, value) } catch {}
  update(value)
  visible.value = false
}

function open() {
  visible.value = true
}

onMounted(() => {
  let stored: string | null = null
  try { stored = localStorage.getItem(KEY) } catch {}
  if (!stored) visible.value = true
  window.addEventListener('open-cookie-banner', open)
})

onBeforeUnmount(() => window.removeEventListener('open-cookie-banner', open))
</script>
