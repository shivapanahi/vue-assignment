<template>
  <header :style="{ backgroundColor: headerBgColor }" class="header">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Products</router-link>
      <router-link to="/cart" class="nav-link">Cart ({{ totalPrice }})</router-link>
    </nav>
  </header>
  <button class="change-color-btn" @click="changeColor">Change Header Color</button>
  <router-view />
</template>

<script>
import { useCartStore } from "./store/cartStore";
import { computed } from "vue";
import { ref } from "vue";
import './assets/styles/Header.scss';

export default {
  setup() {
    const headerBgColor = ref(import.meta.env.VITE_HEADER_BG_COLOR);
    const cartStore = useCartStore();
    const totalPrice = computed(() => cartStore.totalPrice); 
    const changeColor = () => {
      headerBgColor.value = headerBgColor.value === "#f8f9fa" ? "#007bff" : "#f8f9fa";
    };
    return {
      totalPrice,
      headerBgColor,
      changeColor
    };
  },
};
</script>