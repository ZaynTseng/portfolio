import "./style.css";

import {createApp} from "vue";
import router from "@/router";
import App from "./App.vue";

import BaseCardWithButton from "@/components/BaseCardWithButton.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import BaseHero from "@/components/BaseHero.vue";
import BaseNavbar from "@/components/BaseNavbar.vue";
import BaseSidebar from "@/components/BaseSidebar.vue";
import BaseSocial from "@/components/BaseSocial.vue";
import BaseSpinner from "@/components/BaseSpinner.vue";
import BaseTextArea from "@/components/BaseTextArea.vue";

const app = createApp(App);

app.use(router);

app.component("base-card-with-button", BaseCardWithButton);
app.component("base-footer", BaseFooter);
app.component("base-hero", BaseHero);
app.component("base-navbar", BaseNavbar);
app.component("base-sidebar", BaseSidebar);
app.component("base-social", BaseSocial);
app.component("base-spinner", BaseSpinner);
app.component("base-text-area", BaseTextArea);

app.mount("#app");
