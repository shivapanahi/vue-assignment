<template>
    <div class="cart-summary">
      <p> {{ t('total_price') }}: <span class="total-price">${{ totalPrice }}</span></p>
    </div>
  </template>
  
  <script>
  import { useI18n } from "vue-i18n";
  export default {
    props: {
      totalPrice: {
        type: Number,
        required: true,
      },
    },
    setup(){
      const { t, locale } = useI18n();
      return {
        t
      };
  }
  };
  </script>

  