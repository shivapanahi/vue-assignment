import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(product) {
      const existing = this.cartItems.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
      console.log("Cart Items Updated:", this.cartItems);
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },
    updateQuantity(productId, quantity) {
      const product = this.cartItems.find((item) => item.id === productId);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
  getters: {
    totalPrice(state) {
      return state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

