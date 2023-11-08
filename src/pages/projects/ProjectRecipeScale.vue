<template>
  <base-hero v-if="isLoading">
    <base-spinner></base-spinner>
  </base-hero>
  <base-hero class="animate__animated animate__fadeIn">
    <div class="max-w-3xl gap-2 grid">
      <figure>
        <img src="../../assets/projects/recipe-scale/recipe-scale-cover.png" alt="cover"
             class="border-base-content bg-base-300 rounded-box border border-opacity-5"
             @load="resourceLoaded">
      </figure>
      <h1 class="text-5xl font-bold pt-4">RecipeScale</h1>
      <p class="text-2xl">Store, share, and learn recipes with ease</p>
      <div class="gap-2 flex flex-wrap pb-6">
        <span class="badge badge-secondary badge-info">UI/UX</span>
        <span class="badge badge-secondary badge-warning">Hardware</span>
        <span class="badge badge-ghost">June 2022</span>
      </div>
      <h2 class="text-3xl font-bold pt-4">Introduction</h2>
      <p>For cooking, the familiar thing, the secret behind and the surprising feeling tell us that cooking knowledge
        combines personal experiences and preferences. Most recipes require you to have either measuring spoons or know
        the accurate grams of each ingredient. Sometimes it is even challenging for experienced chefs to tell precisely
        how much each ingredient is, and it is even harder to teach others. There is a gap between the sharing and
        learning in the cooking knowledge realm, and that’s the gap we will fill with our RecipeScale.</p>
      <p>
        This RecipeScale, except for basic functions like weighing and setting timer, also gives a way that helps people
        digitise their cooking knowledge. A set of sensors, including an RFID reader, a rotary encoder, a potentiometer
        and a LED strip, has been used to help people better store and share the recipes of their own and learn from
        recipes of others.
      </p>
      <p>
        In this way, all cooking knowledge could travel through time and space and never perish.
      </p>
      <h2 class="text-3xl font-bold pt-4">Background Research</h2>
      <img src="../../assets/projects/recipe-scale/background.png" alt="background">

      <h2 class="text-3xl font-bold pt-4">Statement of Design Challenge</h2>
      <h3 class="text-2xl font-light">What if we design a kitchen appliance with digitised cooking knowledge so that
        people can store, share, and learn recipes with ease?</h3>

      <h2 class="text-3xl font-bold pt-4">Ideation</h2>
      <h3 class="text-2xl font-bold pt-4">Thumbnails</h3>
      <img src="../../assets/projects/recipe-scale/ideation.png" alt="ideation">

      <h3 class="text-2xl font-bold pt-4">Medium Fidelity</h3>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <img src="../../assets/projects/recipe-scale/medium-fidelity-1.png" alt="medium-fidelity-1">
        <img src="../../assets/projects/recipe-scale/medium-fidelity-2.png" alt="medium-fidelity-2">
        <img src="../../assets/projects/recipe-scale/medium-fidelity-3.png" alt="medium-fidelity-3">
        <img src="../../assets/projects/recipe-scale/medium-fidelity-4.png" alt="medium-fidelity-4">
        <img src="../../assets/projects/recipe-scale/medium-fidelity-5.png" alt="medium-fidelity-5">
        <img src="../../assets/projects/recipe-scale/medium-fidelity-6.png" alt="medium-fidelity-6">
      </div>

      <img src="../../assets/projects/recipe-scale/medium-fidelity-functions.png" alt="medium-fidelity-functions">

      <h3 class="text-2xl font-bold pt-4">Product Design Stages</h3>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <img src="../../assets/projects/recipe-scale/stage-1.png" alt="product-design-stages-1">
        <img src="../../assets/projects/recipe-scale/stage-2.png" alt="product-design-stages-2">
        <img src="../../assets/projects/recipe-scale/stage-3.png" alt="product-design-stages-3">
        <img src="../../assets/projects/recipe-scale/stage-4.png" alt="product-design-stages-4">
      </div>

      <h3 class="text-2xl font-bold pt-4">Circuit Design</h3>
      <img src="../../assets/projects/recipe-scale/circuit.png" alt="circuit-design">

      <h3 class="text-2xl font-bold pt-4">Hi-fidelity Mockup</h3>
      <img src="../../assets/projects/recipe-scale/hi-fidelity.png" alt="hi-fidelity">

      <h2 class="text-3xl font-bold pt-4">Storyboards</h2>
      <img src="../../assets/projects/recipe-scale/storyboards.png" alt="storyboards">

      <h2 class="text-3xl font-bold pt-4">Project Reflection</h2>
      <p>Through this project, we are deeply aware of the importance of teamwork division and cooperation. There is also
        a deep appreciation of how to divide the work scientifically so that each person's strengths can be brought into
        play. The brainstorming at the beginning of this project was very interesting, and many novel ideas and thoughts
        were generated through the brainstorming. It was very exciting for everyone to refine the project step by step.
        Of course, we also learned a lot in the process of completing this project. The first thing we must say is that
        the backup plan is really important. During the process, there were many hardware problems that we couldn't find
        a reason for that were solved by another set of backup devices. The backup prototype also better protected us
        from accidents during the presentation.
      </p>

      <p>Each of us enjoyed the process of getting the idea off the ground and making it happen, and we had fun with
        every heated discussion, clash of ideas, and exploration of new knowledge.</p>

      <h2 class="text-3xl font-bold pt-4">Project Video</h2>
      <p><a class="link link-hover text-blue-500" target="_blank"
            href="https://www.youtube.com/watch?v=QneEN4ZIQSI">
        Watch the Project Video on YouTube ↗</a></p>

      <h2 class="text-3xl font-bold pt-4">Contribution</h2>
      <p>This is a team project proudly produced by Xinhua Jia, Yifei Wang, Zhi Zeng and Zixuan Huang at the University
        of Melbourne in June 2022.</p>
    </div>
  </base-hero>
</template>

<script setup>
import BaseHero from "@/components/BaseHero.vue";
import {ref} from "vue";
import BaseSpinner from "@/components/BaseSpinner.vue";

let isLoading = ref(true);

function resourceLoaded() {
  isLoading.value = false;
}
</script>
