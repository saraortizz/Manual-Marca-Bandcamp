<script setup>
import heroColores from '@/assets/images/colores/hero-colores.jpg'
import coloresBase from '@/assets/images/colores/colores-base.png'
import paletaPruebas from '@/assets/images/colores/paleta-pruebas.png'
import paletaSecundaria from '@/assets/images/colores/paleta-secundaria.png'
import pruebasDeColor from '@/assets/images/colores/pruebas-de-color.png'
import pruebasDeColor2 from '@/assets/images/colores/pruebas-de-color-2.png'
import variacionTotal from '@/assets/images/colores/variacion-total-de-color.png'
import lineaSeparadora from '@/assets/images/Linea1.svg'

</script>

<template>
  <main class="page">
    <section class="hero">
      <Hero :image="heroColores" alt="Colores" />
    </section>

    <div class="page-content">
      <section class="intro-section">
        <h1>
          USAMOS DOS PALETAS DISTINTAS, DE COLORES PRIMARIOS Y DE COLORES ACENTO
        </h1>
      </section>
    <section class="web">
      <h2>COLORES PRIMARIOS</h2>
      <p>Nuestra paleta principal se compone por nuestro amarillo, al cuál denominamos como Amarillo Retro. Tendrá leves variaciones para casos aislados como las acciones de los botones u otras excepciones.</p>
      <img class="color-image color-image--compact" :src="coloresBase" alt="Colores primarios">
    </section>


    <section class="web">
      <h2>COLORES ACENTO</h2>
      <p>Los colores de acento complementan a los primarios, dando más versatilidad al sistema. Aportan una diversidad de color que ayuda a representar los estilos y géneros de los artistas de Bandcamp. Es una paleta llamativa y colorida, plasmando nuestro tono simpático y cercano.</p>
      <img class="color-image color-image--compact" :src="paletaSecundaria" alt="Colores acento">
    </section>

      <img class="line-divider" :src="lineaSeparadora" alt="">

    <section class="web">
      <h2>DERIVADOS</h2>
      <p>Extension de los colores secundarios, únicamente se utilizan acompañando acciones en los que están presentes sus tonos principales, es decir, Amarillo Retro, Naranja Rock, Azul Blues o Verde Indie.</p>
      <img class="color-image" :src="variacionTotal" alt="Colores derivados">
    </section>

      <img class="line-divider" :src="lineaSeparadora" alt="">

    <section class="web">
      <h2>COMBINACIONES</h2>
      <p>Por norma general, en la gran mayoría de aplicaciones se presentará el fondo negro, amarillo o blanco con su opuesto cromático para los textos mientas que los  detalles y las decoraciones se presentaran en color. Hay excepciones, principalmente en publicidad para crear una apariencia mas atractiva.</p>
      <h4>USO PREDETERMINADO</h4>
      <img class="color-image" :src="pruebasDeColor" alt="Uso predeterminado de la paleta">
      <h4>AÑADIDO PARA PUBLICIDAD</h4>
      <img class="color-image" :src="pruebasDeColor2" alt="Uso de color para publicidad">
    </section>

      <img class="line-divider" :src="lineaSeparadora" alt="">

    <section class="web">
      <h2>USO DE LA PALETA</h2>
      <img class="color-image" :src="paletaPruebas" alt="Uso de la paleta de color">
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
  padding: 4rem 1.5rem 5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3.5rem;
}

.intro-section,
.web {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

h1 {
  max-width: 75rem;
  margin: 0;
  font-family: var(--font-ramona);
  font-size: 3rem;
  font-weight: 300;
  line-height: 3.3125rem;
  text-transform: uppercase;
}

h2,
h4 {
  margin: 0;
  font-family: var(--font-ramona);
  font-weight: 800;
  text-transform: uppercase;
}

h2 {
  font-size: 2rem;
  line-height: 2.3125rem;
}

h4 {
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
}

p {
  max-width: 68rem;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
}

.color-image {
  width: 100%;
  display: block;
}

.color-image--compact {
  max-width: 58rem;
}

.line-divider {
  display: block;
  width: 100%;
  height: 1.35rem;
  object-fit: fill;
}

@media (max-width: 58rem) {
  .page-content {
    width: min(100%, 42rem);
    padding-top: 3rem;
    padding-bottom: 4rem;
    gap: 3rem;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.625rem;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 2rem;
  }
}
</style>
