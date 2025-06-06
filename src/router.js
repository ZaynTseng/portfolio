import { createRouter, createWebHashHistory } from "vue-router";

import NotFound from "@/pages/NotFound.vue";
import LandingPage from "@/pages/LandingPage.vue";
import Projects from "@/pages/Projects.vue";
import AboutMe from "@/pages/AboutMe.vue";
import Contact from "@/pages/Contact.vue";
import Photography from "@/pages/Photography.vue";
import More from "@/pages/More.vue";
import ProjectPlantMate from "@/pages/projects/ProjectPlantMate.vue";
import ProjectRecipeScale from "@/pages/projects/ProjectRecipeScale.vue";
import ProjectStereoDisparity from "@/pages/projects/ProjectStereoDisparity.vue";
import ProjectKokosPosters from "@/pages/projects/ProjectKokosPosters.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/portfolio/", component: LandingPage },
    { path: "/portfolio", component: LandingPage },
    { path: "/", component: LandingPage },
    { path: "/:notFound(.*)", component: NotFound },
    { path: "/portfolio/projects", component: Projects },
    { path: "/portfolio/projects/plant-mate", component: ProjectPlantMate },
    { path: "/portfolio/projects/recipe-scale", component: ProjectRecipeScale },
    {
      path: "/portfolio/projects/stereo-disparity",
      component: ProjectStereoDisparity,
    },
    {
      path: "/portfolio/projects/kokos-posters",
      component: ProjectKokosPosters,
    },
    { path: "/portfolio/about", component: AboutMe },
    { path: "/portfolio/contact", component: Contact },
    { path: "/portfolio/photography", component: Photography },
    { path: "/portfolio/more", component: More },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
