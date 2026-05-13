<template>
  <v-container fluid class="pa-0">
    <!-- section 1: main -->
    <v-row justify="center" align-content="space-around" class="scroll-section" style="min-height: 100vh">
      <v-col class="text-center pt-10" cols="12" md="8">
        <p class="pb-10 text-uppercase text-body-2">Walimatulurus</p>
        <h2 class="text-h2">Khaizuran</h2>
        <h3 class="text-h4">&</h3>
        <h2 class="text-h2">Natasha</h2>

        <p class="text-body-2 pt-14">Ahad, 5 Julai 2026</p>
        <p class="text-body-2">Urban Park Hall, Alam Impian</p>
        <p class="text-h6 pt-12">#NatashAmiracleforKhai</p>
      </v-col>
    </v-row>

    <!-- section 2: welcoming  -->
    <v-row justify="center" class="scroll-section" style="min-height: 100vh">
      <v-col class="text-center">
        <img class="w-33 h-auto" src="@/assets/images/bismillah.png" alt="Bismillah" />

        <p class="font-weight-bold">Assalamualaikum dan Salam Sejahtera</p>
        <p class="mb-4">dengan rasa penuh kesyukuran kehadrat Ilahi</p>

        <h3 class="text-h6 font-weight-bold">Datuk Abdullah bin Mat</h3>
        <h3 class="text-h7">&</h3>
        <h3 class="text-h6 font-weight-bold">Muhaizati binti Mohamed</h3>
        <p class="text-body-2 mt-1 font-italic">(Ibu Bapa Pengantin Lelaki)</p>

        <p class="font-italic my-2">bersama</p>

        <h3 class="text-h6 font-weight-bold">Amelia binti Ishak</h3>
        <p class="text-body-2 mt-1 mb-4 font-italic">(Ibu Pengantin Perempuan)</p>

        <p>
          dengan segala hormatnya menjemput<br />Yang Berbahagia
          Dato’/Datuk/Datin/Tuan/Puan/Encik/Cik
        </p>
        <!-- <v-divider class="mt-10 mb-4 mx-auto" style="border-style: dotted; width: 70%" /> -->
        <p class="mb-4">ke walimatulurus putera dan puteri kami.</p>

        <h3 class="text-h5 font-weight-bold text-uppercase mt-6">Khaizuran azim bin abdullah</h3>
        <h3 class="text-h6">&</h3>
        <h3 class="text-h5 font-weight-bold text-uppercase mb-6">
          natasha amiraliana binti mohd razif
        </h3>

        <p class="mb-4">
          Pada <b>Ahad, 5 Julai 2026</b><br />
          Jam <b>11 pagi sehingga 3.30 petang</b><br />
          Bertempat di <b>Urban Park Hall, Alam Impian</b>
        </p>
      </v-col>
    </v-row>

    <!-- section 3: details -->
    <v-row justify="center" class="scroll-section" style="min-height: 100vh">
      <v-col class="text-center">
        <div class="py-4">
          <h4 class="text-h6 font-weight-bold mb-2 text-uppercase">Aturcara Majlis</h4>
          <p class="text-body-2 mb-4 text-uppercase">
            11:00 AM - 3:30 PM <br /><span class="text-body-1 text-uppercase"
              >Ketibaan Tetamu dan Jamuan Makan</span
            >
          </p>
          <p class="text-body-2">
            12:00 PM <br /><span class="text-body-1 text-uppercase">Ketibaan Pengantin</span>
          </p>
        </div>

        <div id="location" class="py-4">
          <h4 class="text-h6 font-weight-bold mb-2 text-uppercase">Lokasi Majlis</h4>
          <p class="text-body-1 text-uppercase">
            Urban Park Hall, Alam Impian<br />Jalan Tun Teja 35/4a, 40470 Shah Alam, Selangor
          </p>

          <div class="d-flex ga-3 justify-center mb-4">
            <v-btn
              href="https://maps.app.goo.gl/MdXkuoBAjfyXjowDA"
              target="_blank"
              color="primary"
              prepend-icon="mdi-google-maps"
              class="mt-4"
            >
              Maps
            </v-btn>
            <v-btn
              href="https://ul.waze.com/ul?venue_id=66519070.665321775.37973731&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
              target="_blank"
              color="primary"
              prepend-icon="mdi-waze"
              class="mt-4"
            >
              Waze
            </v-btn>
          </div>
        </div>

        <div id="contact" class="py-4">
          <h4 class="text-h6 font-weight-bold mb-2 text-uppercase">Hubungi</h4>
          <div class="pb-4">
            <div class="align-center justify-center ga-2">
              <v-btn
                prepend-icon="mdi-phone"
                size="small"
                density="comfortable"
                variant="text"
                href="tel:0178757346"
                >Encik Adli</v-btn
              >
              <v-btn
                prepend-icon="mdi-whatsapp"
                size="small"
                density="comfortable"
                variant="text"
                color="green"
                href="https://wa.me/60178757346"
                target="_blank"
                >Encik Adli</v-btn
              >
            </div>
            <div class="d-flex align-center justify-center ga-2">
              <v-btn
                prepend-icon="mdi-phone"
                size="small"
                density="comfortable"
                variant="text"
                href="tel:0139562576"
                >Puan Dila</v-btn
              >
              <v-btn
                prepend-icon="mdi-whatsapp"
                size="small"
                density="comfortable"
                variant="text"
                color="green"
                href="https://wa.me/60139562576"
                target="_blank"
                >Puan Dila</v-btn
              >
            </div>
            <p class="text-body-2 text-uppercase font-italic">(Wakil Pihak Lelaki)</p>
          </div>
          <div>
            <div class="d-flex align-center justify-center ga-2">
              <v-btn
                prepend-icon="mdi-phone"
                size="small"
                density="comfortable"
                variant="text"
                href="tel:0163839798"
                >Puan Amy</v-btn
              >
              <v-btn
                prepend-icon="mdi-whatsapp"
                size="small"
                density="comfortable"
                variant="text"
                color="green"
                href="https://wa.me/60163839798"
                target="_blank"
                >Puan Amy</v-btn
              >
            </div>
            <div class="d-flex align-center justify-center ga-2">
              <v-btn
                prepend-icon="mdi-phone"
                size="small"
                density="comfortable"
                variant="text"
                href="tel:0129177720"
                >Puan Ika</v-btn
              >
              <v-btn
                prepend-icon="mdi-whatsapp"
                size="small"
                density="comfortable"
                variant="text"
                color="green"
                href="https://wa.me/60129177720"
                target="_blank"
                >Puan Ika</v-btn
              >
            </div>
            <p class="text-body-2 text-uppercase font-italic">(Wakil Pihak Perempuan)</p>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- section 4: rsvp -->
    <v-row id="rsvp" justify="center" class="scroll-section" style="min-height: 100vh">
      <v-col class="text-center" cols="12" md="8">
        <div class="pb-14">
          <h4 class="text-h6 font-weight-bold mb-2 mt-10 text-uppercase">Save the Date!</h4>

          <countdown :time="timeLeft" format="DD:HH:mm:ss" class="my-4">
            <template #="{ resolved }">
              <div class="d-flex ga-4 justify-center">
                <div class="text-center">
                  <div class="text-h5 font-weight-bold">{{ resolved.DD }}</div>
                  <div class="text-caption">Hari</div>
                </div>
                <div class="text-center">
                  <div class="text-h5 font-weight-bold">{{ resolved.HH }}</div>
                  <div class="text-caption">Jam</div>
                </div>
                <div class="text-center">
                  <div class="text-h5 font-weight-bold">{{ resolved.mm }}</div>
                  <div class="text-caption">Minit</div>
                </div>
                <div class="text-center">
                  <div class="text-h5 font-weight-bold">{{ resolved.ss }}</div>
                  <div class="text-caption">Saat</div>
                </div>
              </div>
            </template>
          </countdown>

          <AddToCalendar
            name="Walimatulurus Khaizuran & Natasha"
            location="Urban Park Hall, Alam Impian"
            start-date="2026-07-05"
            end-date="2026-07-05"
            start-time="11:00"
            end-time="15:30"
            time-zone="Asia/Kuala_Lumpur"
          />
        </div>

        <RsvpForm />
      </v-col>
    </v-row>

    <!-- section 5: wishes -->
    <v-row id="wishes" justify="center" class="scroll-section" style="min-height: 100vh">
      <v-col class="text-center" cols="12" md="8">
        <h4 class="text-h6 font-weight-bold mb-6 text-uppercase">Ruangan Ucapan</h4>
        <swiper
          :slides-per-view="1"
          :space-between="20"
          :navigation="true"
          :pagination="{ clickable: true }"
          :modules="modules"
          :breakpoints="{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }"
          class="wishes-swiper"
        >
          <swiper-slide v-for="(wish, index) in wishes" :key="index">
            <WishCard :name="wish.name" :message="wish.message" :date="wish.date" />
          </swiper-slide>
        </swiper>

        <div class="text-center mt-4">
          <AddWishForm @submit="handleAddWish" />
        </div>
      </v-col>
    </v-row>

    <!-- section 6: prayer -->
    <v-row justify="center" class="scroll-section" style="min-height: 100vh">
      <v-col class="text-center" cols="12" md="8">
        <div class="py-14 px-6">
          <img class="w-33 h-auto mx-auto mb-6" src="@/assets/images/bismillah.png" alt="Bismillah" />

          <p class="text-body-2">
            <span class="font-weight-bold">Ya Allah Ya Rahman Ya Rahim,</span>
          </p>

          <p class="text-body-2 mt-4">
            Kami memohon doa restu-Mu berkatilah majlis ini, limpahkanlah
            baraqah dan rahmat kepada
          </p>

          <p class="text-h6 font-weight-bold text-uppercase mt-4">
            Khaizuran Azim Bin Abdullah<br />& Natasha Amiraliana Binti Mohd Razif
          </p>

          <p class="text-body-2 mt-4">
            jadikanlah rumah tangga mereka aman dan bahagia, dalam ketaatan
            terhadap-Mu, kurniakanlah kepada mereka zuriat yang soleh dan
            solehah, serta berikanlah ketenangan kepada mereka di dunia dan
            akhirat, sempurnakan lah agama mereka dengan berkat perkahwinan
            ini.
          </p>

          <p class="text-body-2 font-weight-bold mt-4">
            Aamin Ya Rabbal 'Alamin
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- section 7: closing -->
    <v-row justify="center" class="scroll-section" style="min-height: 100vh">
      <v-col class="text-center" cols="12" md="8">
        <div class="py-14 px-6">
          <p class="text-body-2 mb-4">
            Beras kunyit kami taburi,<br />
            Air mawar direnjis wangi,<br />
            Undangan kami seikhlas hati,<br />
            Harap sudi datang menyeri.
          </p>

          <p class="text-caption font-italic mb-4">
            Dengan Tulus Ikhlas Daripada
          </p>

          <p class="text-h4 font-weight-medium mb-4">
            Khaizuran & Natasha<br />
            Sekeluarga
          </p>

          <v-img
            src="@/assets/images/flower-close-section-1.png"
            alt="flower-close-section"
            max-width="128"
            class="mx-auto"
          />
        </div>
      </v-col>
    </v-row>

    <!-- footer -->
    <v-row justify="center">
      <v-col class="text-center pb-10" cols="12">
        <p class="text-body-2">
          Made with 🤟 by
          <a
            class="text-decoration-underline"
            href="https://www.digicraft.link"
            target="_blank"
          >
            Digicraft
          </a>
        </p>
        <p class="text-caption text-medium-emphasis">
          © 2026 Digicraft. All Rights Reserved.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Countdown from "vue3-countdown";
import AddToCalendar from "@/components/AddToCalendar.vue";
import RsvpForm from "@/components/RsvpForm.vue";
import WishCard from "@/components/WishCard.vue";
import AddWishForm from "@/components/AddWishForm.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

// Swiper modules
const modules = [Navigation, Pagination];

onMounted(() => {
  // const sections = document.querySelectorAll(".scroll-section");
  // sections.forEach((section) => {
  //   ScrollTrigger.create({
  //     trigger: section,
  //     start: "top top",
  //     pin: true,
  //     pinSpacing: true,
  //     scrub: 1,
  //   });
  // });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});

const timeLeft = computed(() => {
  const wedding = new Date("2026-07-05T11:00:00+08:00").getTime();
  return Math.max(0, wedding - Date.now());
});

// Wishes data - now reactive
const wishes = ref([
  {
    name: "Ahmad & Siti",
    message: "Tahniah diucapkan kepada pasangan pengantin. Semoga perkahwinan kalian diberkati dan penuh dengan kebahagiaan. Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair.",
    date: "2026-05-10",
  },
  {
    name: "Keluarga Hashim",
    message: "Selamat pengantin baru! Semoga menjadi keluarga yang sakinah, mawaddah dan warahmah. Doa kami sentiasa bersama kalian. Moga bahagia ke anak cucu!",
    date: "2026-05-12",
  },
  {
    name: "Nurul Aisyah",
    message: "Congratulations! Wishing you both a lifetime of love and happiness. May your journey together be filled with beautiful memories.",
    date: "2026-05-11",
  },
  {
    name: "Pak Cik Karim",
    message: "Alhamdulillah, tahniah anak-anak muda. Semoga Allah memberkati perkahwinan kalian dan kurniakan zuriat yang soleh dan solehah. Amin!",
    date: "2026-05-09",
  },
]);

// Add wish handler
const handleAddWish = (wish: { name: string; message: string; date: string }) => {
  wishes.value.unshift(wish); // Add to beginning of array
};
</script>

<style scoped>
.scroll-section {
  min-height: 100vh;
}

.wishes-swiper {
  padding: 20px 40px 60px;
}

.wishes-swiper :deep(.swiper-button-next),
.wishes-swiper :deep(.swiper-button-prev) {
  color: rgb(var(--v-theme-primary));
}

.wishes-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: rgb(var(--v-theme-primary));
}
</style>
