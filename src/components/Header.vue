<template>
    <header :style="{ backgroundColor: headerBgColor }" class="header">
      <nav class="navbar">
        <router-link to="/" class="nav-link">
          <i class="fas fa-home"></i> Products
        </router-link>
        <router-link to="/cart" class="nav-link">
          <i class="fas fa-shopping-cart"></i> Cart ({{ totalPrice }})
        </router-link>
        <button class="change-color-btn" @click="changeColor">Change Header Color</button>
      </nav>
    </header>
  </template>
  
  <script>
  import { computed } from "vue";
  import { ref } from "vue";

  export default {
    name: "Header",
    setup() {
      const headerBgColor = ref(import.meta.env.VITE_HEADER_BG_COLOR || "#f8f9fa");
      const cartStore = useCartStore();
      const totalPrice = computed(() => cartStore.totalPrice);
      const changeColor = () => {
      headerBgColor.value = headerBgColor.value === "#f8f9fa" ? "#007bff" : "#f8f9fa";
    };

      return {
        headerBgColor,
        totalPrice,
        changeColor
      };
    },
  };
  </script>
  
  