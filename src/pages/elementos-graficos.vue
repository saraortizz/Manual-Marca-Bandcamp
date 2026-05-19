<script setup>
import heroElementosGraficos from '@/assets/images/elementos-graficos/hero-elementos-graficos.png'
import huellasExplicacion from '@/assets/images/elementos-graficos/huellas-explicacion.png'
import huellas from '@/assets/images/elementos-graficos/huellas.png'
import mockupBillboard from '@/assets/images/elementos-graficos/mockup-bandcamp-billboard-1.png'
import lineaSeparadora from '@/assets/images/Linea1.svg'
import insigniasBandcamp from '@/assets/images/elementos-graficos/insignias-bandcamp.gif'
import insigniasArtista from '@/assets/images/elementos-graficos/insignias-artista.gif'
import elementosGraficosImg from '@/assets/images/elementos-graficos/elementos-graficos.png'
import usosElementosImg from '@/assets/images/elementos-graficos/usos-de-elementos-graficos.png'
</script>

<template>
  <main class="page">
    <section class="hero">
      <Hero :image="heroElementosGraficos" alt="Elementos gráficos" />
    </section>

    <div class="page-content">
      <section class="intro-section">
        <h1>
          ¿CONOCES NUESTRAS HUELLAS? NOSOTRAS LAS VEMOS COMO UNA FORMA DE EXPRESIÓN, NATURAL Y SIN FILTROS.
        </h1>

        <img
          class="huellas-explicacion"
          :src="huellasExplicacion"
          alt="Explicación visual de las huellas"
        >
      </section>

      <section class="predefined-section">
        <div class="predefined-copy-row">
          <div class="predefined-copy">
            <h2>Existen unas huellas predefinidas por nosotros!</h2>
            <p>
              Las usamos en caso de que el usuario no quisiera crear una propia o no tenga tiempo en ese momento
              de crearla. Procuramos que haya diversidad y puedan adecuarse a gran variedad de géneros y artistas.
            </p>
          </div>

          <DownloadButton
            :href="huellas"
            download="huellas.png"
            label="Descargar"
          />
        </div>

        <img
          class="huellas-image"
          :src="huellas"
          alt="Huellas predefinidas"
        >
      </section>

      <section class="billboard-section">
        <img
          class="billboard-image"
          :src="mockupBillboard"
          alt="Mockup publicitario con huellas de Bandcamp"
        >

        <div class="billboard-copy">
          <p class="billboard-copy__main">
            Además de en la web, usamos la huella para publicidad de los artistas. Como elemento decorativo o
            integrado en el propio logotipo.
          </p>
          <p class="billboard-copy__note">
            (Puedes verlo animado en el apartado de Animación)
          </p>
        </div>
      </section>

      <img class="line-divider" :src="lineaSeparadora" alt="">

      <section class="insignias-section">
        <h2 class="insignias-heading">PERO NUESTRA PERSONALIZACIÓN NO SE QUEDA AHÍ... TAMBIÉN TENEMOS INSIGNIAS PARA VOSOTROS!</h2>

        <p class="insignias-intro">
          Son un método de recompensas que te motiva a seguir usando Bandcamp. Su propósito es ese, incentivar al consumidor. El sistema es infinitamente ampliable y los artistas también pueden crear sus propias insignias para sus oyentes/compradores/comunidad.
        </p>

        <p class="insignias-examples">Vamos a ver algunos ejemplos</p>

        <img class="insignias-bandcamp" :src="insigniasBandcamp" alt="Insignias Bandcamp">

        <h3 class="insignias-artist-title">EL ARTISTA TAMBIÉN TIENE SU PROPIA INSIGNIA</h3>

        <p class="insignias-artist-desc">
          Su funcionamiento es el mismo que las insignias de Bandcamp, la diferencia es que aparecerá el icono de la huella del artista en color negro. Estará enmarcado por una estrella, el número de puntas dependerá del logro obtenido, diferenciándose del círculo de las insignias del sistema habitual, el color lo eliges tú.
        </p>

        <img class="insignias-artist" :src="insigniasArtista" alt="Insignias artista">

        <img class="line-divider" :src="lineaSeparadora" alt="">
      </section>

      <section class="otros-section">
        <h2 class="otros-title">OTROS ELEMENTOS DEL SISTEMA</h2>

        <p class="otros-p">
          Como elementos decorativos del propio sistema, utilizamos una serie de 8 formas vectorizadas. Estas complementan la identidad de Bandcamp, teniendo coherencia con el resto de elementos. Se utilizan tanto en aplicaciones publicitarias como en Web y App.
        </p>

        <p class="otros-bold">Pueden ir en cualquier tamaño, color o grado de rotación, adaptándose a lo que sea necesario</p>

        <img class="otros-image" :src="elementosGraficosImg" alt="Elementos gráficos">

        <div class="otros-download-row">
          <DownloadButton
            :href="elementosGraficosImg"
            download="elementos-graficos.png"
            label="Descargar"
          />
        </div>

        <img class="line-divider" :src="lineaSeparadora" alt="">

        <h2 class="usos-title">USO DE LOS ELEMENTOS GRÁFICOS</h2>

        <img class="usos-image" :src="usosElementosImg" alt="Usos de los elementos gráficos">
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
  flex-direction: column;
  gap: 3.5rem;
}

.intro-section {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

h1 {
  max-width: 60rem;
  margin: 0;
  font-family: var(--font-ramona);
  font-size: 3rem;
  font-weight: 300;
  line-height: 3.3125rem;
  text-transform: uppercase;
}

.huellas-explicacion {
  width: calc(100% + 5rem);
  max-width: none;
  margin-left: -3rem;
  display: block;
}

.predefined-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.predefined-copy-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
}

.predefined-copy {
  max-width: 40rem;

  h2 {
    margin: 0 0 0.75rem;
    font-family: var(--font-urbanist);
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.6875rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

.huellas-image {
  width: 100%;
  display: block;
  border-radius: 0.75rem;
}

.billboard-section {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(12rem, 0.7fr);
  gap: 2rem;
  align-items: start;
}

.billboard-image {
  width: 100%;
  display: block;
  border-radius: 0.75rem;
}

.billboard-copy {
  max-width: 14rem;
  padding-top: 0.5rem;
}

.billboard-copy__main {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.5rem;
}

.billboard-copy__note {
  margin: 1.25rem 0 0;
  font-size: 1rem;
  line-height: 1.5rem;
}

.insignias-section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.insignias-heading {
  margin: 0;
  font-family: var(--font-ramona);
  font-size: 3rem; /* 48px */
  font-weight: 300; /* Ramona Light */
  line-height: 3.3125rem; /* 53px */
  text-transform: uppercase;
  /* make heading wider than page content to span more of the viewport */
  /* expand only to the right while keeping left edge aligned */
  width: calc(100% + 5rem);
  max-width: none;
  margin-left: 0;
}

.insignias-intro {
  margin: 0;
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  max-width: 60rem;
}

.insignias-examples {
  margin: 0.25rem 0 0;
  font-size: 1.25rem; /* 20px */
  line-height: 1.5rem; /* 24px */
  font-weight: 800;
}

.insignias-bandcamp {
  width: 100%;
  display: block;
  border-radius: 0.75rem;
}

.insignias-artist-title {
  margin: 2rem 0 0.5rem;
  font-family: var(--font-ramona);
  font-size: 2rem; /* 32px */
  font-weight: 800; /* Ramona Bold */
  line-height: 2.3125rem; /* 37px */
  text-transform: uppercase;
}

.insignias-artist-desc {
  margin: 0;
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  max-width: 60rem;
}

.insignias-artist {
  width: 100%;
  display: block;
  border-radius: 0.75rem;
}

.otros-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.otros-title {
  margin: 0;
  font-family: var(--font-ramona);
  font-size: 2rem; /* 32px */
  font-weight: 800;
  line-height: 2.3125rem; /* 37px */
  text-transform: uppercase;
}

.otros-p {
  margin: 0;
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  max-width: 60rem;
}

.otros-bold {
  margin: 0.5rem 0 0;
  font-size: 1.25rem; /* 20px */
  line-height: 1.5rem; /* 24px */
  font-weight: 800;
}

.otros-image {
  width: 100%;
  display: block;
  border-radius: 0.75rem;
}

.otros-download-row {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.75rem;
}

.usos-title {
  margin: 2rem 0 0;
  font-family: var(--font-ramona);
  font-size: 2rem; /* 32px */
  font-weight: 800;
  line-height: 2.3125rem; /* 37px */
  text-transform: uppercase;
}

.usos-image {
  width: 100%;
  display: block;
  border-radius: 0.75rem;
}

.usos-image {
  width: 100%;
  display: block;
  border-radius: 0.75rem;
  margin-bottom: 3rem;
}

.line-divider {
  width: 100%;
  height: 1.35rem;
  display: block;
  object-fit: fill;
  margin: 1.5rem 0 3rem;
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

  .huellas-explicacion {
    width: 100%;
    margin-left: 0;
  }

  .predefined-copy-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .billboard-section {
    grid-template-columns: 1fr;
  }

  .billboard-copy {
    max-width: 100%;
  }
}
</style>