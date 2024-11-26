import { defineStore } from "pinia";
import { ref } from "vue";

export const useLanguageStore = defineStore("language", () => {
  const availableLanguages = ref(["en", "fa"]);
  const language = ref("en");

  const changeLanguage = (lang: string) => {
    if (availableLanguages.value.includes(lang)) {
      language.value = lang;
      localStorage.setItem("language", lang);
    }
  };

  return {
    availableLanguages,
    language,
    changeLanguage,
  };
});
