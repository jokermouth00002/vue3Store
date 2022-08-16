import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './index.css'
import 'uno.css'
import './assets/style.scss'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
