<template>
  <v-bottom-navigation color="primary" grow>
    <v-btn>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn @click="toggleTheme">
      <v-icon>{{ isDark ? "mdi-weather-sunny" : "mdi-weather-night" }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { useThemeStore } from "@/stores/theme";
import { storeToRefs } from "pinia";

const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
const vuetifyTheme = useTheme();

const toggleTheme = () => {
  themeStore.toggleTheme();
  themeStore.applyTheme(vuetifyTheme);
};
</script>
