<template>
  <base-hero v-if="isLoading">
    <base-spinner></base-spinner>
  </base-hero>
  <base-hero class="animate__animated animate__fadeIn">
    <div class="grid max-w-3xl gap-2">
      <figure>
        <img
          src="../../assets/projects/kokos/cover-2.png"
          alt="Posters made at KOKOS"
          class="border border-base-content bg-base-300 rounded-box border-opacity-5"
          @load="resourceLoaded"
        />
      </figure>
      <h1 class="pt-4 text-5xl font-bold">KOKOS Posters</h1>
      <p class="text-2xl">
        A collection of creative posters designed for KOKOS
      </p>
      <div class="flex flex-wrap gap-2 pb-6">
        <span class="badge badge-secondary badge-info">Graphic Design</span>
        <span class="badge badge-accent">Poster</span>
        <span class="badge badge-ghost">2024</span>
      </div>
      <h2 class="pt-4 text-3xl font-bold">Project Overview</h2>
      <p>
        During my time at KOKOS, I was responsible for designing a series of
        posters for various events, university partnerships, and marketing
        campaigns. Each poster was crafted to communicate key messages visually
        and engage the target audience effectively. The following is a selection
        of my works, covering topics from study abroad to campus events.
      </p>
      <div class="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2">
        <img
          v-for="(src, idx) in posterList"
          :key="src"
          :src="src"
          :alt="posterAlts[idx]"
          :class="[
            'cursor-zoom-in transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
            !isTouchDevice && !(showFull && hiddenIndex === idx)
              ? 'hover:scale-105'
              : '',
          ]"
          @click="(e) => openFull(idx, e)"
        />
      </div>
      <transition name="fade-zoom">
        <div
          v-if="showFull"
          class="fixed left-0 right-0 bottom-0 z-[99999] flex items-center justify-center bg-black bg-opacity-90"
          :style="`top: 4rem; height: calc(100vh - 4rem);`"
          @click.self="closeFull"
        >
          <img
            :src="posterList[fullIndex]"
            :alt="posterAlts[fullIndex]"
            class="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            :class="showFull ? 'scale-100' : 'scale-95'"
          />
          <button
            @click="closeFull"
            class="absolute top-4 right-4 flex items-center justify-center text-white text-3xl bg-black bg-opacity-40 rounded-full w-12 h-12 hover:bg-opacity-70 focus:outline-none z-[100000]"
            style="position: absolute; top: 1rem; right: 1rem"
            aria-label="Close"
          >
            <svg
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </transition>
    </div>
  </base-hero>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import BaseHero from "@/components/BaseHero.vue";
import BaseSpinner from "@/components/BaseSpinner.vue";

let isLoading = ref(true);

function resourceLoaded() {
  isLoading.value = false;
}

const posterList = [
  new URL("../../assets/projects/kokos/10.14-why-aus.png", import.meta.url)
    .href,
  new URL("../../assets/projects/kokos/10.15-anu.png", import.meta.url).href,
  new URL(
    "../../assets/projects/kokos/10.16-usyd-jacaranda.png",
    import.meta.url
  ).href,
  new URL(
    "../../assets/projects/kokos/10.17-events-in-melb.png",
    import.meta.url
  ).href,
  new URL("../../assets/projects/kokos/10.2-whv.png", import.meta.url).href,
  new URL(
    "../../assets/projects/kokos/10.25-study-in-au-series.png",
    import.meta.url
  ).href,
  new URL(
    "../../assets/projects/kokos/10.3-unimelb-master-of-data-science.png",
    import.meta.url
  ).href,
  new URL(
    "../../assets/projects/kokos/10.4-canberra-nursing.png",
    import.meta.url
  ).href,
  new URL("../../assets/projects/kokos/10.7-service-intro.png", import.meta.url)
    .href,
  new URL("../../assets/projects/kokos/11.06-vu.png", import.meta.url).href,
  new URL("../../assets/projects/kokos/8.28-rmit-tour.png", import.meta.url)
    .href,
  new URL(
    "../../assets/projects/kokos/9.18-free-application.png",
    import.meta.url
  ).href,
];
const posterAlts = [
  "Why Australia?",
  "ANU Collaboration",
  "USYD Jacaranda",
  "Events in Melbourne",
  "WHV Poster",
  "Study in Australia Series",
  "Unimelb Master of Data Science",
  "Canberra Nursing",
  "Service Introduction",
  "Victoria University",
  "RMIT Tour",
  "Free Application",
];

const showFull = ref(false);
const fullIndex = ref(0);
const hiddenIndex = ref(-1);

const isTouchDevice =
  typeof window !== "undefined" &&
  ("ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0);

function openFull(idx, e) {
  if (isTouchDevice) {
    e.preventDefault();
  }
  fullIndex.value = idx;
  showFull.value = true;
  document.body.style.overflow = "hidden";
}
function closeFull() {
  showFull.value = false;
  document.body.style.overflow = "";
}

function handleEsc(e) {
  if (e.key === "Escape" && showFull.value) {
    closeFull();
  }
}
onMounted(() => {
  window.addEventListener("keydown", handleEsc);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleEsc);
});
</script>

<style scoped>
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-zoom-enter-from,
.fade-zoom-leave-to {
  opacity: 0;
}
.fade-zoom-enter-from img,
.fade-zoom-leave-to img {
  transform: scale(0.95);
}
.fade-zoom-enter-to img,
.fade-zoom-leave-from img {
  transform: scale(1);
}
</style>
