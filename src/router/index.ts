import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../pages/Login/loginIndex.vue';
import Menu from '../pages/Menu/menuIndex.vue';
import WhatsNew from '../pages/WhatsNew/whatsNewIndex.vue';
import Wiki from '../pages/Wiki/wikiIndex.vue';

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

// export const allRoutes = {
//   forumGeneral: "/forum/general",
// };

export default router;
