<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroTratFotografico from '@/assets/Images/Tratamiento Fotográfico/Hero - Tratamiento fotográfico.jpg'
</script>

<template>
  <div>
    <Header />

    <main class="page">
      <section class="hero">
        <Hero :image="heroTratFotografico" alt="Tratamiento Fotográfico" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>