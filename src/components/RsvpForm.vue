<template>
  <div>
    <h4 class="text-h6 font-weight-bold mb-2 text-uppercase">RSVP</h4>
    <p class="text-body-2 mb-6">Sila sahkan kehadiran anda</p>

    <v-form ref="rsvpFormRef" v-model="isFormValid" @submit.prevent="onSubmit">
      <v-text-field
        v-model="form.fullName"
        label="Nama Penuh"
        variant="outlined"
        density="comfortable"
        :rules="[(v: string) => !!v || 'Nama penuh diperlukan']"
        required
      />

      <v-select
        v-model="form.pax"
        :items="paxOptions"
        label="Bilangan Kehadiran"
        variant="outlined"
        density="comfortable"
        :rules="[(v: number) => !!v || 'Sila pilih bilangan kehadiran']"
        required
      />

      <v-select
        v-model="form.guestType"
        :items="multiOptions"
        label="Jenis Jemputan"
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
