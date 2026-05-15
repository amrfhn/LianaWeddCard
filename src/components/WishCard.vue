<template>
  <v-card class="wish-card" elevation="2">
    <v-card-text>
      <div class="d-flex align-start ga-3">
        <v-avatar color="primary" size="40">
          <span class="text-h5">{{ randomEmoji }}</span>
        </v-avatar>
        <div class="flex-grow-1">
          <div class="d-flex justify-space-between align-center my-2">
            <p class="text-body-2 font-weight-bold font-georgia text-left">{{ name }}</p>
            <span v-if="date" class="text-caption text-medium-emphasis font-georgia font-italic">{{ formattedDate }}</span>
          </div>
          <p class="text-body-1 font-georgia font-italic text-left">{{ message }}</p>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name: string;
  message: string;
  date?: string;
}

const props = defineProps<Props>();

// Fun character-based smileys for wedding wishes
const funEmojis = [
  "😊", "😄", "😃", "😁", "😆", "😍", "🥰", "😘",
  "😚", "☺️", "🤗", "🤩", "😇", "🙂", "😌", "😉",
  "🥳", "😎", "🤠", "🥸", "🤓", "🧐", "😋", "😜",
];

// Simple hash function to consistently map names to emojis
const getEmojiHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};

const randomEmoji = computed(() => {
  const index = getEmojiHash(props.name) % funEmojis.length;
  return funEmojis[index];
});

const formattedDate = computed(() => {
  if (!props.date) return "";
  const date = new Date(props.date);
  return date.toLocaleDateString("ms-MY", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
});
</script>

<style scoped>
.wish-card {
  margin-bottom: 16px;
}
</style>
