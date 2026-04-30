<template>
  <v-app>
    <v-layout>
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
      <the-main-header />
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import TheMainHeader from "@/components/layout/TheMainHeader.vue";
</script>

<style lang="scss">
.v-application {
  padding: 0;
  max-width: var(--app-max-width, 768px);
  margin: 0 auto;
}
</style>
