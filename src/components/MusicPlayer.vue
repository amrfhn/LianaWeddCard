<template>
  <div class="music-player">
    <v-btn
      :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
      :color="isPlaying ? 'primary' : 'grey'"
      size="medium"
      elevation="4"
      :class="{ 'rotating': isPlaying }"
      @click="togglePlay"
    />
    <audio ref="audioRef" :src="musicSrc" loop @play="isPlaying = true" @pause="isPlaying = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Props {
  musicSrc: string;
  autoplay?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: false,
});

const audioRef = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);

const togglePlay = () => {
  if (!audioRef.value) return;

  if (isPlaying.value) {
    audioRef.value.pause();
  } else {
    audioRef.value.play();
  }
};

const attemptAutoplay = async () => {
  if (!audioRef.value) return;

  try {
    await audioRef.value.play();
  } catch {
    // Autoplay blocked, wait for user interaction
    const handleInteraction = () => {
      if (audioRef.value && props.autoplay) {
        audioRef.value.play().catch(() => {
          // Still blocked or error, user can manually play
        });
      }
      // Remove listeners after first interaction
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };

    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("touchstart", handleInteraction, { once: true });
    document.addEventListener("keydown", handleInteraction, { once: true });
  }
};

onMounted(() => {
  if (props.autoplay) {
    // Small delay to ensure audio is loaded
    setTimeout(() => {
      attemptAutoplay();
    }, 500);
  }
});

onUnmounted(() => {
  // Cleanup: pause audio when component unmounts
  if (audioRef.value) {
    audioRef.value.pause();
  }
});
</script>

<style scoped>
.music-player {
  position: fixed;
  bottom: 70px;
  right: 5px;
  z-index: 999;
}

.rotating {
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
