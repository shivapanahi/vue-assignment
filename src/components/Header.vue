<template>
  <header :style="{ backgroundColor: headerBgColor }" class="header">
    <nav class="navbar">
      <router-link to="/" class="nav-link" :style="{ color: menuTextColor }">
        <i class="fas fa-home"></i>
        {{ t('products') }}
      </router-link>
      <router-link to="/cart" class="nav-link" :style="{ color: menuTextColor }">
        <i class="fas fa-shopping-cart"></i>  {{ t('cart') }} ({{ totalPrice }})
      </router-link>
      <button class="change-color-btn" @click="changeColor" :style="{ color: menuTextColor }"><i class="fas fa-palette"></i> {{ t('change_color') }}</button>
      <LanguageSwitcher />
    </nav>
  </header>
</template>

<script lang="ts">
import { computed } from "vue";
import { useCartStore } from "../store/cartStore";
import '../assets/styles/Header.scss';
import { useI18n } from "vue-i18n";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import { useTemplateConfigStore } from "../store/themeStore";

export default {
  name: "Header",
  components: { LanguageSwitcher },
  setup() {
    const { t } = useI18n();
    const cartStore = useCartStore();
    const templateConfigStore = useTemplateConfigStore();
    const headerBgColor = computed(() => templateConfigStore.headerBgColor);
    const menuTextColor = computed(() => templateConfigStore.menuTextColor);

 
    const totalPrice = computed(() => cartStore.totalPrice);
    const changeColor = () => {
      if (templateConfigStore.headerBgColor === "#f8f9fa") {
        templateConfigStore.changeHeaderColor("#000", "#ffff");
      } else {
        templateConfigStore.changeHeaderColor("#f8f9fa", "#000");
      }
    };

    return {
      headerBgColor,
      menuTextColor,
      totalPrice,
      changeColor,
      t,
    };
  },
};
</script>

