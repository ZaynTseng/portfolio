<template>
  <div class="flex flex-col gap-3">
    <router-link to="/portfolio/projects/plant-mate"
                 class="flex flex-col items-center justify-between w-full min-h-[50vh] max-h-[80vh] bg-base-200 overflow-hidden">
      <div class="flex flex-col mt-16 mb-4 items-center gap-y-1 md:gap-y-1.5 lg:gap-y-2">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-medium">Plant Mate</h1>
        <p class="text-xl md:text-2xl lg:text-3xl font-light">A digital twin app crafted for novice urban farmers</p>
        <div class="text-md md:text-lg lg:text-xl flex text-blue-500 gap-1">
          <p class="link link-hover">Read</p>
          <p>→</p>
        </div>
      </div>
      <base-spinner v-if="isLoading"></base-spinner>
      <img class="w-11/12" src="../assets/projects/plant-mate/plant-mate-cover-2.png"
           alt="Plant Mate" @load="resourceLoaded"/>
    </router-link>

    <router-link to="/portfolio/projects/recipe-scale"
                 class="flex items-center justify-between w-full min-h-[50vh] max-h-[80vh] bg-[#EAE3DC] overflow-hidden">
      <div class="flex flex-col ml-16 mr-8 gap-y-1 md:gap-y-1.5 lg:gap-y-2">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-medium">RecipeScale</h1>
        <p class="text-xl md:text-2xl lg:text-3xl font-light">Store, share, and learn <br>recipes with ease</p>
        <div class="text-md md:text-lg lg:text-xl flex text-blue-500 gap-1">
          <p class="link link-hover">Read</p>
          <p>→</p>
        </div>
      </div>
      <base-spinner v-if="isLoading"></base-spinner>
      <img class="w-1/2" src="../assets/projects/recipe-scale/recipe-scale-cover-2.png"
           alt="RecipeScale" @load="resourceLoaded"/>
    </router-link>

    <router-link to="/portfolio/projects/stereo-disparity"
                 class="flex flex-col items-center justify-between w-full min-h-[50vh] max-h-[80vh] bg-base-200 overflow-hidden">
      <div class="flex flex-col mt-16 mb-4 items-center gap-y-1 md:gap-y-1.5 lg:gap-y-2">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-medium">Stereo Disparity</h1>
        <p class="text-xl md:text-2xl lg:text-3xl font-light">Stereo disparity algorithm experiments and evaluation</p>
        <div class="text-md md:text-lg lg:text-xl flex text-blue-500 gap-1">
          <p class="link link-hover">Read</p>
          <p>→</p>
        </div>
      </div>
      <base-spinner v-if="isLoading"></base-spinner>
      <img class="w-5/6 drop-shadow-2xl" src="../assets/projects/stereo-disparity/stereo-disparity-cover-2.png"
           alt="Stereo Disparity" @load="resourceLoaded"/>
    </router-link>

  </div>
</template>

<script setup>
import {ref} from "vue";

let isLoading = ref(true);

function resourceLoaded() {
  isLoading.value = false;
}
</script>
