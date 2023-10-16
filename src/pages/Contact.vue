<template>
  <div>
    <base-hero :title="title" :content="content"></base-hero>
  </div>
</template>

<script setup>
import BaseHero from "@/components/BaseHero.vue";

import {ref} from "vue";

const title = "Contact";
const content = "Welcome to my contact page!";
</script>
