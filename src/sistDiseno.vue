<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroSistDiseno from '@/assets/Images/Sistemadediseno/Hero - Sistema.png'
</script>

<template>
  <div>
    <Header />

    <main class="page">
      <section class="hero">
        <Hero :image="heroSistDiseno" alt="Sistema de Diseno" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>