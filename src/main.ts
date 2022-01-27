import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'

// Import css file {tailwinds css}


const app = createApp(App);

// Setup `app` to use `vue-router`
app.use(router);
app.mount('#app')
