<template>
  <h4 class="text-h5 georgia-info font-weight-bold mb-2 text-uppercase">{{ title }}</h4>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
