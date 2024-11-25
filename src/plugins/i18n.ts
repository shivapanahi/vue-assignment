import { createI18n } from 'vue-i18n';

export const availableLocales = ['en', 'fa'] as const;

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {}, // Empty initially
});

export async function loadLocaleMessages(locale: string) {
  const messages = await import(`../locales/${locale}.json`);
  i18n.global.setLocaleMessage(locale, messages.default);
}
