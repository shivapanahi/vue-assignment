import { defineStore } from "pinia";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number; 
}

interface CartState {
  cartItems: Product[];
}


export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    cartItems: [],
  }),
  
  actions: {
    addToCart(product: Product) {
      const existing = this.cartItems.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity = (existing.quantity || 0) + 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
      console.log("Cart Items Updated:", this.cartItems);
    },

    removeFromCart(productId: number) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },

    updateQuantity(productId: number, quantity: number) {
      const product = this.cartItems.find((item) => item.id === productId);
      if (product) {
        product.quantity = quantity;
      }
    },
  },

  getters: {
    totalPrice(state): number {
      return state.cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
    },
  },
});
