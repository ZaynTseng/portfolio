<template>
  <div
    class="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 [transform:translate3d(0,0,0)]">
    <div class="w-full navbar mx-auto max-w-5xl">
      <div class="flex-none sm:hidden">
        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <div class="flex-1 px-2 mx-2">
        <a class="btn btn-ghost normal-case text-xl">Zhi Zeng</a>
      </div>
      <div class="flex-none hidden sm:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Projects</a></li>
          <li><a>About Me</a></li>
          <li><a>Contact</a></li>
          <li><a>Photography</a></li>
          <li><a>More</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
