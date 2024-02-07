import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import router from './router/index';
import {createPinia} from "pinia";

const app = createApp(App);
const pinia = createPinia();
app.use(ElementPlus);
app.use(router);
app.use(pinia);

// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');
