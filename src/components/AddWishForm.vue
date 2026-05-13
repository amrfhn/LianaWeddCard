<template>
  <v-dialog v-model="dialog" max-width="600px" persistent>
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        color="primary"
        size="large"
        prepend-icon="mdi-message-plus"
        class="mt-4"
      >
        Tambah Ucapan
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 pa-6">
        <span class="text-h6">Tambah Ucapan Anda</span>
      </v-card-title>

      <v-card-text class="px-6 pb-2">
        <v-form ref="formRef" v-model="valid" @submit.prevent="handleSubmit">
          <v-text-field
            v-model="form.name"
            label="Nama"
            :rules="nameRules"
            variant="outlined"
            required
            counter
            maxlength="50"
            prepend-inner-icon="mdi-account"
          />

          <v-textarea
            v-model="form.message"
            label="Ucapan"
            :rules="messageRules"
            variant="outlined"
            required
            counter
            maxlength="500"
            rows="5"
            prepend-inner-icon="mdi-message-text"
            placeholder="Tulis ucapan penuh kasih sayang untuk pengantin..."
          />
        </v-form>
      </v-card-text>

      <v-card-actions class="px-6 pb-6">
        <v-spacer />
        <v-btn
          color="grey-darken-1"
          variant="text"
          @click="handleClose"
        >
          Batal
        </v-btn>
        <v-btn
          color="primary"
          variant="elevated"
          :disabled="!valid"
          :loading="loading"
          @click="handleSubmit"
        >
          Hantar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Wish {
  name: string;
  message: string;
  date: string;
}

interface Props {
  modelValue?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: boolean): void;
  (e: "submit", wish: Wish): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const dialog = ref(false);
const valid = ref(false);
const loading = ref(false);
const formRef = ref();

const form = ref({
  name: "",
  message: "",
});

const nameRules = [
  (v: string) => !!v || "Nama diperlukan",
  (v: string) => (v && v.length >= 2) || "Nama mestilah sekurang-kurangnya 2 aksara",
  (v: string) => (v && v.length <= 50) || "Nama mestilah tidak melebihi 50 aksara",
];

const messageRules = [
  (v: string) => !!v || "Ucapan diperlukan",
  (v: string) => (v && v.length >= 10) || "Ucapan mestilah sekurang-kurangnya 10 aksara",
  (v: string) => (v && v.length <= 500) || "Ucapan mestilah tidak melebihi 500 aksara",
];

const handleSubmit = async () => {
  if (!formRef.value) return;

  const { valid: isValid } = await formRef.value.validate();
  
  if (isValid) {
    loading.value = true;

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const wish: Wish = {
      name: form.value.name,
      message: form.value.message,
      date: new Date().toISOString(),
    };

    emit("submit", wish);
    
    // Reset form and close dialog
    form.value = {
      name: "",
      message: "",
    };
    formRef.value.reset();
    loading.value = false;
    dialog.value = false;
  }
};

const handleClose = () => {
  form.value = {
    name: "",
    message: "",
  };
  formRef.value?.reset();
  dialog.value = false;
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
