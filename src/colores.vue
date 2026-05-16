<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroColores from 'src/assets/Images/Colores/Hero - Colores.jpg'
</script>

<template>
  <Header />

  <main class="page">
    <section class="hero">
      <Hero :image="heroColores" alt="Colores" />
    </section>
  </main>
</template>

<style lang="scss" scoped>

</style>