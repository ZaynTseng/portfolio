<template>
  <div>
    <base-hero>
      <div class="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 ">
        <router-link to="/portfolio/projects/plant-mate"
                     class="card hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 text-left  bg-base-100 shadow-lg">
          <figure><img src="../assets/projects/plant-mate/plant-mate-cover.png" alt="Plant Mate"/></figure>
          <div class="card-body">
            <h2 class="card-title">Plant Mate
              <span class="badge badge-secondary badge-info">UI/UX</span>
              <span class="badge badge-secondary badge-success">iOS</span>
            </h2>
            <p>A digital twin app crafted for novice urban farmers</p>
            <div class="card-actions justify-end">
            </div>
          </div>
        </router-link>
        <router-link to="/portfolio/projects/recipe-scale"
                     class="card hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 text-left  bg-base-100 shadow-lg">
          <figure><img src="../assets/projects/recipe-scale/recipe-scale-cover.png" alt="RecipeScale"/></figure>
          <div class="card-body">
            <h2 class="card-title">RecipeScale
              <span class="badge badge-secondary badge-info">UI/UX</span>
              <span class="badge badge-secondary badge-warning">Hardware</span>
            </h2>
            <p>Store, share, and learn recipes with ease</p>
            <div class="card-actions justify-end">
            </div>
          </div>
        </router-link>
      </div>
    </base-hero>
  </div>
</template>

<script setup>
import BaseHero from "@/components/BaseHero.vue";
</script>
