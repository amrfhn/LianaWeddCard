<template>
  <h4 class="text-h5 font-weight-bold mb-2 text-uppercase font-georgia">{{ title }}</h4>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
