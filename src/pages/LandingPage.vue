<template>
  <div class="flex flex-col items-center">
    <div
      class="flex flex-col justify-center min-h-[80vh] w-[80vw] py-20
      text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
      <p>Zhi Zeng</p>
      <p>Frontend Developer</p>
      <p>Melbourne, AU</p>
    </div>
    <div
      class="flex flex-col justify-center min-h-[80vh] w-[80vw] pt-20 pb-40
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl
      gap-4 sm:gap-5 md:gap-6 lg:gap-7">
      <p>Hi, I am Zhi Zeng, a frontend developer currently living in&nbsp;Melbourne.</p>
      <p>Graduated from the University of Melbourne in 2022, I acquired great exposure and exercise in
        UI/UX, software development, machine learning, and product&nbsp;design.</p>
      <p>Embarking on the journey of frontend development, I am eager to apply my knowledge and skills to
        create impactful&nbsp;works.</p>
      <div class="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex text-blue-500 gap-1">
        <router-link to="/portfolio/projects" class="link link-hover">My Projects</router-link>
        <p>→</p>
      </div>
    </div>
  </div>
</template>
