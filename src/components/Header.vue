<template>
  <header :style="{ backgroundColor: headerBgColor }" class="header">
    <nav class="navbar">
      <router-link to="/" class="nav-link">
        <i class="fas fa-home"></i>
        {{ t('products') }}
      </router-link>
      <router-link to="/cart" class="nav-link">
        <i class="fas fa-shopping-cart"></i>  {{ t('cart') }} ({{ totalPrice }})
      </router-link>
      <button class="change-color-btn" @click="changeColor">{{ t('change_color') }}</button>
      <div class="language-switcher">
        <button class="btn" @click="changeLanguage('en')">English</button>
        <button class="btn"  @click="changeLanguage('fa')">فارسی</button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { computed } from "vue";
import { useCartStore } from "../store/cartStore";
import { ref } from "vue";
import '../assets/styles/Header.scss';
import { useI18n } from "vue-i18n";
import i18n, { loadLocaleMessages } from "../plugins/i18n";

export default {
  name: "Header",

  setup() {
    const { t, locale } = useI18n();
    console.log("Current locale:", locale.value);
   console.log("Translated text:", t('Products'));
    const headerBgColor = ref(import.meta.env.VITE_HEADER_BG_COLOR || "#f8f9fa");
    const cartStore = useCartStore();
    const totalPrice = computed(() => cartStore.totalPrice);
    const changeColor = () => {
      headerBgColor.value = headerBgColor.value === "#f8f9fa" ? "#007bff" : "#f8f9fa";
    };
    const changeLanguage = async (lang: "en" | "fa") => {
  const { availableLocales } = i18n.global; 
  if (!availableLocales.includes(lang)) {
    await loadLocaleMessages(lang);
  }
  locale.value = lang; 
};
    return {
      headerBgColor,
      totalPrice,
      changeColor,
      t,
      changeLanguage
    };
  },
};
</script>

