<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroReticulas from 'src/assets/Images/Retículas/Hero - Retículas.jpg'
</script>

<template>
  <Header />

  <main class="page">
    <section class="hero">
      <Hero :image="heroReticulas" alt="Reticulas" />
    </section>
  </main>
</template>

<style lang="scss" scoped>

</style>