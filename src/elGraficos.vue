<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroelGraficos from '@/assets/Images/Elementos Gráficos/Hero - Elementos gráficos.png'
</script>

<template>
  <div>
    <Header />

    <main class="page">
      <section class="hero">
        <Hero :image="heroelGraficos" alt="Elementos Gráficos" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>