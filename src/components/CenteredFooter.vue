<template>
  <div class="bg-neutral text-neutral-content">
    <footer class="footer p-10 mx-auto max-w-5xl">
      <nav>
        <header class="footer-title">Zhi Zeng</header>
        <a class="link link-hover">Projects</a>
        <a class="link link-hover">About Me</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Photography</a>
        <a class="link link-hover">More</a>
      </nav>
    </footer>
    <footer
      class="footer px-10 py-4 border-t border-gray-800 mx-auto max-w-5xl flex flex-col sm:flex-row sm:justify-between">
      <base-social class="sm:order-last"></base-social>
      <aside class="sm:order-first">
        <p>© 2023 Zhi Zeng. All Rights Reserved.</p>
      </aside>
    </footer>
  </div>
</template>

<script setup>
import BaseSocial from "@/components/BaseSocial.vue";
</script>
