import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Layout from "@/views/layout/index.vue";

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue")
  },
  {
    path: "/",
    redirect:"/preview"
  },
  {
    path: "/preview",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/preview/index.vue"),
      }
    ]
  },
  {
    path: "/record",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/record/index.vue"),
      }
    ]
  },
  {
    path: "/system",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/system/index.vue"),
      }
    ]
  },
  {
    path: "/face",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/face/index.vue"),
      }
    ]
  },
  {
    path: "/camera",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/camera/index.vue"),
      }
    ]
  },
  {
    path: "/association",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/association/index.vue"),
      }
    ]
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
