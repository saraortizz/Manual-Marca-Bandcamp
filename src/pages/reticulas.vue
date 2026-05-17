<script setup>
import datos from '@/assets/images/reticulas/textos-reticulas.png'
import separacion from '@/assets/images/Linea1.png'
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
        <img class="imagenReticulasWeb" :src="imagenReticulasWeb">
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
        
        <img class="datos" :src="datos">
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
  padding-top: 3rem;
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

.datos {
  width: 100%;
}

</style>
