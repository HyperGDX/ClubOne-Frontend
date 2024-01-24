import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../pages/Login/loginIndex.vue';
import Menu from '../pages/Menu/menuIndex.vue';
import WhatsNew from '../pages/WhatsNew/whatsNewIndex.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/whatsNew' },
  {
    path: '/',
    name: 'menu',
    component: Menu,
    children: [
      { path: 'whatsNew', component: WhatsNew },
      {
        path: 'forum',
        children: [
          {
            path: 'general',
            // 实现路由懒加载
            component: () => import('../pages/Forum/General/forumGeneral.vue'),
          },
        ],
      },
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
