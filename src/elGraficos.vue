<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroElementos from 'src/assets/Images/ElementosGraficos/Hero - Elementosgraficos.png'
</script>

<template>
  <Header />

  <main class="page">
    <section class="hero">
      <Hero :image="heroElementos" alt="Elementos Gráficos" />
    </section>
  </main>
</template>

<style lang="scss" scoped>

</style>