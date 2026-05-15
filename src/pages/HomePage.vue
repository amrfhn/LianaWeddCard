<template>
  <v-container fluid class="pa-0">
    <!-- section 1: main -->
    <v-row justify="center" align-content="space-around" class="scroll-section">
      <v-col class="text-center pt-10" cols="12" md="8">
        <p class="pb-10 text-body-1 georgia-label">Walimatulurus</p>
        <h2 class="text-h3 georgia-heading">Khaizuran</h2>
        <h2 class="text-h2 font-malibu font-weight-bold">&</h2>
        <h2 class="text-h3 georgia-heading">Natasha</h2>

        <p class="text-body-1 pt-14 georgia-info">Ahad, 5 Julai 2026</p>
        <p class="text-body-1 georgia-info">Urban Park Hall, Alam Impian</p>
        <p class="text-h5 pt-12 font-brittany">#NatashAmiracleforKhai</p>
      </v-col>
    </v-row>

    <!-- section 2: welcoming  -->
    <v-row justify="center" class="scroll-section">
      <v-col class="text-center">
        <p class="text-body-2 font-weight-bold font-georgia font-italic">
          Assalamualaikum dan Salam Sejahtera
        </p>
        <p class="mb-3 text-body-2 font-georgia font-italic">
          dengan rasa penuh kesyukuran kehadrat Ilahi
        </p>

        <h3 class="text-h7 font-weight-bold font-georgia text-uppercase">Datuk Abdullah bin Mat</h3>
        <h3 class="text-h4 font-malibu">&</h3>
        <h3 class="text-h7 font-weight-bold font-georgia text-uppercase">
          Muhaizati binti Mohamed
        </h3>
        <p class="text-body-2 mt-1 font-italic font-georgia">(Ibu Bapa Pengantin Lelaki)</p>

        <p class="font-italic my-2 font-georgia text-body-2">bersama</p>

        <h3 class="text-h7 font-weight-bold font-georgia text-uppercase">Amelia binti Ishak</h3>
        <p class="text-body-2 mt-1 mb-4 font-italic font-georgia">(Ibu Pengantin Perempuan)</p>

        <p class="text-body-2 font-georgia font-italic">
          dengan segala hormatnya menjemput<br />Yang Berbahagia
          Dato’/Datuk/Datin/Tuan/Puan/Encik/Cik
        </p>
        <!-- <v-divider class="mt-10 mb-4 mx-auto" style="border-style: dotted; width: 70%" /> -->
        <p class="mb-4 text-body-2 font-georgia font-italic">
          ke walimatulurus putera dan puteri kami.
        </p>

        <h3 class="text-h6 font-weight-bold text-uppercase mt-6 font-georgia">
          Khaizuran azim bin abdullah
        </h3>
        <h3 class="text-h2 font-malibu">&</h3>
        <h3 class="text-h6 font-weight-bold text-uppercase mb-6 font-georgia">
          natasha amiraliana binti mohd razif
        </h3>

        <p class="mb-4 text-body-2 font-georgia font-italic">
          Pada <span class="">Ahad, 5 Julai 2026</span><br />
          Jam <span class="">11 pagi sehingga 3.30 petang</span><br />
          Bertempat di <span class="">Urban Park Hall, Alam Impian</span>
        </p>
      </v-col>
    </v-row>

    <!-- section 3: details -->
    <v-row justify="center">
      <v-col class="text-center">
        <div class="py-6">
          <h4 class="text-body-1 font-weight-bold mb-2 text-uppercase font-georgia">
            Aturcara Majlis
          </h4>
          <p class="text-body-2 mb-4 text-uppercase font-georgia font-italic">
            11:00 AM - 3:30 PM <br /><span class="text-body-1 font-georgia text-uppercase"
              >Ketibaan Tetamu dan Jamuan Makan</span
            >
          </p>
          <p class="text-body-2">
            12:00 PM <br /><span class="text-body-1 font-georgia text-uppercase font-italic"
              >Ketibaan Pengantin</span
            >
          </p>
        </div>

        <div id="location" class="py-6">
          <h4 class="text-body-1 font-weight-bold mb-2 text-uppercase font-georgia">
            Lokasi Majlis
          </h4>
          <p class="text-body-1 text-uppercase font-georgia font-italic">
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
      </v-col>
    </v-row>

    <!-- section 4: countdown -->
    <v-row id="rsvp" justify="center" class="countdown-section mx-n4">
      <v-col class="text-center" cols="12">
        <div>
          <h4 class="text-body-1 font-weight-bold text-uppercase font-georgia">
            Save the Date!
          </h4>
          <p class="text-h4 py-5 font-brittany">#NatashAmiracleforKhai</p>
          <countdown :time="timeLeft" format="DD:HH:mm:ss" class="pb-5">
            <template #="{ resolved }">
              <div class="d-flex ga-6 justify-center">
                <div class="text-center">
                  <div class="text-h5 font-weight-bold font-georgia">{{ resolved.DD }}</div>
                  <div class="text-body-2 font-georgia font-italic">Hari</div>
                </div>
                <div class="text-center">
                  <div class="text-h5 font-weight-bold font-georgia">{{ resolved.HH }}</div>
                  <div class="text-body-2 font-georgia font-italic">Jam</div>
                </div>
                <div class="text-center">
                  <div class="text-h5 font-weight-bold font-georgia">{{ resolved.mm }}</div>
                  <div class="text-body-2 font-georgia font-italic">Minit</div>
                </div>
                <div class="text-center">
                  <div class="text-h5 font-weight-bold font-georgia">{{ resolved.ss }}</div>
                  <div class="text-body-2 font-georgia font-italic">Saat</div>
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
      </v-col>
    </v-row>

    <!-- section 5: RSVP -->
    <v-row justify="center" class="scroll-section">
      <v-col class="text-center" cols="12" md="8">
        <SectionSubTitle title="RSVP" />
        <p class="text-body-2 mb-6 font-georgia font-italic">Sila sahkan kehadiran anda</p>
        <RsvpForm />
      </v-col>
    </v-row>

    <!-- section 6: wishes -->
    <v-row id="wishes" justify="center" class="scroll-section">
      <v-col class="text-center" cols="12" md="8">
        <SectionSubTitle title="Guestbook" />
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

    <!-- section 7: prayer -->
    <v-row justify="center" class="scroll-section">
      <v-col class="text-center" cols="12" md="8">
        <div class="py-14 px-6">
          <img
            class="h-auto mx-auto mb-2"
            style="width: 180px"
            src="@/assets/images/bismillah.png"
            alt="Bismillah"
          />

          <p class="text-body-1 font-georgia font-weight-bold">Ya Allah Ya Rahman Ya Rahim,</p>

          <p class="text-body-2 mt-4 font-georgia font-italic">
            Kami memohon doa restu-Mu berkatilah majlis ini, limpahkanlah baraqah dan rahmat kepada
          </p>

          <p class="text-h6 font-weight-bold text-uppercase mt-4 font-georgia">
            Khaizuran Azim<br /><span class="font-malibu text-h4 font-weight-bold">&</span
            ><br />Natasha Amiraliana
          </p>

          <p class="text-body-2 mt-4 font-georgia font-italic">
            jadikanlah rumah tangga mereka aman dan bahagia, dalam ketaatan terhadap-Mu,
            kurniakanlah kepada mereka zuriat yang soleh dan solehah, serta berikanlah ketenangan
            kepada mereka di dunia dan akhirat, sempurnakan lah agama mereka dengan berkat
            perkahwinan ini.
          </p>

          <p class="text-body-1 font-georgia font-weight-bold mt-4">Aamin Ya Rabbal 'Alamin</p>
        </div>
      </v-col>
    </v-row>

    <!-- section 8: closing -->
    <v-row justify="center" class="scroll-section">
      <v-col class="text-center" cols="12" md="8">
        <div class="py-14 px-6">
          <p class="text-body-2 mb-4 font-georgia font-italic">
            Beras kunyit kami taburi,<br />
            Air mawar direnjis wangi,<br />
            Undangan kami seikhlas hati,<br />
            Harap sudi datang menyeri.
          </p>

          <p class="text-caption font-georgia font-italic mb-4">- Dengan Tulus Ikhlas -</p>

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
      <v-col class="text-center pb-2 opacity-50" cols="12">
        <p class="text-caption text-medium-emphasis">
          Made with 🤟 by
          <a class="text-decoration-underline" href="https://www.digicraft.link" target="_blank">
            Digicraft
          </a>
        </p>
        <p class="text-caption text-medium-emphasis">© 2026 Digicraft. All Rights Reserved.</p>
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
import SectionSubTitle from "@/components/SectionSubTitle.vue";
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
    message:
      "Tahniah diucapkan kepada pasangan pengantin. Semoga perkahwinan kalian diberkati dan penuh dengan kebahagiaan. Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair.",
    date: "2026-05-10",
  },
  {
    name: "Keluarga Hashim",
    message:
      "Selamat pengantin baru! Semoga menjadi keluarga yang sakinah, mawaddah dan warahmah. Doa kami sentiasa bersama kalian. Moga bahagia ke anak cucu!",
    date: "2026-05-12",
  },
  {
    name: "Nurul Aisyah",
    message:
      "Congratulations! Wishing you both a lifetime of love and happiness. May your journey together be filled with beautiful memories.",
    date: "2026-05-11",
  },
  {
    name: "Pak Cik Karim",
    message:
      "Alhamdulillah, tahniah anak-anak muda. Semoga Allah memberkati perkahwinan kalian dan kurniakan zuriat yang soleh dan solehah. Amin!",
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

.countdown-section {
  padding:40px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow:
    0 -4px 16px rgba(0, 0, 0, 0.06),
    0 4px 16px rgba(0, 0, 0, 0.06);
}
</style>
