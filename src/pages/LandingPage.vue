<template>
  <main class="px-4 py-16 sm:px-6 lg:px-8 sm:py-32">
    <div class="mx-auto max-w-7xl">
      <div class="mb-16 sm:mb-24">
        <div class="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          <h1>
            Ray Zeng
            <transition name="role-fade-up" mode="out-in">
              <span
                class="block cursor-pointer"
                :key="currentRole"
                @mouseenter="pauseSwitch"
                @mouseleave="resumeSwitch"
                @click="switchRole"
                title="Click to switch role"
              >
                {{ currentRole }}
              </span>
            </transition>
          </h1>
          <h2 class="font-light text-gray-400">Melbourne, AU</h2>
        </div>
      </div>
      <div class="text-3xl max-w-7xl sm:text-4xl md:text-5xl lg:text-6xl">
        <p class="mb-6 leading-tight">
          Hi, I’m Ray, a Melbourne-based professional with dual Master’s degrees
          in IT and Marketing, offering a unique blend of technical proficiency
          and proven digital marketing success.
        </p>
        <p class="mb-8 leading-tight">
          I’m adept at translating complex data into actionable insights and
          proficient in end-to-end campaign execution, from market research and
          content creation to performance optimisation.
        </p>
        <div
          class="flex items-center gap-1 text-2xl text-blue-500 sm:text-3xl md:text-4xl lg:text-5xl"
        >
          <router-link to="/portfolio/projects" class="link link-hover"
            >My Projects</router-link
          >
          <span>→</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";

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
    const currentRole = computed(() => roles.value[currentRoleIndex.value]);
    let intervalId = null;
    let paused = false;

    const switchRole = () => {
      currentRoleIndex.value =
        (currentRoleIndex.value + 1) % roles.value.length;
    };

    const startInterval = () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (!paused) switchRole();
      }, 2000);
    };
    const pauseSwitch = () => {
      paused = true;
    };
    const resumeSwitch = () => {
      paused = false;
    };

    onMounted(() => {
      startInterval();
    });
    onUnmounted(() => {
      if (intervalId) clearInterval(intervalId);
    });

    return {
      currentRole,
      switchRole,
      pauseSwitch,
      resumeSwitch,
    };
  },
};
</script>

<style scoped>
.role-fade-up-enter-active,
.role-fade-up-leave-active {
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1.12),
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1.12);
}
.role-fade-up-enter-from {
  opacity: 0;
  transform: translateY(24px);
}
.role-fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.role-fade-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.role-fade-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
