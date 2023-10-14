<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content flex flex-col">
      <base-navbar></base-navbar>
      <!-- Page content here -->
      <base-hero></base-hero>
      <base-hero></base-hero>
      <centered-footer></centered-footer>
    </div>
    <base-sidebar></base-sidebar>
  </div>
</template>

<script setup>
import BaseHero from "@/components/BaseHero.vue";
import CenteredFooter from "@/components/CenteredFooter.vue";
import BaseNavbar from "@/components/BaseNavbar.vue";
import BaseSidebar from "@/components/BaseSidebar.vue";
</script>
