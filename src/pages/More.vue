<template>
  <div>
    <base-hero>
      <h1 class="text-5xl font-bold">{{ title }}</h1>
      <p class="py-6">{{ content }}</p>
    </base-hero>
  </div>
</template>

<script setup>
import BaseHero from "@/components/BaseHero.vue";

const title = "More";
const content = "[Work in Progress]";
</script>
