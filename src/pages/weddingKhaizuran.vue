<template>
  <WeddingCardTemplate :config="config" />
</template>

<script setup lang="ts">
import WeddingCardTemplate from "@/templates/wedding/WeddingCardTemplate.vue";
import type { WeddingConfig } from "@/types";

const config: WeddingConfig = {
  groomName: "Khaizuran",
  brideName: "Natasha",
  groomFullName: "Khaizuran Azim bin Abdullah",
  brideFullName: "Natasha Amiraliana binti Mohd Razif",
  hashtag: "#NatashAmiracleforKhai",

  groomParents: {
    father: "Datuk Abdullah bin Mat",
    mother: "Muhaizati binti Mohamed",
  },
  brideParents: {
    mother: "Amelia binti Ishak",
  },

  date: "2026-07-05",
  dateDisplay: "Ahad, 5 Julai 2026",
  timeDisplay: "11 pagi sehingga 3.30 petang",
  venue: "Urban Park Hall, Alam Impian",
  address: "Jalan Tun Teja 35/4a, 40470 Shah Alam, Selangor",
  startTime: "11:00",
  endTime: "15:30",
  timezone: "Asia/Kuala_Lumpur",

  mapsUrl: "https://maps.app.goo.gl/MdXkuoBAjfyXjowDA",
  wazeUrl:
    "https://ul.waze.com/ul?venue_id=66519070.665321775.37973731&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",

  agenda: [
    { time: "11:00 AM - 3:30 PM", label: "Ketibaan Tetamu dan Jamuan Makan" },
    { time: "12:00 PM", label: "Ketibaan Pengantin" },
  ],

  prayerGroomName: "Khaizuran Azim",
  prayerBrideName: "Natasha Amiraliana",

  theme: "floral",
};
</script>
