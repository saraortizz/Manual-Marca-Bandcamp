<script setup>
defineOptions({
  name: 'Hero',
})

defineProps({
  image: { type: String, required: true },
  alt: { type: String, default: '' }
})
</script>

<template>
  <section class="hero">
    <img class="hero__image" :src="image" :alt="alt">
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  overflow: hidden;
}

.hero__image {
  width: 100%;
  display: block;
}
</style>
