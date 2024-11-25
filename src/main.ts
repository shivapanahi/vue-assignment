import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createPinia } from "pinia"
import router from './router/index.ts'; 
import { i18n } from './plugins/i18n.ts';



const app = createApp(App);
const pinia = createPinia();
app.use(i18n);
app.use(pinia);
app.use(router);
app.mount('#app')
