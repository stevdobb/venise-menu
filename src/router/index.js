import Tafelplan from "@/components/Tafelplan.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import EditPage from "@/components/EditPage.vue";
import SchoolvakantiesPage from "@/components/Schoolvakanties.vue";
import RestaurantTranslationsPage from "@/components/RestaurantTranslations.vue";
import AanvullenPage from "@/components/Aanvullen.vue";
import WijnGidsPage from "@/components/WijnGids.vue";
import PrintableMenuPage from "@/components/PrintableMenuPage.vue";

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
  {
    path: "/wijngids",
    name: "WijnGids",
    component: WijnGidsPage,
  },
  {
    path: "/tafelplan",
    name: "Tafelplan",
    component: Tafelplan,
  },
  {
    path: "/menukaart",
    name: "PrintableMenu",
    component: PrintableMenuPage,
  },
];

const router = createRouter({
  history: createWebHistory("/venise-menu/"),
  routes,
});

export default router;
