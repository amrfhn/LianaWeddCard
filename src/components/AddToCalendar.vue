<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn v-bind="props" prepend-icon="mdi-calendar-plus" color="primary">
        Add to Calendar
      </v-btn>
    </template>
    <v-list density="compact">
      <v-list-item :href="googleUrl" target="_blank" prepend-icon="mdi-google">
        <v-list-item-title>Google Calendar</v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-apple" @click="downloadIcs">
        <v-list-item-title>Apple Calendar</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name: string;
  description?: string;
  location?: string;
  startDate: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD
  startTime?: string; // HH:mm
  endTime?: string; // HH:mm
  timeZone?: string;
}

const props = withDefaults(defineProps<Props>(), {
  description: "",
  location: "",
  endDate: "",
  startTime: "",
  endTime: "",
  timeZone: "Asia/Kuala_Lumpur",
});

const formatDateTime = (date: string, time: string) => {
  const d = date.replace(/-/g, "");
  const t = time ? time.replace(/:/g, "") + "00" : "";
  return t ? `${d}T${t}` : d;
};

const startDT = computed(() => formatDateTime(props.startDate, props.startTime));
const endDT = computed(() =>
  formatDateTime(props.endDate || props.startDate, props.endTime || props.startTime),
);

const googleUrl = computed(() => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: props.name,
    dates: `${startDT.value}/${endDT.value}`,
    details: props.description,
    location: props.location,
    ctz: props.timeZone,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
});

const generateIcs = () => {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Card//EN",
    "BEGIN:VEVENT",
    `DTSTART;TZID=${props.timeZone}:${startDT.value}`,
    `DTEND;TZID=${props.timeZone}:${endDT.value}`,
    `SUMMARY:${props.name}`,
    `DESCRIPTION:${props.description}`,
    `LOCATION:${props.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
};

const downloadIcs = () => {
  const blob = new Blob([generateIcs()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${props.name.replace(/\s+/g, "_")}.ics`;
  a.click();
  URL.revokeObjectURL(url);
};
</script>
