import "./style.css";

import {createApp} from "vue";
import router from "@/router";
import App from "./App.vue";

import BaseFooter from "@/components/BaseFooter.vue";
import BaseHero from "@/components/BaseHero.vue";
import BaseNavbar from "@/components/BaseNavbar.vue";
import BaseSidebar from "@/components/BaseSidebar.vue";

const app = createApp(App);

app.use(router);

app.component("base-footer", BaseFooter);
app.component("base-hero", BaseHero);
app.component("base-navbar", BaseNavbar);
app.component("base-sidebar", BaseSidebar);

app.mount("#app");
