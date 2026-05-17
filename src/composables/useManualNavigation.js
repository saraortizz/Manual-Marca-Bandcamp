import { computed } from 'vue'

export const manualSections = [
  { title: 'Valores y voz', path: '/valores' },
  { title: 'Logo', path: '/logo' },
  { title: 'Colores', path: '/colores' },
  { title: 'Tipografías', path: '/tipografias' },
  { title: 'Retículas', path: '/reticulas' },
  { title: 'Tratamiento fotográfico', path: '/tratamiento-fotografico' },
  { title: 'Motion', path: '/motion' },
  { title: 'Elementos gráficos', path: '/elementos-graficos' },
  { title: 'Sistema de diseño', path: '/sistema-diseno' },
]

export function useManualNavigation() {
  const route = useRoute()

  const currentIndex = computed(() => {
    return manualSections.findIndex((section) => section.path === route.path)
  })

  const previousSection = computed(() => {
    if (currentIndex.value < 0) return null
    return manualSections[(currentIndex.value - 1 + manualSections.length) % manualSections.length]
  })

  const nextSection = computed(() => {
    if (currentIndex.value < 0) return null
    return manualSections[(currentIndex.value + 1) % manualSections.length]
  })

  return {
    manualSections,
    previousSection,
    nextSection,
  }
}
