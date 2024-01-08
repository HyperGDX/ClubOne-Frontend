import { createApp } from 'vue' // 导入 Vue 3 的 createApp 函数
import ElementPlus from 'element-plus' // 导入 Element Plus UI 库
import 'element-plus/dist/index.css' // 导入 Element Plus 的 CSS 样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 导入 Element Plus 的所有图标组件
import App from './App.vue' // 导入你的 Vue 应用的主组件

const app = createApp(App) // 使用 createApp 函数创建一个新的 Vue 应用实例
app.use(ElementPlus) // 在你的 Vue 应用中注册 Element Plus，这样你就可以在你的应用中使用 Element Plus 的所有组件和功能了

// 遍历 Element Plus 的所有图标组件，然后在你的 Vue 应用中注册它们
// 这样你就可以在你的应用中使用这些图标组件了
// 必须在mount前
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app') // 将你的 Vue 应用挂载到 DOM 中的 '#app' 元素