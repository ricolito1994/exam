import { createRouter, createWebHistory } from 'vue-router';
import DashBoard from "@/views/Dashboard.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import UsersPage from "@/views/UsersPage.vue";

const routes = [
    {
        path: '/',
        component: DashBoard,
        name: "DashBoard",
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: "LoginPage",
        component: LoginPage
    },
    {
        path: '/register',
        name : "RegisterPage",
        component: RegisterPage
    },
    {
        path: '/users',
        name : "UsersPage",
        component: UsersPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'active',
})

export default router;