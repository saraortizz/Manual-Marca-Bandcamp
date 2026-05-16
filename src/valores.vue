[15:39, 16/5/2026] Rororocio Esdgraficamente: <script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroValores from 'src/assets/Images/Valores y voz/Hero - Valores y voz.png'
</script>

<template>
  <Header />

  <main class="page">
    <section class="hero">
      <Hero :image="heroValores" alt="Valores y voz" />
    </section>
  </main>
</template>

<style lang="scss" scoped>

</style>
[15:39, 16/5/2026] Rororocio Esdgraficamente: Tmb he hecho el de tratamiento fotografico <script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import heroTratFotografico from '@/assets/Images/Tratamiento fotográfico/Hero - Tratamiento fotográfico.jpg'
</script>

<template>
  <Header />

  <main class="page">
    <section class="hero">
      <Hero :image="heroTratFotografico" alt="Tratamiento fotografico" />
    </section>
  </main>
</template>

<style lang="scss" scoped>

</style>