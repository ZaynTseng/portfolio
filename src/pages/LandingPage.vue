<template>
  <div class="flex flex-col items-center">
    <div
      class="flex flex-col justify-center min-h-[70vh] w-[80vw] py-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
    >
      <p>Ray Zeng</p>
      <p :class="['animate__animated', 'animate__fast', animateClass]">
        {{ currentRole }}
      </p>
      <p>Melbourne, AU</p>
    </div>
    <div
      class="flex flex-col justify-start min-h-[80vh] w-[80vw] pt-20 pb-40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl gap-4 sm:gap-5 md:gap-6 lg:gap-7"
    >
      <p>
        Hi, I am Ray, a Melbourne-based professional with dual Master’s degrees
        in IT and Marketing, offering a unique blend of technical proficiency
        and proven digital marketing success.
      </p>
      <p>
        Adept at translating complex data into actionable insights and
        proficient in end-to-end campaign execution, from market research and
        content creation to performance optimisation.
      </p>
      <p>
        I am eager to contribute my analytical and creative skills to a
        marketing role focused on growth and data-driven strategy.
      </p>
      <div
        class="flex gap-1 text-xl text-blue-500 sm:text-2xl md:text-3xl lg:text-4xl"
      >
        <router-link to="/portfolio/projects" class="link link-hover"
          >My Projects</router-link
        >
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
      "Digital Marketing Specialist",
      "Marketer",
      "Business Analyst",
      "Data Analyst",
      "UI/UX Designer",
      "Frontend Developer",
      "Software Engineer",
      "Machine Learning Specialist",
    ]);
    const currentRoleIndex = ref(0);
    const animateClass = ref("animate__fadeIn");

    const currentRole = computed(() => roles.value[currentRoleIndex.value]);

    const switchRole = () => {
      animateClass.value = "animate__fadeOut";
      setTimeout(() => {
        currentRoleIndex.value =
          (currentRoleIndex.value + 1) % roles.value.length;
        animateClass.value = "animate__fadeIn";
      }, 500);
    };

    onMounted(() => {
      setInterval(switchRole, 3000);
    });

    return {
      currentRole,
      animateClass,
    };
  },
};
</script>
