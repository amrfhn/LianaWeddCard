<template>
  <v-dialog v-model="dialog" max-width="500px" persistent>
    <v-card>
      <v-card-title class="text-h5 pa-6 text-center">
        <v-icon size="large" color="success" class="mr-2">mdi-gift</v-icon>
        <span class="text-h6">Duit Raya Digital</span>
      </v-card-title>

      <v-card-text class="px-6 pb-2 text-center">
        <p class="text-body-2 mb-4">
          Terima kasih atas kehadiran dan doa restu anda. Sekiranya ingin menghantar
          sumbangan, anda boleh imbas kod QR di bawah.
        </p>

        <v-tabs v-model="activeTab" align-tabs="center" color="primary" class="mb-4">
          <v-tab value="bank1">DuitNow</v-tab>
          <v-tab value="bank2">Touch n Go</v-tab>
        </v-tabs>

        <v-window v-model="activeTab">
          <v-window-item value="bank1">
            <v-card variant="outlined" class="pa-4 mb-4">
              <div class="qr-code-container mb-3">
                <!-- Placeholder for QR Code - Replace with actual QR code image -->
                <v-img
                  src="https://via.placeholder.com/250x250.png?text=DuitNow+QR+Code"
                  alt="DuitNow QR Code"
                  max-width="250"
                  class="mx-auto"
                />
              </div>
              <p class="text-caption text-medium-emphasis">
                <strong>Bank:</strong> Maybank<br />
                <strong>Nama:</strong> Khaizuran Azim<br />
                <strong>No. Akaun:</strong> 123456789012
              </p>
            </v-card>
          </v-window-item>

          <v-window-item value="bank2">
            <v-card variant="outlined" class="pa-4 mb-4">
              <div class="qr-code-container mb-3">
                <!-- Placeholder for QR Code - Replace with actual QR code image -->
                <v-img
                  src="https://via.placeholder.com/250x250.png?text=Touch+n+Go+QR"
                  alt="Touch n Go QR Code"
                  max-width="250"
                  class="mx-auto"
                />
              </div>
              <p class="text-caption text-medium-emphasis">
                <strong>No. Phone:</strong> 012-345-6789
              </p>
            </v-card>
          </v-window-item>
        </v-window>

        <v-alert type="info" variant="tonal" density="compact" class="text-caption">
          <v-icon size="small" class="mr-1">mdi-information</v-icon>
          Imbas kod QR menggunakan aplikasi banking anda
        </v-alert>
      </v-card-text>

      <v-card-actions class="px-6 pb-6">
        <v-spacer />
        <v-btn color="grey-darken-1" variant="text" @click="dialog = false">
          Tutup
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialog = defineModel<boolean>({ default: false });
const activeTab = ref("bank1");
</script>

<style scoped>
.qr-code-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
}
</style>
