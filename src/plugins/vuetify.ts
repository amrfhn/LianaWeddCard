import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const lightTheme = {
  dark: false,
  colors: {
    primary: "#5C6BC0",
    secondary: "#424242",
    accent: "#FF4081",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    background: "#FFFFFF",
    surface: "#FFFFFF",
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: "#7C4DFF",
    secondary: "#B0BEC5",
    accent: "#FF4081",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    background: "#121212",
    surface: "#1E1E1E",
  },
};

// --- Wedding card themes ---

const floralTheme = {
  dark: false,
  colors: {
    primary: "#A0785A",
    secondary: "#C9A96E",
    accent: "#E8B4A0",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    background: "#FFF8F2",
    surface: "#FEF3E8",
  },
};

const minimalistTheme = {
  dark: false,
  colors: {
    primary: "#2C2C2C",
    secondary: "#888888",
    accent: "#B0B0B0",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    background: "#FAFAFA",
    surface: "#FFFFFF",
  },
};

const traditionalTheme = {
  dark: false,
  colors: {
    primary: "#1B5E20",
    secondary: "#F9A825",
    accent: "#8BC34A",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    background: "#FFFDE7",
    surface: "#FFFFF8",
  },
};

const rusticTheme = {
  dark: false,
  colors: {
    primary: "#5D4037",
    secondary: "#FF8F00",
    accent: "#A1887F",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    background: "#FFF3E0",
    surface: "#FFF8F0",
  },
};

const royalTheme = {
  dark: false,
  colors: {
    primary: "#4A148C",
    secondary: "#FFD700",
    accent: "#CE93D8",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    background: "#F3E5F5",
    surface: "#FAF0FF",
  },
};

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: lightTheme,
      dark: darkTheme,
      floral: floralTheme,
      minimalist: minimalistTheme,
      traditional: traditionalTheme,
      rustic: rusticTheme,
      royal: royalTheme,
    },
  },
  defaults: {
    VBtn: {
      fontFamily: "'Cormorant Garamond', serif",
    },
  },
});
