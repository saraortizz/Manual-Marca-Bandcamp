<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroLogo from '@/assets/Images/Logo/Hero - Logo.png'
</script>

<template>
  <div>
    <Header />

    <main class="page">
      <section class="hero">
        <Hero :image="heroLogo" alt="Logo" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>