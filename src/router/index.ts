import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../pages/Login/index.vue';
import Menu from '../pages/Menu/index.vue';
import WhatsNew from '../pages/WhatsNew/index.vue';
import General from '../pages/Forum/General/index.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/whatsNew' },
  {
    path: '/',
    name: 'Menu',
    component: Menu,
    children: [
      { path: 'whatsNew', component: WhatsNew },
      { path: 'forum', children: [{ path: 'general', component: General }] },
    ],
  },
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// export const allRoutes = {
//   forumGeneral: "/forum/general",
// };

export default router;
