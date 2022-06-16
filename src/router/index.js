import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'dashboard',
        component: () =>
            import ('../views/DashboardView.vue')
    },
    {
        path: '/tasks',
        name: 'tasks',
        component: () =>
            import ('../views/TasksView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/AboutView.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router