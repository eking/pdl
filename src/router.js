import Vue from 'vue'
//1.导入路由组件vue-router
import Router from 'vue-router'
import Main from '@/page/Main'
import Info from '@/page/Info'
import Product from '@/page/Product'
//2.调用vue-router
Vue.use(Router)
//3.创建vue-router实例
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/info',
            component: Info
        },
        {
            path: '/product', //路径
            name: 'Product', //名称
            component: Product //组件
        }
    ]
});
export default router;