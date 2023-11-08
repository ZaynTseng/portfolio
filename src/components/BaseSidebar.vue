<template>
  <div class="drawer-side z-40">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-100/80 backdrop-blur-xl">
      <li>
        <p @click="itemClicked">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </p>
      </li>
      <li></li>
      <li>
        <router-link to="/portfolio/" @click="itemClicked">Home</router-link>
      </li>
      <li>
        <router-link to="/portfolio/projects" @click="itemClicked">Projects</router-link>
      </li>
      <li>
        <router-link to="/portfolio/about" @click="itemClicked">About Me</router-link>
      </li>
      <li>
        <router-link to="/portfolio/contact" @click="itemClicked">Contact</router-link>
      </li>
      <li>
        <router-link to="/portfolio/photography" @click="itemClicked">Photography</router-link>
      </li>
      <li>
        <router-link to="/portfolio/more" @click="itemClicked">More</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const emit = defineEmits(["itemClicked"]);

function itemClicked() {
  emit("itemClicked");
}
</script>
