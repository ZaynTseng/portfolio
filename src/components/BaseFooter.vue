<template>
  <div class="bg-neutral text-neutral-content">
    <footer class="footer p-10 mx-auto max-w-5xl">
      <nav>
        <router-link to="/portfolio/" class="link link-hover">Home</router-link>
        <router-link to="/portfolio/projects" class="link link-hover">Projects</router-link>
        <router-link to="/portfolio/about" class="link link-hover">About Me</router-link>
      </nav>
      <nav>
        <router-link to="/portfolio/contact" class="link link-hover">Contact</router-link>
        <router-link to="/portfolio/photography" class="link link-hover">Photography</router-link>
        <router-link to="/portfolio/more" class="link link-hover">More</router-link>
      </nav>
      <nav>
        <a class="link link-hover" href="https://twitter.com/ZaynTseng">Twitter ↗</a>
        <a class="link link-hover" href="https://github.com/ZaynTseng">Github ↗</a>
        <a class="link link-hover" href="https://www.linkedin.com/in/zhizeng/">Linkedin ↗</a>
      </nav>
    </footer>
    <footer class="footer px-10 py-4 border-t border-gray-800 mx-auto max-w-5xl">
      <aside>
        <p>© 2023 Zhi Zeng. All Rights Reserved.</p>
      </aside>
    </footer>
  </div>
</template>
