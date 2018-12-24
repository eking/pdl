import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Info from '@/page/Info'
import Product from '@/page/Product'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/info',
            name: 'info',
            component: Info
        },
        {
            path: '/product',
            name: 'product',
            component: Product
        }
    ]
});
export default router;