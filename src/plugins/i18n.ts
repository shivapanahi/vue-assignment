import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import fa from "../locales/fa.json";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { en, fa },
});

export const loadLocaleMessages = async (lang: "en" | "fa") => {
  if (!i18n.global.availableLocales.includes(lang)) {
    const messages = await import(`../locales/${lang}.json`);
    i18n.global.setLocaleMessage(lang, messages.default);
  }
};

export default i18n;

