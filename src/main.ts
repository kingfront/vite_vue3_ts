import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { Button, Loading, Empty } from 'vant'

const app = createApp(App)
app.use(createPinia()).use(router).mount('#app')
app.use(Button).use(Loading).use(Empty)
