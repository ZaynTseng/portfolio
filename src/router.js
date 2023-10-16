import {createRouter, createWebHistory} from "vue-router";
import NotFound from "@/pages/NotFound.vue";
import LandingPage from "@/pages/LandingPage.vue";
import Projects from "@/pages/Projects.vue";
import AboutMe from "@/pages/AboutMe.vue";
import Contact from "@/pages/Contact.vue";
import Photography from "@/pages/Photography.vue";
import More from "@/pages/More.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/portfolio/", component: LandingPage},
        {path: "/:notFound(.*)", component: NotFound},
        {path: "/portfolio/projects", component: Projects},
        {path: "/portfolio/about", component: AboutMe},
        {path: "/portfolio/contact", component: Contact},
        {path: "/portfolio/photography", component: Photography},
        {path: "/portfolio/more", component: More},
    ]
});

export default router;
