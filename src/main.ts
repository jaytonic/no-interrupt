import { createPinia } from 'pinia';
import { createApp, markRaw } from 'vue';

import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import Card from 'primevue/card';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import './assets/main.css';

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(PrimeVue);

//Components
app.component('Card', Card);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);

app.mount('#app');
