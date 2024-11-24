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
  </div>
</template>
  
  <script>
 import axios from "axios";
import { useCartStore } from "../store/cartStore";
import "../assets/styles/Product.scss";
import { useLoadingStore } from "../store/loadingStore";
export default {
 
  data() {
    return {
      products: [],
    };
  },
 

  async created() {
    const loadingStore = useLoadingStore();
    try {
      loadingStore.startLoading();
      const response = await axios.get(`https://dummyjson.com/product`);
      this.products = response.data.products;
    } catch (error) {
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
  methods: {

    addToCart(product) {
      this.cartStore.addToCart(product);
    },
    increaseQuantity(productId) {
      const product = this.cartStore.cartItems.find((item) => item.id === productId);
      if (product) {
        this.cartStore.updateQuantity(productId, product.quantity + 1);
      }
    },
    decreaseQuantity(productId) {
      const product = this.cartStore.cartItems.find((item) => item.id === productId);
      if (product) {
        if (product.quantity > 1) {
          this.cartStore.updateQuantity(productId, product.quantity - 1);
        } else {
          this.cartStore.removeFromCart(productId);
        }
      }
    },
    isInCart(productId) {
      return this.cartStore.cartItems.some((item) => item.id === productId);
    },
    getQuantity(productId) {
      const product = this.cartStore.cartItems.find((item) => item.id === productId);
      return product ? product.quantity : 0;
    },
  },
};
  </script>



  