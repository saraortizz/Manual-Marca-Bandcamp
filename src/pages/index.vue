<script setup>
definePageMeta({
  layout: false,
})

import LineaAmarilla from '@/assets/images/landing-page/linea-amarilla.png'
import VideoIntro from '@/assets/images/landing-page/video-intro.mp4'
import SistemaHover from '@/assets/images/landing-page/sistema-hover.png'
import Sistema from '@/assets/images/landing-page/sistema.png'
import ValorHover from '@/assets/images/landing-page/valor-hover.png'
import Valor from '@/assets/images/landing-page/valor.png'
import TratFotoHover from '@/assets/images/landing-page/tratamiento-fotografico-hover.png'
import TratFoto from '@/assets/images/landing-page/tratamiento-fotografico.png'
import MotionHover from '@/assets/images/landing-page/motion-hover.png'
import Motion from '@/assets/images/landing-page/motion.png'
import ElGraficosHover from '@/assets/images/landing-page/elementos-graficos-hover.png'
import ElGraficos from '@/assets/images/landing-page/elementos-graficos.png'
import ReticulasHover from '@/assets/images/landing-page/reticulas-hover.png'
import Reticulas from '@/assets/images/landing-page/reticulas.png'
import TipoHover from '@/assets/images/landing-page/tipo-hover.png'
import Tipo from '@/assets/images/landing-page/tipo.png'
import ColorHover from '@/assets/images/landing-page/color-hover.png'
import Color from '@/assets/images/landing-page/color.png'
import LogoHover from '@/assets/images/landing-page/logo-hover.png'
import Logo from '@/assets/images/landing-page/logo.png'

const cards = [
  {
    title: 'Valores y voz',
    to: '/valores',
    image: Valor,
    hoverImage: ValorHover,
    size: 'small',
  },
  {
    title: 'Logo',
    to: '/logo',
    image: Logo,
    hoverImage: LogoHover,
    size: 'wide',
  },
  {
    title: 'Colores',
    to: '/colores',
    image: Color,
    hoverImage: ColorHover,
    size: 'medium',
  },
  {
    title: 'Tipografías',
    to: '/tipografias',
    image: Tipo,
    hoverImage: TipoHover,
    size: 'small',
  },
  {
    title: 'Retículas',
    to: '/reticulas',
    image: Reticulas,
    hoverImage: ReticulasHover,
    size: 'supersmall',
  },
  {
    title: 'Tratamiento fotográfico',
    to: '/tratamiento-fotografico',
    image: TratFoto,
    hoverImage: TratFotoHover,
    size: 'small',
  },
  {
    title: 'Motion',
    to: '/motion',
    image: Motion,
    hoverImage: MotionHover,
    size: 'supersmall',
  },
  {
    title: 'Elementos gráficos',
    to: '/elementos-graficos',
    image: ElGraficos,
    hoverImage: ElGraficosHover,
    size: 'medium',
  },
  {
    title: 'Sistema de diseño',
    to: '/sistema-diseno',
    image: Sistema,
    hoverImage: SistemaHover,
    size: 'full',
  },
]
</script>

<template>
  <main class="home-page">
    <div class="home-content">
      <section class="home-header">
        <h2>MANUAL DE MARCA</h2>
        <img class="home-linea" :src="LineaAmarilla" alt="">
      </section>

      <section class="home-video">
        <video
          class="home-video__media"
          :src="VideoIntro"
          autoplay
          muted
          loop
          playsinline
        ></video>
      </section>

      <section class="home-grid" aria-label="Secciones del manual">
        <HomeCard
          v-for="card in cards"
          :key="card.title"
          v-bind="card"
        />
      </section>
    </div>

    <footer class="home-footer">© 2026 • Manual de Bandcamp</footer>
  </main>
</template>

<style lang="scss" scoped>
.home-page {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-black);
}

.home-content {
  box-sizing: border-box;
  width: min(100%, 83rem);
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3rem;
}

.home-header {
  padding-top: 2rem;
  color: var(--color-amarillo-retro);
  font-family: var(--font-ramona);
}

.home-video {
  overflow: hidden;
  height: 33rem;
  width: 100%;
}

.home-video__media {
  transform: translateY(-14rem);
  display: block;
  width: 100%;
  height: auto;
}

.home-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-flow: dense;
  gap: 3rem;
}

.home-footer {
  box-sizing: border-box;
  width: min(100%, 83rem);
  margin: 0 auto;
  padding: 0 1.5rem 2rem;
  color: var(--color-amarillo-retro);
  font-family: var(--font-urbanist);
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
}

@media (max-width: 60rem) {
  .home-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    :deep(.home-card) {
      grid-column: span 2;
    }
  }
}
</style>
