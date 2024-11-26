<template>
    <div class="language-switcher">
      <button
        v-for="lang in availableLanguages"
        :key="lang"
        :class="['btnLanguage', { active: currentLanguage === lang }]"
        @click="changeLanguage(lang)"
      >
  
        {{  
        //@ts-ignore
         langLabels[lang] }}
      </button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useI18n } from "vue-i18n";
  import { useLanguageStore } from "../store/languageStore";
  
  export default defineComponent({
    name: "LanguageSwitcher",
    setup() {
      const { t, locale } = useI18n();
      const languageStore = useLanguageStore();

      const availableLanguages = computed(() => languageStore.availableLanguages);

      const currentLanguage = computed(() => languageStore.language);

      const langLabels = {
        en: t("English"),
        fa: t("فارسی"),
      };
  
      const changeLanguage = (lang: string) => {
        languageStore.changeLanguage(lang);
        locale.value = lang;
      };
  
      return {
        availableLanguages,
        currentLanguage,
        changeLanguage,
        langLabels,
      };
    },
  });
  </script>
  

  