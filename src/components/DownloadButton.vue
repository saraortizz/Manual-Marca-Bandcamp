<script setup>
defineOptions({
  name: 'DownloadButton',
})

defineProps({
  href: { type: String, default: '#' },
  label: { type: String, default: 'Descargar' },
  download: { type: [Boolean, String], default: false }
})
</script>

<template>
  <a class="download-button" :href="href" :download="download">
    <span class="download-button__icon" aria-hidden="true"></span>
    <span class="download-button__label">{{ label }}</span>
  </a>
</template>

<style lang="scss" scoped>
.download-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 12.5rem;
  height: 2.75rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  background-color: var(--color-amarillo-retro);
  color: var(--color-black);
  font-family: var(--font-urbanist);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover,
  &:focus-visible {
    background-color: var(--color-black);
    color: var(--color-amarillo-retro);
  }

  &:focus-visible {
    outline: 0.125rem solid var(--color-black);
    outline-offset: 0.25rem;
  }
}

.download-button__icon {
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 auto;
  background-color: currentColor;
  mask: url('@/assets/svg/arrow-down.svg') center / contain no-repeat;
}

.download-button__label {
  border-bottom: 0.0625rem solid currentColor;
}
</style>
