<template>
  <div class="drawer-side z-40">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-100/80 backdrop-blur-xl">
      <li>
        <router-link to="/portfolio/projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/portfolio/about">About Me</router-link>
      </li>
      <li>
        <router-link to="/portfolio/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/portfolio/photography">Photography</router-link>
      </li>
      <li>
        <router-link to="/portfolio/more">More</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
</script>
