<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroColores from '@/assets/Images/Colores/Hero - Colores .jpg'
</script>

<template>
  <div>
    <Header />

    <main class="page">
      <section class="hero">
        <Hero :image="heroColores" alt="Colores" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>