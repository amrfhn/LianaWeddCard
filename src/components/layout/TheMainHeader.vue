<template>
  <v-bottom-navigation color="primary" grow fixed class="bottom-nav-fixed">
    <v-btn @click="scrollToSection('rsvp')">
      <v-icon>mdi-calendar-check</v-icon>
      <span class="text-caption">RSVP</span>
    </v-btn>

    <v-btn @click="scrollToSection('wishes')">
      <v-icon>mdi-message-plus</v-icon>
      <span class="text-caption">Ucapan</span>
    </v-btn>

    <v-btn class="money-pocket-btn" @click="showMoneyPocket = true">
      <v-icon>mdi-gift</v-icon>
      <span class="text-caption">Gift</span>
    </v-btn>

    <v-btn @click="scrollToSection('contact')">
      <v-icon>mdi-phone</v-icon>
      <span class="text-caption">Hubungi</span>
    </v-btn>

    <v-btn @click="scrollToSection('location')">
      <v-icon>mdi-map-marker</v-icon>
      <span class="text-caption">Lokasi</span>
    </v-btn>
  </v-bottom-navigation>

  <MoneyPocket v-model="showMoneyPocket" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import MoneyPocket from "@/components/MoneyPocket.vue";

const showMoneyPocket = ref(false);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<style scoped>
.bottom-nav-fixed {
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 1000 !important;
}

.money-pocket-btn {
  background-color: rgba(var(--v-theme-success), 0.15) !important;
}

.money-pocket-btn .v-icon,
.money-pocket-btn .text-caption {
  color: rgb(var(--v-theme-success)) !important;
}
</style>
