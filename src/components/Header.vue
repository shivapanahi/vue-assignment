<template>
  <header :style="{ backgroundColor: headerBgColor }" class="header">
    <nav class="navbar">
      <router-link to="/" class="nav-link">
        <i class="fas fa-home"></i>
        {{ t('Products') }}
      </router-link>
      <router-link to="/cart" class="nav-link">
        <i class="fas fa-shopping-cart"></i> Cart ({{ totalPrice }})
      </router-link>
      <button class="change-color-btn" @click="changeColor">Change Header Color</button>
    </nav>
  </header>
</template>

<script lang="ts">
import { computed } from "vue";
import { useCartStore } from "../store/cartStore";
import { ref } from "vue";
import '../assets/styles/Header.scss';
import { loadLocaleMessages } from '../plugins/i18n'
import { useI18n } from 'vue-i18n';


export default {
  name: "Header",

  setup() {
    const { t, locale } = useI18n();
    const headerBgColor = ref(import.meta.env.VITE_HEADER_BG_COLOR || "#f8f9fa");
    const cartStore = useCartStore();
    const totalPrice = computed(() => cartStore.totalPrice);
    const changeColor = () => {
      headerBgColor.value = headerBgColor.value === "#f8f9fa" ? "#007bff" : "#f8f9fa";
    };
    async function changeLanguage(lang: 'en' | 'fa') {
      if (!i18n.global.availableLocales.includes(lang)) {
        await loadLocaleMessages(lang);
      }
      i18n.global.locale.value = lang;
    }
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
