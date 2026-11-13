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
import ProjectPcrFormatter from "@/pages/projects/ProjectPcrFormatter.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: LandingPage },
    { path: "/projects", component: Projects },
    { path: "/projects/pcr-formatter", component: ProjectPcrFormatter },
    { path: "/projects/plant-mate", component: ProjectPlantMate },
    { path: "/projects/recipe-scale", component: ProjectRecipeScale },
    { path: "/projects/stereo-disparity", component: ProjectStereoDisparity },
    { path: "/projects/kokos-posters", component: ProjectKokosPosters },
    { path: "/about", component: AboutMe },
    { path: "/contact", component: Contact },
    { path: "/photography", component: Photography },
    { path: "/more", component: More },
    // Addresses used to start with /portfolio. Send those to the new ones,
    // so links shared before the change keep working.
    {
      path: "/portfolio/:rest(.*)*",
      redirect: (to) => "/" + [].concat(to.params.rest || []).join("/"),
    },
    { path: "/:notFound(.*)", component: NotFound },
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
