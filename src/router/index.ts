import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../pages/Login/index.vue';
import Menu from '../pages/Menu/index.vue'
import WhatsNew from '../pages/WhatsNew/index.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/WhatsNew', },
    { path: '/', name: 'Menu', component: Menu,
        children: [
            { path: 'WhatsNew', component: WhatsNew, },
        ],
    },
    { path: "/Login", name: 'Login', component: Login, },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;