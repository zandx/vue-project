import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('../views/home/Home'),
    },
    {
        path: '/category',
        component: () => import('../views/category/Category'),
    },
    {
        path: '/cart',
        component: () => import('../views/cart/Cart'),
    },
    {
        path: '/profile',
        component: () => import('../views/profile/Profile'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 防止连续点击多次路由报错
// let routerPush = router.prototype.push();
// routerPush = function push(location) {
//     return routerPush.call(this, location).catch(err => err)
// }

export default router;
