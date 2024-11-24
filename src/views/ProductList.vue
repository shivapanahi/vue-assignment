<template>
  <div>
    <h1 class="page-title">Product List</h1>
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
          <button v-else @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
    <div v-if="errorMessage" class="error-message">
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
export default {
  setup() {
    const { addToCart, increaseQuantity, decreaseQuantity, isInCart, getQuantity } = useCart();
    return {
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      isInCart,
      getQuantity,
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
      const response = await axios.get(`https://dummyjson.com/product`);
      this.products = response.data.products;
    } catch (error) {

      this.errorMessage = "Failed to load products. Please try again later.";
      console.error("Failed to fetch products:", error);
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



  