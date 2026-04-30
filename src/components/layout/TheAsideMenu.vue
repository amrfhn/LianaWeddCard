<template>
  <v-navigation-drawer :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.to"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>();

defineEmits(["update:modelValue"]);

const menuItems = [
  { title: "Home", icon: "mdi-home", to: "/" },
];
</script>
