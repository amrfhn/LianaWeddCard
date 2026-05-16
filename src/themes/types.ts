export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  error: string
  info: string
  success: string
  warning: string
}

export interface ThemeConfig {
  name: string
  label: string
  vuetifyColors: ThemeColors
}
