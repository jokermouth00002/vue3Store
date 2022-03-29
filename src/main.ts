import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './index.css'
import 'uno.css'
import '@/assets/style.scss'

// import 'virtual:windi.css'
// import 'virtual:windi-devtools'
const app = createApp(App)

app.use(router)

app.mount('#app')
