<script setup>
defineOptions({
  name: 'Header',
})

const { previousSection, nextSection } = useManualNavigation()
</script>

<template>
  <header class="main-header">
    <NuxtLink
      v-if="previousSection"
      class="header-section left"
      :to="previousSection.path"
      :aria-label="`Ir a ${previousSection.title}`"
    >
      <img src="@/assets/svg/arrow-left.svg" class="arrow-icon" alt="">
      <span class="label">{{ previousSection.title }}</span>
    </NuxtLink>

    <div v-else class="header-section left"></div>

    <NuxtLink class="header-logo" to="/" aria-label="Ir al inicio">
      <img src="@/assets/svg/logo-bandcamp.svg" alt="Bandcamp">
    </NuxtLink>

    <NuxtLink
      v-if="nextSection"
      class="header-section right"
      :to="nextSection.path"
      :aria-label="`Ir a ${nextSection.title}`"
    >
      <span class="label">{{ nextSection.title }}</span>
      <img src="@/assets/svg/arrow-right.svg" class="arrow-icon" alt="">
    </NuxtLink>

    <div v-else class="header-section right"></div>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  height: 7.375rem;
  background-color: var(--color-amarillo-retro);

  .header-section {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    width: 18.75rem;
    color: #000;
    text-decoration: none;

    &.right {
      justify-content: flex-end;
    }

    .arrow-icon {
      width: 1.5rem;
      height: 1.5rem;
      transition: transform 0.2s ease;
    }

    &.left:hover .arrow-icon {
      transform: translateX(-0.3125rem);
    }

    &.right:hover .arrow-icon {
      transform: translateX(0.3125rem);
    }

    &:hover .label,
    &:focus-visible .label {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .header-logo {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 4rem;
      height: 2.5rem;
      object-fit: contain;
    }
  }

  .label {
    opacity: 0;
    transform: translateX(-0.25rem);
    transition: opacity 0.2s ease, transform 0.2s ease;
    font-family: var(--font-urbanist);
    font-weight: 700;
    font-size: 0.875rem;
    white-space: nowrap;
  }

  .right .label {
    transform: translateX(0.25rem);
  }
}
</style>
