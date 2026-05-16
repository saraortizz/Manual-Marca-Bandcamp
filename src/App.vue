<script setup>
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import DownloadButton from '@/components/DownloadButton.vue'

    import LineaAmarilla from '@/assets/Images/Landing page/LineaAmarilla.png'
    import VideoIntro from '@/assets/Images/Landing page/VideoIntro.mp4'
    import SistemaHover from '@/assets/Images/Landing page/SistemaHover.png'
    import Sistema from '@/assets/Images/Landing page/Sistema.png'
    import ValorHover from '@/assets/Images/Landing page/ValorHover.png'
    import Valor from '@/assets/Images/Landing page/Valor.png'
    import TratFotoHover from '@/assets/Images/Landing page/TratFotoHover.png'
    import TratFoto from '@/assets/Images/Landing page/TratFoto.png'
    import MotionHover from '@/assets/Images/Landing page/MotionHover.png'
    import Motion from '@/assets/Images/Landing page/Motion.png'
    import ElGraficosHover from '@/assets/Images/Landing page/ElGraficosHover.png'
    import ElGraficos from '@/assets/Images/Landing page/ElGraficos.png'
    import ReticulasHover from '@/assets/Images/Landing page/ReticulasHover.png'
    import Reticulas from '@/assets/Images/Landing page/Reticulas.png'
    import TipoHover from '@/assets/Images/Landing page/TipoHover.png'
    import Tipo from '@/assets/Images/Landing page/Tipo.png'
    import ColorHover from '@/assets/Images/Landing page/ColorHover.png'
    import Color from '@/assets/Images/Landing page/Color.png'
    import LogoHover from '@/assets/Images/Landing page/LOGOHOVER.png'
    import Logo from '@/assets/Images/Landing page/LOGO.png'
import HomeCard from '@/components/HomeCard.vue'
import cardImage from '@/assets/svg/logo-bandcamp.svg'
import cardHoverImage from '@/assets/svg/forma-giratoria2.svg'
import ValoresPage from '@/valores.vue'
import LogoPage from '@/logo.vue'
import ColoresPage from '@/colores.vue'
import TipografiasPage from '@/tipografias.vue'
import ReticulasPage from '@/reticulas.vue'
import TratFotograficoPage from '@/tratFotografico.vue'
import MotionPage from '@/motion.vue'
import ElGraficosPage from '@/elGraficos.vue'
import SistDisenoPage from '@/sistDiseno.vue'

const pages = {
  '/valores': ValoresPage,
  '/logo': LogoPage,
  '/colores': ColoresPage,
  '/tipografias': TipografiasPage,
  '/reticulas': ReticulasPage,
  '/tratFotografico': TratFotograficoPage,
  '/motion': MotionPage,
  '/elGraficos': ElGraficosPage,
  '/sistDiseño': SistDisenoPage,
}

const currentPath = ref(window.location.pathname)
const CurrentPage = computed(() => pages[currentPath.value])

function navigate(to) {
  window.history.pushState({}, '', to)
  currentPath.value = to
}

function openCard(to, event) {
  if (!pages[to]) return

  event.preventDefault()
  navigate(to)
}

window.addEventListener('popstate', () => {
  currentPath.value = window.location.pathname
})

const cards = [
  {
    title: 'Valores y voz',
    to: '/valores',
    image: Valor,
    hoverImage: ValorHover,
    size: 'small'
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
    to: '/tratFotografico',
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
    to: '/elGraficos',
    image: ElGraficos,
    hoverImage: ElGraficosHover,
    size: 'medium',
  },
  {
    title: 'Sistema de diseño',
    to: '/sistDiseño',
    image: Sistema,
    hoverImage: SistemaHover,
    size: 'full',
  }
]
</script>

<template>
 <component
    :is="CurrentPage"
    v-if="CurrentPage"
  />

  <main v-else class="home-page">
  
    <Header/>

    <div class="home-content">
      <section class="home-header">
        <h2>MANUAL DE MARCA</h2>
        <img class="home-linea" :src="LineaAmarilla">
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
      <DownloadButton/>

      <section class="home-grid" aria-label="Secciones del manual">
        <HomeCard
          v-for="card in cards"
          :key="card.title"
          v-bind="card"
        />
      </section>
    </div>

    <footer class="home-footer">© 2026 • Manual de Bandcamp</footer>
    <Footer/>
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
  padding-top: 0rem;
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
  width: min(100%, 72rem);
  margin: 0 auto;
  padding: 0 1.5rem 2rem;
  color: var(--color-amarillo-retro);
  font-family: var(--font-urbanist);
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.2;
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
