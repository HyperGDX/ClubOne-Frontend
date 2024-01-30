import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../pages/Login/loginIndex.vue';
import Menu from '../pages/Menu/menuIndex.vue';
import WhatsNew from '../pages/WhatsNew/whatsNewIndex.vue';
import Wiki from '../pages/Wiki/wikiIndex.vue';
import { checkAuth } from './authService';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/whatsNew' },
  {
    path: '/',
    name: 'menu',
    component: Menu,
    children: [
      { path: 'whatsNew', name: 'WhatsNew', component: WhatsNew },
      {
        path: 'forum',
        children: [
          {
            path: 'general',
            component: () => import('../pages/Forum/General/forumGeneral.vue'),
          },
        ],
      },
      { path: 'wiki', component: Wiki },
    ],
  },
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = false; /* 判断用户是否已登录 */

  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'WhatsNew' });
  } else {
    next();
  }
});

export default router;
