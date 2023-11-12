import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

const pineapple = createPinia();
app.$pinia = pineapple;

app.use(pineapple).mount('#app')
