<template>
  <div
    class="bg-base-100/70 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center backdrop-blur-xl transition-all duration-100 [transform:translate3d(0,0,0)]"
  >
    <div class="w-full max-w-5xl mx-auto navbar">
      <div class="flex-none md:hidden">
        <label
          for="my-drawer-3"
          aria-label="open sidebar"
          class="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div class="flex-1 px-2 mx-2">
        <router-link class="text-xl normal-case btn btn-ghost" to="/portfolio/"
          >Ray Zeng</router-link
        >
      </div>
      <div class="flex-none hidden md:block">
        <ul class="menu menu-horizontal">
          <li v-for="(item, key) in menuItems" :key="key">
            <router-link
              :to="{ path: item.path }"
              :class="{ '': currentRoute === item.path }"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentRoute = computed(() => route.path);

const menuItems = [
  { name: "Projects", path: "/portfolio/projects" },
  { name: "About Me", path: "/portfolio/about" },
  { name: "Contact", path: "/portfolio/contact" },
  { name: "Photography", path: "/portfolio/photography" },
  { name: "More", path: "/portfolio/more" },
];
</script>
