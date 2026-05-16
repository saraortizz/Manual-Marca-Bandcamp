<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroValores from '@/assets/Images/Valores y voz/Hero - Valores y voz.png'
</script>

<template>
  <div>
    <Header />

    <main class="page">
      <section class="hero">
        <Hero :image="heroValores" alt="Valores y voz" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>