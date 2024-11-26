import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useLanguageStore = defineStore("language", () => {
  const availableLanguages = ref(["en", "fa"]);
  const language = ref(localStorage.getItem("language") || "en"); 

  const changeLanguage = (lang: string) => {
    if (availableLanguages.value.includes(lang)) {
      language.value = lang;
      localStorage.setItem("language", lang); 
    }
  };


  onMounted(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && availableLanguages.value.includes(savedLanguage)) {
      language.value = savedLanguage;
    }
  });

  return {
    availableLanguages,
    language,
    changeLanguage,
  };
});
