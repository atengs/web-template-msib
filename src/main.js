import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
// import router from './router';

import "./assets/main.css";
import "vue3-toastify/dist/index.css";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min";

const app = createApp(App);

app.use(createPinia());

// app.use(router);
app.mount("#app");
