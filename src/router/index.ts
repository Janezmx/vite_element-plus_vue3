const Home = () => import('@/views/Home.vue')
const Form = () => import('@/views/Form.vue')
const List = () => import('@/views/List.vue')
import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"
const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        beforeEnter: (to, from) => {
            // 可以在定义路由的时候监听from和to
            console.log('beforeEnter')
        }
    },
    {
        path: '/form',
        name: 'form',
        component: Form
    },
    {
        path: '/list',
        name: 'list',
        component: List
    },
    { path: '/', redirect: '/home' }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
