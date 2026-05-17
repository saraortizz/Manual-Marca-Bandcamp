<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroTipografias from 'src/assets/Images/Tipografia/Hero - Tipografía.jpg'
import logoPrincipal from '@/assets/images/logo/bandcamp-logo.png'
import colores from '@/assets/images/logo/bandcamp-logo-colores-principales.png'
import imgexcepcional from '@/assets/images/logo/logo-con-huella-prueba.png'
import logoHuella from '@/assets/images/logo-huella.png'
import logoHuellaColores from '@/assets/images/logo/logo-huella-colores.png'
import areaRespeto from '@/assets/images/logo/area-de-respeto.png'
import convivenciaMarcas from '@/assets/images/logo/logo-con-mas-marcas.png'
import separador from '@/assets/images/Linea1.png'
</script>

<template>
  <Header />

  <main class="page">
    <section class="hero">
      <Hero :image="heroTipografias" alt="Tipografías" />
    </section>
  </main>
</template>

<style lang="scss" scoped>

</style>