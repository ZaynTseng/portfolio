import "./style.css";
import "katex/dist/katex.min.css";

import {createApp} from "vue";
import router from "@/router";
import App from "./App.vue";
import VueKatex from "@hsorby/vue3-katex";

import BaseFooter from "@/components/BaseFooter.vue";
import BaseHero from "@/components/BaseHero.vue";
import BaseNavbar from "@/components/BaseNavbar.vue";
import BaseSidebar from "@/components/BaseSidebar.vue";

const app = createApp(App);

app.use(router);
app.use(VueKatex, {
    globalOptions: {
        //... Define globally applied KaTeX options here
    }
});

app.component("base-footer", BaseFooter);
app.component("base-hero", BaseHero);
app.component("base-navbar", BaseNavbar);
app.component("base-sidebar", BaseSidebar);

app.mount("#app");
