<script setup>
defineOptions({
  name: 'HomeCard',
})

defineProps({
  title: { type: String, required: true },
  to: { type: String, required: true },
  image: { type: String, required: true },
  hoverImage: { type: String, default: '' },
  alt: { type: String, default: '' },
  size: { type: String, default: 'medium' }
})
</script>

<template>
  <NuxtLink :to="to" :class="['home-card', `home-card--${size}`]">
    <span class="home-card__media">
      <img class="home-card__image" :src="image" :alt="alt || title">
      <img
        v-if="hoverImage"
        class="home-card__image home-card__image--hover"
        :src="hoverImage"
        :alt="alt || title"
        aria-hidden="true"
      >
    </span>

    <span class="home-card__footer">
      <span class="home-card__title">{{ title }}</span>
      <span class="home-card__arrow" aria-hidden="true"></span>
    </span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.home-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  color: var(--color-amarillo-retro);
  font-family: var(--font-urbanist);
  text-decoration: none;

  &:hover,
  &:focus-visible {
    .home-card__image--hover {
      opacity: 1;
    }

    .home-card__arrow {
      transform: translateX(0.25rem);
    }
  }

  &:focus-visible {
    outline: 0.125rem solid currentColor;
    outline-offset: 0.375rem;
    border-radius: 0.75rem;
  }
}

.home-card--supersmall {
  grid-column: span 2;
}

.home-card--small {
  grid-column: span 4;
}

.home-card--medium {
  grid-column: span 6;
}

.home-card--wide {
  grid-column: span 8;
}

.home-card--full {
  grid-column: 1 / -1;
}

.home-card__media {
  position: relative;
  display: block;
  height: 19.0625rem;
  overflow: hidden;
  border-radius: 0.75rem;
  background-color: var(--color-amarillo-retro);
}

.home-card__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.2s ease;
}

.home-card__image--hover {
  opacity: 0;
}

.home-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.home-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.1;
}

.home-card__arrow {
  width: 1.875rem;
  height: 1.875rem;
  flex: 0 0 auto;
  background-color: currentColor;
  mask: url('@/assets/svg/arrow-right.svg') center / contain no-repeat;
  transition: transform 0.2s ease;
}
</style>
