<template>
  <div>
    <h1 class="page-title">{{ t('product_list')}}</h1>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.thumbnail" :alt="product.title" class="product-image" />
        <div class="product-info">
          <h2 class="product-title">{{ product.title }}</h2>
          <p class="product-price">${{ product.price }}</p>
          <div v-if="isInCart(product.id)" class="quantity-controls">
            <button @click="decreaseQuantity(product.id)" class="quantity-btn">-</button>
            <span class="quantity">{{ getQuantity(product.id) }}</span>
            <button @click="increaseQuantity(product.id)" class="quantity-btn">+</button>
          </div>
          <button v-else @click="addToCart(product)" class="add-to-cart-btn">{{ t('add_to_cart') }}</button>
        </div>
      </div>
    </div>
    <div v-if="errorMessage" class="message error">
       {{ errorMessage }}
    </div>
  </div>
</template>
  
  <script>
 import axios from "axios";
import { useCartStore } from "../store/cartStore";
import "../assets/styles/Product.scss";
import { useLoadingStore } from "../store/loadingStore";
import { useCart } from "../composables/useCart";
import { getProducts } from "../services/productService";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t, locale } = useI18n();

    const { addToCart, increaseQuantity, decreaseQuantity, isInCart, getQuantity } = useCart();
    return {
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      isInCart,
      getQuantity,
      t
    };
  },
  data() {
    return {
      products: [],
      errorMessage: "",
    };
  },

  async created() {
    const loadingStore = useLoadingStore();
    try {
      loadingStore.startLoading();
      const response = await getProducts();
      this.products = response.data.products;
    } catch (error) {
      this.errorMessage = "Failed to load products. Please try again later.";
    } finally {  
      loadingStore.stopLoading();
    }
  },
  computed: {
      cartStore() {
      return useCartStore();
    },
  },
};

  </script>



  