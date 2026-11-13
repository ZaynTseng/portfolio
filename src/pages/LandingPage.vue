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
            <transition name="role" appear>
              <span :key="currentRole.text" class="role">
                <span class="role-inner"
                  >{{ currentRole.first
                  }}<br v-if="currentRole.rest" class="role-break" />{{
                    currentRole.rest
                  }}</span
                >
              </span>
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
          <router-link to="/portfolio/projects" class="link link-hover"
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
/* ---- Layout ---- */

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
  /* The stage is a mask: a role rises into view from below its bottom edge.
     The padding leaves room for the spring overshoot at the top and for
     descenders at the bottom; the negative margin stops that padding
     moving the lines around it. */
  overflow: hidden;
  padding-block: 0.25em 0.12em;
  margin-block: -0.25em -0.12em;
}

.role-sizer,
.role {
  grid-area: 1 / 1;
}

.role-sizer {
  visibility: hidden;
}

/* .role stretches to the full stage height, so moving it by 100% always
   takes it out of view, whether the stage is one line tall or two. */
.role,
.role-inner {
  display: block;
}

/* Roles sit on one line when there is room for the widest of them, and
   break after the first word when there is not. The widest role is about
   10em wide; raise this number if you add a longer one. */
@container (min-width: 10.75em) {
  .role-break {
    display: none;
  }
}

/* ---- Motion ---- */

/* Two layers. The outer one carries the text up through the mask; the inner
   one adds the spring, measured in em so the bounce is the same size
   however tall the stage is. Both wait a moment so the outgoing role has
   started to clear. */
.role-enter-active {
  animation: role-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}

.role-inner {
  animation: role-spring 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
}

/* A damped spring (about 23% overshoot), for browsers that support linear(). */
@supports (animation-timing-function: linear(0, 1)) {
  .role-inner {
    animation-timing-function: linear(
      0,
      0.012 1.2%,
      0.075 3.1%,
      0.202 5.4%,
      0.385 8%,
      0.602 10.8%,
      0.821 13.8%,
      1.011 17%,
      1.148 20.4%,
      1.22 23.9%,
      1.234 26.2%,
      1.193 31.3%,
      1.128 35.2%,
      1.057 39.2%,
      0.997 43.4%,
      0.96 47.6%,
      0.945 52.8%,
      0.951 56.4%,
      0.967 60.9%,
      0.986 65.5%,
      1.002 70.2%,
      1.011 75%,
      1.013 79.8%,
      1.01 84.8%,
      1.005 89.8%,
      1.001 94.8%,
      1
    );
  }
}

.role-leave-active {
  transition: transform 0.3s cubic-bezier(0.5, 0, 0.75, 0),
    opacity 0.18s ease-in;
}

.role-leave-to {
  opacity: 0;
  transform: translateY(-55%);
}

@keyframes role-in {
  from {
    transform: translateY(calc(100% + 0.12em));
  }
}

@keyframes role-spring {
  from {
    transform: translateY(0.8em);
  }
}

@media (prefers-reduced-motion: reduce) {
  .role-enter-active,
  .role-inner {
    animation: none;
  }

  .role-enter-active {
    transition: opacity 0.3s ease;
  }

  .role-enter-from {
    opacity: 0;
  }

  .role-leave-active {
    transition: opacity 0.2s ease;
  }

  .role-leave-to {
    transform: none;
  }
}
</style>
