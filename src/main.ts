import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import Foobar from "./components/Foobar.vue";
import Helloworld from "./components/Helloworld.vue";

//router
const routes = [
  { path: "/foobar", component: Foobar },
  { path: "/helloworld", component: Helloworld },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

//vuex
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
  },
});

const app = createApp(App);

app.use(router);

app.mount("#app");
