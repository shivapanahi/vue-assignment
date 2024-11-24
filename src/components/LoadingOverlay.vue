<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="spinner"></div>
  </div>
</template>

<script>
import '../assets/styles/LoadingOverlay.scss';
import { useLoadingStore } from "../store/loadingStore";

export default {
  computed: {
    isLoading() {
      return useLoadingStore().isLoading;
    },
  },
};
</script>