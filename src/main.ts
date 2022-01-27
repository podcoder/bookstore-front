import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App);

// Setup `app` to use `vue-router`
app.use(router);
app.mount('#app')
