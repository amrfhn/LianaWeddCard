<template>
  <div>
    <v-form ref="rsvpFormRef" v-model="isFormValid" @submit.prevent="onSubmit">
      <v-text-field
        v-model="form.fullName"
        label="Nama Penuh"
        class="text-left font-georgia font-italic mb-4"
        variant="outlined"
        density="comfortable"
        :rules="[(v: string) => !!v || 'Sila isikan nama penuh anda']"
        required
      />

      <v-select
        v-model="form.pax"
        :items="paxOptions"
        label="Bilangan Kehadiran"
        class="text-left font-georgia font-italic mb-4 text-body-2"
        variant="outlined"
        density="comfortable"
        :rules="[(v: number) => !!v || 'Sila pilih bilangan kehadiran (pax)']"
        required
      />

      <v-select
        v-model="form.guestType"
        :items="multiOptions"
        label="Jenis Jemputan"
        class="text-left font-georgia font-italic mb-4 text-body-2"
        variant="outlined"
        density="comfortable"
        multiple
        chips
        :rules="[
          (v: string[]) => (v && v.length > 0) || 'Sila pilih sekurang-kurangnya satu pilihan',
        ]"
        required
      />

      <v-btn type="submit" color="primary" :disabled="!isFormValid" block class="mt-2">
        Hantar
      </v-btn>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const rsvpFormRef = ref();
const isFormValid = ref(false);

const form = reactive<{
  fullName: string;
  pax: number | null;
  guestType: string[];
}>({
  fullName: "",
  pax: null,
  guestType: [],
});

const paxOptions = Array.from({ length: 10 }, (_, i) => i + 1);
const multiOptions = ["Jemputan Pihak Lelaki", "Jemputan Pihak Perempuan"];

const onSubmit = async () => {
  const { valid } = await rsvpFormRef.value?.validate();
  if (!valid) return;
  console.log("RSVP submitted:", { ...form });
};
</script>
