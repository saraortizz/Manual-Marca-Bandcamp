<script setup>
import heroMotion from '@/assets/images/motion/hero-motion.jpg'
import videoPublicidad from '@/assets/images/motion/PVideoPubli.mp4'
import videoHero from '@/assets/images/motion/hero-componente.mp4'
import formaGiratoria2 from '@/assets/images/motion/forma-giratoria-2.gif'
import formaGiratoria3 from '@/assets/images/motion/forma-giratoria-3.gif'
import lineaDivisoria from '@/assets/images/Linea1.png'

function downloadFile(href, filename) {
  const link = document.createElement('a')
  link.href = href
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function downloadRotatingShapes() {
  downloadFile(formaGiratoria2, 'forma-giratoria-2.gif')
  downloadFile(formaGiratoria3, 'forma-giratoria-3.gif')
}
</script>

<template>
  <main class="page">
    <section class="hero">
      <Hero :image="heroMotion" alt="Motion" />
    </section>

    <div class="page-content">
      <p class="motion-intro">
        EL MOTION DESIGN DE BANDCAMP SE PRESENTA DE MANERA SENCILLA, DINÁMICA, CON UN LOOK CREADO A MANO QUE
        REFUERZA LOS VALORES DE MARCA.
      </p>

      <section class="motion-section">
        <h1>Publicidad</h1>
        <div class="text-copy">
          <p>
            La publicidad de la marca se centrará en una comunicación más honesta, directa y conectada con la
            comunidad. No buscamos interrumpir, sino aportar valor, contando historias reales de artistas.
          </p>
          <p>
            Nuestra estrategia publicitaria apuesta por piezas visuales y narrativas que reflejan la gráfica de
            la plataforma. El tono mantiene esa actitud cercana, desenfadada y ligeramente rebelde, priorizando
            la autenticidad frente a la perfección. Así, la publicidad no solo comunica, sino que también
            construye identidad y refuerza el vínculo entre artistas y audiencia.
          </p>
        </div>

        <video
          class="motion-video"
          :src="videoPublicidad"
          autoplay
          loop
          muted
          playsinline
        />
      </section>

      <img class="motion-divider" :src="lineaDivisoria" alt="">

      <section class="motion-section motion-section--forms">
        <div class="section-heading">
          <h2>Formas giratorias</h2>
          <DownloadButton
            href="#"
            label="Descargar"
            @click.prevent="downloadRotatingShapes"
          />
        </div>

        <div class="text-copy">
          <p>
            Las formas giratorias de carácter decorativo completan el sistema gráfico de insignias, aportando
            dinamismo y coherencia visual. Su movimiento, inspirado en el estilo “stop motion”, refuerza los
            valores de identidad de la marca.
          </p>
          <p>
            Este enfoque transmite una sensación artesanal y cercana, alineada con una marca libre, “handmade”
            y auténtica. El resultado es un lenguaje visual con personalidad propia, que se aleja de lo perfecto
            y digital para conectar de forma más humana y expresiva.
          </p>
        </div>

        <div class="rotating-shapes">
          <img :src="formaGiratoria2" alt="Forma giratoria decorativa 1">
          <img :src="formaGiratoria3" alt="Forma giratoria decorativa 2">
        </div>
      </section>

      <img class="motion-divider" :src="lineaDivisoria" alt="">

      <section class="hero-motion-section">
        <h2>Hero</h2>
        <div class="text-copy">
          <p>
            Las animaciones de los hero son transiciones dinámicas que revelan el ecosistema de Bandcamp,
            mostrando de forma fluida y visual cómo funciona la plataforma. A través de estos movimientos, se
            transmite un estilo cercano, simple y auténtico, alineado con la identidad de la marca.
          </p>
          <p>
            <strong>
              No se trata de animaciones recargadas, sino de una narrativa visual limpia que guía al usuario,
              refuerza la experiencia y refleja el espíritu accesible e independiente de Bandcamp.
            </strong>
          </p>
        </div>

        <video
          class="motion-video"
          :src="videoHero"
          autoplay
          loop
          muted
          playsinline
        />
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.page {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  font-family: var(--font-urbanist);
}

.page-content {
  box-sizing: border-box;
  width: min(100%, 83rem);
  margin: 0 auto;
  padding: 5.5rem 1.5rem 6rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3.5rem;
}

.motion-intro {
  max-width: 75rem;
  margin: 0;
  font-family: var(--font-ramona);
  font-size: 3rem;
  font-weight: 300;
  line-height: 3.3125rem;
}

.motion-section,
.hero-motion-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

h1,
h2 {
  margin: 0;
  font-family: var(--font-ramona);
  font-weight: 700;
  text-transform: uppercase;
}

h1 {
  font-size: 1.6875rem;
  line-height: 2rem;
}

h2 {
  font-size: 2rem;
  line-height: 2.3125rem;
}

.hero-motion-section h2 {
  font-size: 2.3125rem;
  line-height: 2.75rem;
}

.text-copy {
  max-width: 68rem;

  p {
    margin: 0 0 0.85rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
}

.motion-video {
  width: 100%;
  display: block;
  background-color: #000;
}

.motion-divider {
  display: block;
  width: 100%;
  height: 1.35rem;
  object-fit: fill;
}

.motion-section--forms {
  padding-bottom: 2rem;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.rotating-shapes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  align-items: center;
  padding-top: 1rem;

  img {
    width: 100%;
    max-width: 28rem;
    justify-self: center;
    display: block;
  }
}

strong {
  font-weight: 800;
}

@media (max-width: 58rem) {
  .page-content {
    width: min(100%, 42rem);
    padding-top: 3rem;
    padding-bottom: 4rem;
    gap: 3rem;
  }

  .motion-intro {
    font-size: 2.25rem;
    line-height: 2.625rem;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .rotating-shapes {
    grid-template-columns: 1fr;
  }
}
</style>
