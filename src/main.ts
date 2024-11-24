import { createApp } from 'vue'
import './style.css'
//@ts-ignore
import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createPinia } from "pinia"
//@ts-ignore
import router from "./router"



const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount('#app')
