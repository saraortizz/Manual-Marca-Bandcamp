<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroTratFotografico from 'src/assets/Images/Tratamiento fotográfico/Hero - Tratamiento fotográfico.jpg'
</script>

<template>
  <Header />

  <main class="page">
    <section class="hero">
      <Hero :image="heroTratFotografico" alt="Tratamiento fotografico" />
    </section>
  </main>
</template>

<style lang="scss" scoped>

</style>