import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import EditPage from "@/components/EditPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage, // Je hoofdpagina
  },
  {
    path: "/edit",
    name: "EditPage",
    component: EditPage, // De pagina waar je WYSIWYG-editor komt
  },
];

const router = createRouter({
  history: createWebHistory("/venise-menu/"),
  routes,
});

export default router;
