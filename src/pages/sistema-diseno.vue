<script setup>
import heroSistema from '@/assets/images/sistema-diseno/hero-sistema.jpg'
import lineaAmarilla from '@/assets/images/landing-page/linea-amarilla.png'

const figmaUrl = 'https://www.figma.com/design/bouzwykHSwWDYPVDvGhVZD/Sistema-de-dise%C3%B1o---Bandcamp_MacedoniaStudio?node-id=0-1&t=Ttw9TN6sr6Qpcclf-1'
</script>

<template>
  <main class="page">
    <section class="hero">
      <Hero :image="heroSistema" alt="Sistema de diseño" />
    </section>

    <section class="intro-section">
      <a
        class="design-title"
        :href="figmaUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        EL SISTEMA DE DISEÑO DE BANDCAMP
      </a>

      <p class="design-copy">
        Tiene como objetivo trasladar nuestra identidad al entorno web, reforzando valores clave como la
        comunidad y la capacidad de dejar huella.
      </p>

      <DownloadButton
        class="design-download"
        :href="figmaUrl"
        label="Descargar"
      />
    </section>

    <section class="videos-section">
      <div class="video-frame">
        <iframe
          src="https://www.youtube.com/embed/oPMXjRpkQ_g?si=1Tix_02mQC2x4N76"
          title="Sistema de diseño Bandcamp - vídeo escritorio"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <img class="yellow-divider" :src="lineaAmarilla" alt="">

      <div class="video-frame video-frame--mobile">
        <iframe
          src="https://www.youtube.com/embed/NbyD2X9dqB4?si=Bg-2-pKAEtkObkYc"
          title="Sistema de diseño Bandcamp - vídeo móvil"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.page {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
}

.intro-section {
  box-sizing: border-box;
  width: min(100%, 83rem);
  margin: 0 auto;
  padding: 3rem 1.5rem 2.75rem;
}

.design-title {
  display: inline-block;
  color: inherit;
  font-family: var(--font-ramona);
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.3125rem;
  text-decoration: none;
}

.design-title:hover,
.design-title:focus-visible {
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}

.design-copy {
  max-width: 82rem;
  margin: 2.75rem 0 0;
  font-family: var(--font-ramona);
  font-size: 3rem;
  font-weight: 300;
  line-height: 3.3125rem;
  text-transform: uppercase;
}

.design-download {
  margin-top: 2rem;
}

.videos-section {
  box-sizing: border-box;
  width: 100%;
  padding: 5rem 1.5rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  background-color: #000;
}

.video-frame {
  width: min(100%, 62rem);
  aspect-ratio: 16 / 9;
}

.video-frame iframe {
  width: 100%;
  height: 100%;
  display: block;
  border: 0;
}

.video-frame--mobile {
  width: min(100%, 24rem);
  aspect-ratio: 9 / 16;
}

.yellow-divider {
  width: min(100%, 83rem);
  height: 1.2rem;
  object-fit: fill;
  display: block;
}

@media (max-width: 58rem) {
  .intro-section {
    padding-top: 2.5rem;
  }

  .design-title,
  .design-copy {
    font-size: 2.25rem;
    line-height: 2.625rem;
  }

  .videos-section {
    padding-top: 3rem;
    padding-bottom: 4rem;
    gap: 3rem;
  }
}
</style>