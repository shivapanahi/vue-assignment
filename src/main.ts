import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createPinia } from "pinia"
import router from './router/index.ts'; 
import i18n from './plugins/i18n.ts';
import { useLanguageStore } from "./store/languageStore";




const app = createApp(App);
const pinia = createPinia();
app.use(i18n);
app.use(pinia);
app.use(router);

enum Language {
    EN = "en",
    FA = "fa",
  }
const languageStore = useLanguageStore();
const savedLanguage: Language = (localStorage.getItem("language") as Language) || "en";
i18n.global.locale = savedLanguage;
languageStore.changeLanguage(savedLanguage);


app.mount('#app')
