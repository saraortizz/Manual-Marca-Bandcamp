<script setup>
defineProps({
  textoIzquierda: { type: String, default: '' },
  textoDerecha: { type: String, default: '' }
})
</script>

<template>
  <header class="main-header">
    <div class="header-section left" @click="$emit('clickIzquierda')">
      <img src="@/assets/svg/arrow-left.svg" class="arrow-icon" alt="Volver">
      <span v-if="textoIzquierda" class="label">{{ textoIzquierda }}</span>
    </div>

    <div class="header-logo" @click="$router.push('/')">
      <img src="@/assets/svg/logo-bandcamp.svg" alt="Bandcamp">
    </div>

    <div class="header-section right" @click="$emit('clickDerecha')">
      <span v-if="textoDerecha" class="label">{{ textoDerecha }}</span>
      <img src="@/assets/svg/arrow-right.svg" class="arrow-icon" alt="Siguiente">
    </div>
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
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    text-transform: uppercase;
  }
}
</style>
