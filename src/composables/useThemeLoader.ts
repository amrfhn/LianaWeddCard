import { computed, onMounted, onUnmounted } from 'vue'
import { useTheme } from 'vuetify'
import type { ThemeName } from '@/types'

/**
 * Applies a wedding card theme by switching the active Vuetify theme.
 * Restores the default 'light' theme on unmount.
 */
export function useThemeLoader(themeName: ThemeName) {
  const vuetifyTheme = useTheme()

  onMounted(() => {
    vuetifyTheme.global.name.value = themeName
  })

  onUnmounted(() => {
    vuetifyTheme.global.name.value = 'light'
  })

  const themeClass = computed(() => `theme-${themeName}`)

  return { themeClass }
}
