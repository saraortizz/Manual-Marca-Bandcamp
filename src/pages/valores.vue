<script setup>
import { ref } from 'vue'
import heroValores from '@/assets/images/valores-y-voz/hero-valores-y-voz.png'
import huellasPapel from '@/assets/images/valores-y-voz/huellas-papel.gif'
import lineaNegra2 from '@/assets/images/valores-y-voz/linea-negra2.png'
import lineaNegra3 from '@/assets/images/valores-y-voz/linea-negra3.png'
import formaGiratoria from '@/assets/images/valores-y-voz/forma-giratoria-2.gif'

const activeSection = ref(null)

const values = [
  { label: 'Descubrimiento', color: 'azul' },
  { label: 'Underground', color: 'naranja' },
  { label: 'Cercano', color: 'verde' },
  { label: 'Libre', color: 'azul' },
  { label: 'Auténtico', color: 'naranja' },
]

function toggleSection(section) {
  activeSection.value = activeSection.value === section ? null : section
}
</script>

<template>
  <main class="page">
    <section class="hero">
      <Hero :image="heroValores" alt="Valores y voz" />
    </section>

    <div class="page-content">
      <section class="values-intro">
        <div class="values-intro__copy">
          <h1>¡Deja tu huella con Bandcamp!</h1>
          <p>
            Somos una plataforma de streaming musical centrada en los artistas y en apoyar su desarrollo.
            Nuestro objetivo es mejorar sus condiciones laborales frente al modelo de streaming tradicional,
            que en muchos casos resulta abusivo y se ha normalizado en otras plataformas del sector.
          </p>
          <p>
            Trabajamos para ofrecer un entorno más justo, donde los creadores puedan obtener una compensación
            más equitativa por su trabajo, así como mayor control sobre su música. Apostamos por un sistema que
            prioriza la transparencia, la libertad creativa y el crecimiento sostenible de los artistas.
          </p>
          <p>
            Además, nos abrimos a nuevas propuestas y talentos, brindando oportunidades reales de visibilidad y
            desarrollo profesional. Queremos construir una comunidad en la que los artistas no solo publiquen su
            música, sino que también puedan evolucionar, conectar con su audiencia y desarrollar su carrera con
            mayor independencia.
          </p>
        </div>

        <img
          class="values-intro__stamp"
          :src="huellasPapel"
          alt="Ilustración de huella sobre papel"
        >
      </section>

      <img class="values-divider" :src="lineaNegra2" alt="">

      <section class="tone-section">
        <img
          class="tone-section__shape"
          :src="formaGiratoria"
          alt="Forma giratoria decorativa"
        >

        <div class="tone-section__copy">
          <h2>¿Cuál es nuestro tono?</h2>
          <p>
            El tono de Bandcamp será desenfadado, cercano y con un tono rebelde. Apostamos por una comunicación
            natural y auténtica, que conecte directamente con los artistas y su comunidad, sin artificios ni
            formalidades innecesarias. Queremos transmitir una actitud fresca y libre, alineada con el espíritu
            independiente de la música que defendemos. Nuestro lenguaje será accesible y humano, pero también
            firme en nuestros valores, mostrando una personalidad que cuestiona lo establecido y apoya nuevas
            formas de crear y compartir música.
          </p>
        </div>
      </section>

      <section class="accordion-section" aria-label="Información de valores y voz">
        <Transition name="accordion-fade" mode="out-in">
          <div
            v-if="activeSection"
            :key="activeSection"
            class="accordion-content"
            aria-live="polite"
          >
            <p v-if="activeSection === 'mission'">
              Bandcamp se plantea como un campamento musical: una comunidad unida donde cada usuario tiene su
              huella o símbolo propio. Esa huella se refuerza con un sistema de insignias por logros
              (descubrir, comprar, escuchar), visibles en el perfil y comparables. La gráfica es handmade, con
              texturas e insignias manuales, para convertir Bandcamp en un espacio social cálido y auténtico,
              no solo una tienda de música.
            </p>

            <div v-else-if="activeSection === 'values'" class="values-list">
              <span
                v-for="value in values"
                :key="value.label"
                class="values-list__item"
                :class="`values-list__item--${value.color}`"
              >
                {{ value.label }}
              </span>
            </div>

            <div v-else-if="activeSection === 'opinions'" class="opinions-copy">
              <p>
                “Bandcamp nos permitió construir una relación real con nuestros fans desde el principio. No era
                solo subir música, era recibir mensajes, ver quién compraba el disco y sentir que había una
                comunidad detrás.”
              </p>
              <p>
                “Lo que marca la diferencia es que aquí los fans quieren apoyarte activamente. No estás
                compitiendo por streams, estás construyendo algo más cercano y sostenible.”
              </p>
            </div>
          </div>
        </Transition>

        <button
          class="accordion-title"
          type="button"
          :aria-expanded="activeSection === 'mission'"
          @click="toggleSection('mission')"
        >
          Nuestra misión
        </button>

        <img class="accordion-divider" :src="lineaNegra2" alt="">

        <button
          class="accordion-title"
          type="button"
          :aria-expanded="activeSection === 'values'"
          @click="toggleSection('values')"
        >
          ¿Qué valores nos representan?
        </button>

        <img class="accordion-divider" :src="lineaNegra3" alt="">

        <button
          class="accordion-title"
          type="button"
          :aria-expanded="activeSection === 'opinions'"
          @click="toggleSection('opinions')"
        >
          Opiniones de los usuarios
        </button>
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
  gap: 4rem;
}

.values-intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 28rem);
  gap: 5rem;
  align-items: center;
}

.values-intro__copy,
.tone-section__copy {
  h1,
  h2 {
    margin: 0 0 1.35rem;
    font-family: var(--font-ramona);
    font-size: 2rem;
    line-height: 2.3125rem;
    text-transform: uppercase;
  }

  p {
    margin: 0 0 0.85rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
}

.values-intro__stamp {
  width: 100%;
  max-width: 28rem;
  justify-self: center;
  display: block;
}

.values-divider {
  display: block;
  width: 100%;
  height: 1.35rem;
  margin: 0 auto;
  object-fit: fill;
}

.tone-section {
  display: grid;
  grid-template-columns: minmax(16rem, 30rem) minmax(0, 1fr);
  gap: 5rem;
  align-items: center;
}

.tone-section__shape {
  width: min(100%, 28rem);
  display: block;
}

.tone-section__copy {
  text-align: right;
}

.accordion-section {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding-top: 1rem;
  padding-bottom: 10rem;
}

.accordion-content {
  min-height: 0;

  p {
    max-width: 77rem;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2.0625rem;
  }
}

.accordion-fade-enter-active,
.accordion-fade-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.accordion-fade-enter-from,
.accordion-fade-leave-to {
  opacity: 0;
  transform: translateY(0.45rem);
}

.accordion-fade-enter-to,
.accordion-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.opinions-copy {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.values-list {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  padding: 0 1rem;
}

.values-list__item {
  font-size: 1.75rem;
  line-height: 2.25rem;
  font-weight: 800;
}

.values-list__item--azul {
  color: var(--color-azul-blues);
}

.values-list__item--naranja {
  color: var(--color-naranja-rock);
}

.values-list__item--verde {
  color: var(--color-verde-indie);
}

.accordion-title {
  width: fit-content;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font-family: var(--font-ramona);
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.3125rem;
  text-align: left;
  text-transform: uppercase;
  cursor: pointer;
}

.accordion-title:focus-visible {
  outline: 0.2rem solid var(--color-azul-blues);
  outline-offset: 0.35rem;
}

.accordion-divider {
  display: block;
  width: 100%;
  height: 0.95rem;
  object-fit: fill;
}

@media (max-width: 58rem) {
  .page-content {
    width: min(100%, 42rem);
    padding-top: 3rem;
    padding-bottom: 4rem;
    gap: 3rem;
  }

  .values-intro,
  .tone-section {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .values-intro__stamp,
  .tone-section__shape {
    max-width: 18rem;
  }

  .tone-section__copy {
    text-align: left;
  }

  .accordion-content p {
    font-size: 1.125rem;
    line-height: 1.625rem;
  }

  .values-list {
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0;
  }

  .values-list__item {
    font-size: 1.35rem;
    line-height: 1.75rem;
  }

  .accordion-title {
    font-size: 2rem;
    line-height: 2.3125rem;
  }
}
</style>
