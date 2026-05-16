<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroSistDisenño from '@/assets/Images/Sistema de Diseño/Hero - Sistema de Diseño.png'
</script>

<template>
  <div>
    <Header />

    <main class="page">
      <section class="hero">
        <Hero :image="heroSistDiseño" alt="Sistema de Diseño" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>