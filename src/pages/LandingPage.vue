<template>
  <div class="flex flex-col items-center">
    <div
      class="flex flex-col justify-center min-h-[80vh] w-[80vw] py-20
      text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
      <p>Zhi Zeng</p>
      <p :class="['animate__animated', 'animate__fast', animateClass]">{{ currentRole }}</p>
      <p>Melbourne, AU</p>
    </div>
    <div
      class="flex flex-col justify-start min-h-[80vh] w-[80vw] pt-20 pb-40
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl
      gap-4 sm:gap-5 md:gap-6 lg:gap-7">
      <p>Hi, I am Zhi, a software developer currently living in&nbsp;Melbourne.</p>
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

<script>
import { ref, computed, onMounted } from "vue";

export default {
  setup() {
    const roles = ref([
      "Frontend Developer",
      "Software Engineer",
      "Machine Learning Specialist",
      "Business Analyst",
      "UI/UX Designer"]);
    const currentRoleIndex = ref(0);
    const animateClass = ref("animate__fadeIn");

    const currentRole = computed(() => roles.value[currentRoleIndex.value]);

    const switchRole = () => {
      animateClass.value = "animate__fadeOut";
      setTimeout(() => {
        currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.value.length;
        animateClass.value = "animate__fadeIn";
      }, 500);
    };

    onMounted(() => {
      setInterval(switchRole, 3500);
    });

    return {
      currentRole,
      animateClass,
    };
  }
};
</script>
