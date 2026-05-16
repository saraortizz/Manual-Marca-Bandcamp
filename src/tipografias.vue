<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroTipografias from 'src/assets/Images/Tipografia/Hero - Tipografía.jpg'
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