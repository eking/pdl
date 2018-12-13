import Vue from 'vue'
//1.导入路由组件vue-router
import Router from 'vue-router'
import App from '@/App'
import Product from '@/page/Product'
//2.调用vue-router
Vue.use(Router)
//3.创建vue-router实例
const router = new Router({
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: '/zone',
            component: Product
        },
        {
            path: '/Page', //路径
            name: 'Page', //名称
            component: Product //组件
        }
    ]
});
export default router;