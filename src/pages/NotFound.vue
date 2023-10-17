<template>
  <div>
    <base-hero>
      <h1 class="text-5xl font-bold">{{ title }}</h1>
      <p class="py-6">{{ content }}</p>
      <button class="btn btn-primary" @click="backToLandingPage">Back</button>
    </base-hero>
  </div>
</template>

<script setup>
import BaseHero from "@/components/BaseHero.vue";

import {useRouter} from "vue-router";

const router = useRouter();

const title = "Sorry, this page doesn't exist";
const content = "Go back to the main page.";

function backToLandingPage() {
  router.replace("/portfolio/");
}
</script>
