import { floralTheme } from './floral'
import { minimalistTheme } from './minimalist'
import { traditionalTheme } from './traditional'
import { rusticTheme } from './rustic'
import { royalTheme } from './royal'
import type { ThemeName } from '@/types'
import type { ThemeConfig } from './types'

const themeRegistry: Record<ThemeName, ThemeConfig> = {
  floral: floralTheme,
  minimalist: minimalistTheme,
  traditional: traditionalTheme,
  rustic: rusticTheme,
  royal: royalTheme,
}

export function getTheme(name: ThemeName): ThemeConfig {
  return themeRegistry[name]
}

export { themeRegistry }
export type { ThemeConfig }
