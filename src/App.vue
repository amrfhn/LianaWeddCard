<template>
  <v-app>
    <v-layout>
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
      <the-main-header />
      <music-player music-src="/music/One_Only_Pamungkas.mp3" :autoplay="false" />
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import TheMainHeader from "@/components/layout/TheMainHeader.vue";
import MusicPlayer from "@/components/MusicPlayer.vue";
</script>

<style lang="scss">
.v-application {
  padding: 0;
  max-width: var(--app-max-width, 768px);
  margin: 0 auto;
}
</style>
