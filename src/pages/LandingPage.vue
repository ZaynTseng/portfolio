<template>
  <main class="px-4 py-16 sm:px-6 lg:px-8 sm:py-32">
    <div class="mx-auto max-w-7xl">
      <div class="mb-16 sm:mb-24">
        <div
          class="relative text-5xl font-medium hero-title sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <h1>Ray Zeng</h1>
          <p
            class="role-stage"
            title="Click to switch role"
            @mouseenter="pauseSwitch"
            @mouseleave="resumeSwitch"
            @click="switchRole"
          >
            <!-- Invisible copies of every role keep the stage as tall as the
                 tallest one, so nothing below it moves when the role changes. -->
            <span
              v-for="role in roles"
              :key="role.text"
              class="role-sizer"
              aria-hidden="true"
              >{{ role.first }}<br v-if="role.rest" class="role-break" />{{
                role.rest
              }}</span
            >
            <transition name="role" mode="out-in">
              <span :key="currentRole.text" class="role"
                >{{ currentRole.first
                }}<br v-if="currentRole.rest" class="role-break" />{{
                  currentRole.rest
                }}</span
              >
            </transition>
          </p>
          <h2 class="font-light text-gray-400">Melbourne, AU</h2>
        </div>
      </div>
      <div class="text-3xl max-w-7xl sm:text-4xl md:text-5xl lg:text-6xl">
        <p class="mb-6 leading-tight">
          Hi, I’m Ray. I run programmatic and paid social campaigns in Myer’s
          in-house digital marketing team.
        </p>
        <p class="mb-8 leading-tight">
          I also have a software engineering background, and I like using it to
          take the manual work out of advertising.
        </p>
        <div
          class="flex items-center gap-1 text-2xl text-blue-500 sm:text-3xl md:text-4xl lg:text-5xl"
        >
          <router-link to="/projects" class="link link-hover"
            >My Projects</router-link
          >
          <span>→</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// Edit this list to change the rotating line under the name.
// Two words each works best: on narrow screens a role breaks after its
// first word, so every role takes the same two lines.
const ROLE_NAMES = [
  "Digital Marketer",
  "Programmatic Buyer",
  "Front-End Developer",
  "Tool Builder",
];
const SWITCH_EVERY_MS = 2800;

const roles = ROLE_NAMES.map((text) => {
  const space = text.indexOf(" ");
  return space === -1
    ? { text, first: text, rest: "" }
    : { text, first: text.slice(0, space), rest: text.slice(space) };
});

const currentRoleIndex = ref(0);
const currentRole = computed(() => roles[currentRoleIndex.value]);
let intervalId = null;
let paused = false;

function nextRole() {
  currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length;
}

function startInterval() {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (!paused) nextRole();
  }, SWITCH_EVERY_MS);
}

// A click advances straight away and restarts the timer, so the next
// automatic switch does not land right on top of it.
function switchRole() {
  nextRole();
  startInterval();
}

function pauseSwitch() {
  paused = true;
}

function resumeSwitch() {
  paused = false;
}

onMounted(startInterval);
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.hero-title {
  container-type: inline-size;
}

/* On small phones, scale the type so the longest single word still fits. */
@media (max-width: 639.98px) {
  .hero-title {
    font-size: clamp(2.25rem, 12.6vw, 3rem);
  }
}

.role-stage {
  display: grid;
  cursor: pointer;
}

.role-sizer,
.role {
  grid-area: 1 / 1;
}

.role-sizer {
  visibility: hidden;
}

/* Roles sit on one line when there is room for the widest of them, and
   break after the first word when there is not. The widest role is about
   10em wide; raise this number if you add a longer one. */
@container (min-width: 10.75em) {
  .role-break {
    display: none;
  }
}

/* The old role fades out, then the new one fades in. */
.role-enter-active {
  transition: opacity 0.4s ease;
}

.role-leave-active {
  transition: opacity 0.25s ease;
}

.role-enter-from,
.role-leave-to {
  opacity: 0;
}
</style>
