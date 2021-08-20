import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
=======
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App).use(router)
app.use(ElementPlus)
app.mount('#app')
>>>>>>> 86e2e3224397a4ae55d2d17cf7718b55c608a959
