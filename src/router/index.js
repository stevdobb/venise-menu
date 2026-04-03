import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import EditPage from "@/components/EditPage.vue";
import SchoolvakantiesPage from "@/components/Schoolvakanties.vue";
import RestaurantTranslationsPage from "@/components/RestaurantTranslations.vue";
import AanvullenPage from "@/components/Aanvullen.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/edit",
    name: "EditPage",
    component: EditPage,
  },
  {
    path: "/schoolvakanties",
    name: "Schoolvakanties",
    component: SchoolvakantiesPage,
  },
  {
    path: "/vertalingen",
    name: "RestaurantTranslations",
    component: RestaurantTranslationsPage,
  },
  {
    path: "/aanvullen",
    name: "Aanvullen",
    component: AanvullenPage,
  },
];

const router = createRouter({
  history: createWebHistory("/venise-menu/"),
  routes,
});

export default router;
