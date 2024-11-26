<template>
  <div class="cart-item">
    <img :src="item.thumbnail" :alt="item.title" class="cart-item-image" />
    <div class="cart-item-info">
      <h2 class="cart-item-title">{{ item.title }}</h2>
      <p class="cart-item-price">{{ t('price') }}: ${{ item.price }} × {{ item.quantity }}</p>
      <div class="quantity-controls">
        <button @click="$emit('decrease', item.id)" class="quantity-btn">-</button>
        <span class="quantity">{{ item.quantity }}</span>
        <button @click="$emit('increase', item.id)" class="quantity-btn">+</button>
      </div>
    </div>
    <button @click="$emit('remove', item.id)" class="remove-btn"> {{ t('remove') }}</button>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import i18n, { loadLocaleMessages } from "../plugins/i18n";
export default {
  props: {
    item: {
      type: Object,
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

