import { createRouter, createWebHashHistory } from "vue-router";

import Foobar from "./components/Foobar.vue";
import Helloworld from "./components/Helloworld.vue";

const routes = [
  { path: "/foobar", component: Foobar },
  { path: "/helloworld", component: Helloworld },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});