<script setup>
import reticula2hover from '@/assets/images/reticulas/anuncio-con-reticula-2.png'
import reticula1hover from '@/assets/images/reticulas/anuncio-con-reticula-1.png'
import reticula2 from '@/assets/images/reticulas/anuncio-reticula-2.jpg'
import reticula1 from '@/assets/images/reticulas/anuncio-reticula-1.jpg'
import separacion from '@/assets/images/Linea1.svg'
import imagenReticulasWeb from '@/assets/images/reticulas/reticulas-web.png'
import heroReticulas from '@/assets/images/reticulas/hero-reticulas.jpg'
</script>

<template>
  <main class="page">
    <section class="hero">
      <Hero :image="heroReticulas" alt="Retículas" />
    </section>
    <div class="page-content">
    <section class="subtitulo">
      <h1>NUESTRAS RETÍCULAS DEFINEN LA ORGANIZACIÓN TANTO WEB, EN LOS DISPOSITIVOS ESTABLECIDOS, COMO EN PUBLICIDAD. FACILITAN LA ORGANIZACIÓN Y LA ARMONÍA VISUAL</h1>
    </section>
    <section class="web">
      <h2>RETÍCULAS WEB</h2>
      <DownloadButton
        :href="imagenReticulasWeb"
        download="reticulas-web.png"
        label="Descargar"
      />
      <div class="reticulasWeb">
        <div class="titulosReticulasWeb">
          <p>Ordenador</p>
          <p>Mobile</p>
        </div>
        <img class="imagenReticulasWeb" :src="imagenReticulasWeb">
        <div class="datosReticulasWeb">
          <div class="datosOrdenador">
            <div>
              <p>Columnas: 10</p>
              <p>Margen: 80</p>
            </div>
            <div>
              <p>Medianil: 20</p>
              <p>Filas: 1px</p>
            </div>
          </div>
          <div class="datosMobile">
            <div>
              <p>Columnas: 1</p>
              <p>Margen: 25</p>
            </div>
            <div>
              <p>Filas: 1px</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <img class="separacion" :src="separacion">
    <section class="publi">
      <h2>RETÍCULAS PUBLICITARIAS</h2>
      <div class="textoReticulasPubli">
        <h4>Haz hover para descubrirlas!</h4>
        <p>Artículos grandes como Vinilos pueden aparecer cortados, aludiendo a que su tamaño es mayor que otros productos como los CDs</p>
      </div>
      <div class="reticulasPubli">
        <div class="hover-card">
          <img class="img-normal" :src="reticula1">
          <img class="img-hover" :src="reticula1hover">
        </div>
        <div class="hover-card">
          <img class="img-normal" :src="reticula2">
          <img class="img-hover" :src="reticula2hover">
        </div>
      </div>
      <div class="datosReticula">
        <div>
          <p>Columnas: 12</p>
          <p>Filas: 8</p>
        </div>
        <div>
          <p>Margen: 36px</p>
          <p>Medianil: 16px</p>
        </div>
      </div>
    </section>
    </div>

  </main>
</template>

<style lang="scss" scoped>
.page {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}

.page-content {
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

.subtitulo {
  padding-top: 3rem;
}

h1 {
  font-size: 3rem;
  font-family:'Ramona';
  font-weight: 300;
  width: 85%;
}

h2 {
  font-family: 'Ramona';
}

.imagenReticulasWeb {
  width: 100%;
  display: block;
}

.reticulasWeb {
  padding-top: 3rem;
}

.titulosReticulasWeb {
  display: grid;
  grid-template-columns: 72% 1fr;
  gap: 6.5%;
  margin-bottom: 0.75rem;

  p {
    margin: 0;
    font-size: 1.45rem;
  }
}

.datosReticulasWeb {
  display: grid;
  grid-template-columns: 72% 1fr;
  gap: 6.5%;
  padding-top: 1rem;

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
}

.datosOrdenador{
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 4rem;
}

.datosMobile {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 4rem;
}

.separacion {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
}

.textoReticulasPubli {
  width: 50%;
}

h4 {
  font-family: 'Urbanist';
  font-size: 1.3rem;
  margin-bottom: 1rem;
  margin-top: 0;
}

.reticulasPubli {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1.25rem;
}

.hover-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    display: block;
  }

  .img-hover {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &:hover .img-hover {
    opacity: 1;
  }

  &:hover .img-normal {
    opacity: 1;
  }
}

.datosReticula {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 4rem;
  padding-bottom: 3rem;

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
}

</style>
