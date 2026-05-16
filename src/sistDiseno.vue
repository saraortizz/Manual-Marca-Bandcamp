<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroSistema from 'src/assets/Images/Sistemadediseño/Hero - Sistema.png'
</script>

<template>
  <Header />

  <main class="page">
    <section class="hero">
      <Hero :image="heroSistema" alt="Sistema de diseño" />
    </section>
  </main>
</template>

<style lang="scss" scoped>

</style>