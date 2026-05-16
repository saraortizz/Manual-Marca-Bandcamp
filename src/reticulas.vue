<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroReticulas from '@/assets/Images/Reticulas/Hero - Reticulas.png'
</script>

<template>
  <div>
    <Header />

    <main class="page">
      <section class="hero">
        <Hero :image="heroReticulas" alt="Reticulas" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>