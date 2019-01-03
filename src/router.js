import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Product from '@/page/Product'
import Detail from '@/page/Detail'

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
            path: '/zone',
            name: 'zone',
            component: Home
        },
        {
            path: '/team',
            name: 'team',
            component: Home
        },
        {
            path: '/brand',
            name: 'brand',
            component: Home
        },
        {
            path: '/product/:id',
            component: Product
        },
        {
            path: '/:channel/:name',
            component: Detail
        }
    ]
});
export default router;