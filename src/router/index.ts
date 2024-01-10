import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home/index.vue';
import Menu from '../pages/Menu/index.vue'
import WhatsNew from '../pages/WhatsNew/index.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'Home', component: Home},
    { path: '/Menu', name: 'Menu', component: Menu,
    children: [
        { path: 'WhatsNew', component: WhatsNew, },
      ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;