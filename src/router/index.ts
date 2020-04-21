import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
