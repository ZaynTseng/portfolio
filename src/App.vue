<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" v-model="isDrawerOpen"/>
    <div class="drawer-content flex flex-col">
      <base-navbar></base-navbar>
      <router-view></router-view>
      <base-footer></base-footer>
    </div>
    <base-sidebar @itemClicked="isDrawerOpen = !isDrawerOpen"></base-sidebar>
  </div>
</template>

<script setup>
import {ref} from "vue";

const isDrawerOpen = ref(false);
</script>
