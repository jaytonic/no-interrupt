import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Divider from "primevue/divider";
import Password from "primevue/password";
import InputText from "primevue/inputtext";

import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

import "primevue/resources/themes/tailwind-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "./styles/main.css";

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "router-link-active",
});

const app = createApp(App);
app.use(PrimeVue);
app.component("Button", Button);
app.component("Card", Card);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Divider", Divider);
app.component("Password", Password);
app.component("InputText", InputText);
app.use(router);
app.mount("#app");
