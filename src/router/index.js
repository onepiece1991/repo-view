import { createRouter, createWebHashHistory } from "vue-router";
// import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home"),
  }
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  // 打包
  history: createWebHashHistory(),
  routes,
});

export default router;
