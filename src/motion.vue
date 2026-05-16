<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroMotion from '@/assets/Images/Motion/Hero - Motion.jpg'
</script>

<template>
  <div>
    <Header />

    <main class="page">
      <section class="hero">
        <Hero :image="heroMotion" alt="Motion" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>