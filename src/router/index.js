import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import EditPage from "@/components/EditPage.vue";
import SchoolvakantiesPage from "@/components/Schoolvakanties.vue";
import RestaurantTranslationsPage from "@/components/RestaurantTranslations.vue";

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
  {
    path: "/schoolvakanties",
    name: "Schoolvakanties",
    component: SchoolvakantiesPage, // De pagina waar je WYSIWYG-editor komt
  },
  {
    path: "/vertalingen",
    name: "RestaurantTranslations",
    component: RestaurantTranslationsPage,
  },
];

const router = createRouter({
  history: createWebHistory("/venise-menu/"),
  routes,
});

export default router;
