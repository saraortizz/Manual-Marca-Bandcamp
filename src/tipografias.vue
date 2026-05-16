<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroTipografias from '@/assets/Images/Tipografia/Hero - Tipografía.jpg'
</script>

<template>
  <div>
    <Header />

    <main class="page">
      <section class="hero">
        <Hero :image="heroTipografias" alt="Tipografías" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>