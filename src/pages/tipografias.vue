<script setup>
import incorrectos from '@/assets/images/tipografia/usos-incorrectos.png'
import muestra2 from '@/assets/images/tipografia/muestra-tipografica-2.png'
import muestra1 from '@/assets/images/tipografia/muestra-tipografica-1.png'
import separacion from '@/assets/images/Linea1.png'
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroTipografias from '@/assets/images/tipografia/hero-tipografia.jpg'
</script>

<template>
  <main class="page">
    <section class="hero">
      <Hero :image="heroTipografias" alt="Tipografías" />
    </section>
    <div class="page-content">
      <section class="subtitulo">
        <h1>USAMOS DOS TIPOGRAFÍAS PRINCIPALES EN EL DISEÑO DE BANDCAMP, QUE DESTACAN LA LIBERTAD DE NUESTROS PRINCIPIOS</h1>
      </section>
      <img class="separacion" :src="separacion">
      <section class="combinaciones">
        <h2>COMBINACIONES TIPOGRÁFICAS</h2>
        <div class="imagenesMuestra">
          <img class="muestra1" :src="muestra1">
          <img class="muestra2" :src="muestra2">
        </div>
      </section>
      <img class="separacion" :src="separacion">
      <section class="usosIncorrectos">
        <h2>USOS INCORRECTOS</h2>
        <img class="incorrectos" :src="incorrectos">
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

.separacion {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
}
h2 {
  font-family: 'Ramona';
  margin: 0;
}
.imagenesMuestra {
  padding-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  flex-direction: column;
}
.muestra1 {
  width: 100%;
}
.muestra2 {
  width: 100%;
}
.incorrectos {
  width: 100%;
}
</style>
