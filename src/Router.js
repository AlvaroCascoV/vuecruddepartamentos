import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from "./components/DepartamentosComponent.vue";

const myRoutes = [
    { path: "/", component: DepartamentosComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router