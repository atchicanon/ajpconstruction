<template>
  <div>
    <section class="bg-dark-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold">Mentions légales</h1>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-dark">
        <h2>Éditeur du site</h2>
        <p>
          <strong>AJP Construction</strong><br />
          Entreprise de bâtiment tous corps d'état<br />
          Siège social : La Réunion (974)<br />
          SIRET : 953 638 202 00010<br />
          Téléphone : 06 92 42 24 92<br />
          Email : ajc.pedroa@outlook.fr
        </p>

        <h2>Hébergement</h2>
        <p>
          Ce site est hébergé par Vercel Inc.<br />
          440 N Barranca Ave #4133, Covina, CA 91723, USA
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, logo, éléments graphiques) est la propriété exclusive d'AJP Construction, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.
        </p>

        <h2>Protection des données personnelles</h2>
        <p>
          Les informations recueillies via le formulaire de contact sont destinées uniquement à AJP Construction et servent à traiter votre demande de devis. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à ajc.pedroa@outlook.fr.
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site n'utilise pas de cookies à des fins de suivi publicitaire. Seuls des cookies techniques nécessaires au fonctionnement du site peuvent être utilisés.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Mentions légales — AJP Construction',
  meta: [
    { name: 'robots', content: 'noindex, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ajp-construction.fr/mentions-legales' },
  ],
})
</script>
