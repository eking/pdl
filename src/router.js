import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Zone from '@/page/Zone'
import Team from '@/page/Team'
import Brand from '@/page/Brand'
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
            path: '/zone',
            name: 'zone',
            component: Zone
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        },
        {
            path: '/brand',
            name: 'brand',
            component: Brand
        },
        {
            path: '/product',
            name: 'product',
            component: Product
        }
    ]
});
export default router;