<template>
  <div class="flex flex-col gap-3">
    <router-link
      to="/portfolio/projects/kokos-posters"
      class="flex flex-col items-center justify-between w-full min-h-[50vh] max-h-[80vh] bg-base-200 overflow-hidden"
    >
      <div
        class="flex flex-col mt-16 mb-8 items-center gap-y-1 md:gap-y-1.5 lg:gap-y-2"
      >
        <h1 class="text-4xl font-medium md:text-5xl lg:text-6xl">
          Posters made at KOKOS
        </h1>
        <p class="text-xl font-light text-center md:text-2xl lg:text-3xl">
          A collection of creative posters designed for KOKOS
        </p>
        <div class="flex gap-1 text-blue-500 text-md md:text-lg lg:text-xl">
          <p class="link link-hover">Read</p>
          <p>→</p>
        </div>
      </div>
      <base-spinner v-if="isLoading"></base-spinner>
      <img
        class="w-5/6"
        src="../assets/projects/kokos/cover-1.png"
        alt="Posters made at KOKOS"
        @load="resourceLoaded"
      />
    </router-link>

    <router-link
      to="/portfolio/projects/plant-mate"
      class="flex flex-col items-center justify-between w-full min-h-[50vh] max-h-[80vh] bg-base-200 overflow-hidden"
    >
      <div
        class="flex flex-col mt-16 mb-4 items-center gap-y-1 md:gap-y-1.5 lg:gap-y-2"
      >
        <h1 class="text-4xl font-medium md:text-5xl lg:text-6xl">Plant Mate</h1>
        <p class="text-xl font-light text-center md:text-2xl lg:text-3xl">
          A digital twin app crafted for novice urban&nbsp;farmers
        </p>
        <div class="flex gap-1 text-blue-500 text-md md:text-lg lg:text-xl">
          <p class="link link-hover">Read</p>
          <p>→</p>
        </div>
      </div>
      <base-spinner v-if="isLoading"></base-spinner>
      <img
        class="w-11/12"
        src="../assets/projects/plant-mate/plant-mate-cover-2.png"
        alt="Plant Mate"
        @load="resourceLoaded"
      />
    </router-link>

    <router-link
      to="/portfolio/projects/recipe-scale"
      class="flex items-center justify-between w-full min-h-[50vh] max-h-[80vh] bg-base-200 overflow-hidden"
    >
      <div
        class="flex flex-col ml-8 md:ml-20 lg:ml-28 mr-8 gap-y-1 md:gap-y-1.5 lg:gap-y-2"
      >
        <h1 class="text-4xl font-medium md:text-5xl lg:text-6xl">
          RecipeScale
        </h1>
        <p class="text-xl font-light md:text-2xl lg:text-3xl">
          Store, share, and learn recipes with&nbsp;ease
        </p>
        <div class="flex gap-1 text-blue-500 text-md md:text-lg lg:text-xl">
          <p class="link link-hover">Read</p>
          <p>→</p>
        </div>
      </div>
      <base-spinner v-if="isLoading"></base-spinner>
      <img
        class="w-1/2"
        src="../assets/projects/recipe-scale/recipe-scale-cover-2.png"
        alt="RecipeScale"
        @load="resourceLoaded"
      />
    </router-link>

    <router-link
      to="/portfolio/projects/stereo-disparity"
      class="flex flex-col items-center justify-between w-full min-h-[50vh] max-h-[80vh] bg-base-200 overflow-hidden"
    >
      <div
        class="flex flex-col mt-16 mb-8 items-center gap-y-1 md:gap-y-1.5 lg:gap-y-2"
      >
        <h1 class="text-4xl font-medium md:text-5xl lg:text-6xl">
          Stereo Disparity
        </h1>
        <p class="text-xl font-light text-center md:text-2xl lg:text-3xl">
          Stereo disparity algorithm experiments and&nbsp;evaluation
        </p>
        <div class="flex gap-1 text-blue-500 text-md md:text-lg lg:text-xl">
          <p class="link link-hover">Read</p>
          <p>→</p>
        </div>
      </div>
      <base-spinner v-if="isLoading"></base-spinner>
      <img
        class="w-5/6"
        src="../assets/projects/stereo-disparity/stereo-disparity-cover-2.png"
        alt="Stereo Disparity"
        @load="resourceLoaded"
      />
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";

let isLoading = ref(true);

function resourceLoaded() {
  isLoading.value = false;
}
</script>
