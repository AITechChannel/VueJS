import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { plugin, defaultConfig } from "@formkit/vue";
import store from "./store/store.js";
import "@formkit/themes/genesis";
// import "./assets/main.css";

import "./scss/index.scss";

const app = createApp(App);

app.use(router);

app.use(store);

app.use(plugin, defaultConfig);

app.mount("#app");
