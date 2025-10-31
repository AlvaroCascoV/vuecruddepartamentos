import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from "./components/DepartamentosComponent.vue";
import CreateDepartamento from "./components/CreateDepartamento.vue";

const myRoutes = [
    { path: "/", component: DepartamentosComponent },
    { path: "/create", component: CreateDepartamento },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router