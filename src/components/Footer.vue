<script setup>
defineOptions({
  name: 'Footer',
})

const { manualSections } = useManualNavigation()
</script>

<template>
  <footer class="main-footer">
    <div class="footer-left">
      <nav class="footer-nav" aria-label="Apartados del manual">
        <div class="nav-column">
          <NuxtLink to="/">Inicio</NuxtLink>
          <NuxtLink
            v-for="section in manualSections.slice(0, 4)"
            :key="section.path"
            :to="section.path"
          >
            {{ section.title }}
          </NuxtLink>
        </div>

        <div class="nav-column">
          <NuxtLink
            v-for="section in manualSections.slice(4)"
            :key="section.path"
            :to="section.path"
          >
            {{ section.title }}
          </NuxtLink>
        </div>
      </nav>

    </div>

    <img src="@/assets/svg/forma-giratoria2.svg" class="rotating-asterisk" alt="Asterisco">

    <div class="footer-right">
      <img src="@/assets/svg/logo-bandcamp.svg" class="footer-logo" alt="Bandcamp">
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.main-footer {
  background-color: var(--color-amarillo-retro);
  height: 26.375rem;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-family: var(--font-urbanist);
  font-weight: 700;

  .footer-left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 70%;
    text-align: left;
    z-index: 2;
  }

  .footer-nav {
    display: flex;
    gap: 5rem;

    .nav-column {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      a {
        text-decoration: none;
        color: #000;
        font-family: inherit;
        font-weight: inherit;
        font-size: 1.6rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .footer-right {
    z-index: 2;
    flex-shrink: 0;

    .footer-logo {
      width: 32.8125rem;
      height: 20.5rem;
      object-fit: contain;
    }
  }

  .rotating-asterisk {
    position: absolute;
    right: 20rem;
    bottom: -16.9375rem;
    width: 33.875rem;
    height: 33.875rem;
    z-index: 1;
    pointer-events: none;
    display: block;
    transform-origin: center center;
    animation: giroAsterisco 2s steps(4, end) infinite;
  }
}
</style>

<style>
@keyframes giroAsterisco {
  from { transform: rotate(0deg); }
  to { transform: rotate(-90deg); }
}
</style>
