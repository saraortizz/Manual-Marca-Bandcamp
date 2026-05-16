<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroMotion from 'src/assets/Images/Motio/Hero - Motion.jpg'
</script>

<template>
  <Header />

  <main class="page">
    <section class="hero">
      <Hero :image="heroMotion" alt="Motion" />
    </section>
  </main>
</template>

<style lang="scss" scoped>

</style>