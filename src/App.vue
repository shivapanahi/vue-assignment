<template>
  <LoadingOverlay />

  <Header />

  <router-view />

</template>

<script>
import { useCartStore } from "./store/cartStore"; 
import { computed } from "vue"; 
import LoadingOverlay from "./components/LoadingOverlay.vue";
import { useLoadingStore } from "./store/loadingStore"; 
import Header from "./components/Header.vue";

export default {
  components: {
    LoadingOverlay,
    Header,
  },
  setup() {
    const loadingStore = useLoadingStore(); 
    const cartStore = useCartStore(); 

    const totalPrice = computed(() => cartStore.totalPrice);

    return {
      totalPrice,
      isLoading: loadingStore.isLoading, 
    };
  },
};
</script>


