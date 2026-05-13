<script setup>
// import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'
// import DownloadButton from '@/components/DownloadButton.vue'
</script>

<template>
  <main class="home-page">
    <!-- <Header /> -->
    <!-- <DownloadButton /> -->
    <footer class="home-footer">© 2026 • Manual de Bandcamp</footer>
    <!-- <Footer /> -->
  </main>
</template>

<style lang="scss" scoped>
.home-page {
  min-height: 100svh;
  padding: 3rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--color-black);
}

.home-footer {
  width: min(100%, 72rem);
  margin: 0 auto;
  color: var(--color-amarillo-retro);
  font-family: var(--font-urbanist);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.2;
}
</style>
