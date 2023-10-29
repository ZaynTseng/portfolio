<template>
  <div>
    <base-hero>
      <h1 class="text-5xl font-bold">{{ title }}</h1>
      <div class="py-6">
        <button class="btn btn-neutral" @click="backToLandingPage">Back to Home</button>
      </div>
    </base-hero>
  </div>
</template>

<script setup>
import BaseHero from "@/components/BaseHero.vue";

import {useRouter} from "vue-router";

const router = useRouter();

const title = "Sorry, this page doesn't exist";

function backToLandingPage() {
  router.replace("/portfolio/");
}
</script>
