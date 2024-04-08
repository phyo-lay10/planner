import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddPlan from "../views/AddPlan.vue";
import EditPlan from "../views/EditPlan.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/addPlan",
      name: "addPlan",
      component: AddPlan,
    },
    {
      path: "/editPlan/:id",
      name: "editPlan",
      component: EditPlan,
      props: true,
    },
  ],
});

export default router;
