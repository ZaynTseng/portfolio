<template>
  <div class="bg-neutral text-neutral-content">
    <footer class="max-w-5xl p-10 mx-auto footer">
      <nav>
        <router-link to="/portfolio/" class="link link-hover">Home</router-link>
        <router-link to="/portfolio/projects" class="link link-hover"
          >Projects</router-link
        >
        <router-link to="/portfolio/about" class="link link-hover"
          >About Me</router-link
        >
      </nav>
      <nav>
        <router-link to="/portfolio/contact" class="link link-hover"
          >Contact</router-link
        >
        <router-link to="/portfolio/photography" class="link link-hover"
          >Photography</router-link
        >
        <router-link to="/portfolio/more" class="link link-hover"
          >More</router-link
        >
      </nav>
      <nav>
        <div class="flex gap-1">
          <a
            class="link link-hover"
            href="https://twitter.com/ZaynTseng"
            target="_blank"
            >Twitter</a
          >
          <p>↗</p>
        </div>
        <div class="flex gap-1">
          <a
            class="link link-hover"
            href="https://github.com/ZaynTseng"
            target="_blank"
            >Github</a
          >
          <p>↗</p>
        </div>
        <div class="flex gap-1">
          <a
            class="link link-hover"
            href="https://www.linkedin.com/in/zhizeng/"
            target="_blank"
            >Linkedin</a
          >
          <p>↗</p>
        </div>
      </nav>
    </footer>
    <footer
      class="max-w-5xl px-10 py-4 mx-auto border-t border-gray-800 footer"
    >
      <aside>
        <p>© 2025 Ray Zeng. All Rights Reserved.</p>
      </aside>
    </footer>
  </div>
</template>
<script setup></script>
