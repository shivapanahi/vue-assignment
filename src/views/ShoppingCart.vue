<template>
  <div class="shopping-cart">
    <h1 class="page-title">Shopping Cart</h1>
    <div class="cart-items">
      <CartItem
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        @increase="increaseQuantity"
        @decrease="decreaseQuantity"
        @remove="removeFromCart"
      />
    </div>
    <CartSummary :totalPrice="totalPrice" />
  </div>
</template>

<script>
import { useCartStore } from "../store/cartStore";
import CartItem from "../components/CartItem.vue";
import CartSummary from "../components/CartSummary.vue";


export default {
  components: { CartItem, CartSummary },
  computed: {
    cartItems() {
      return useCartStore().cartItems;
    },
    totalPrice() {
      return useCartStore().totalPrice;
    },
  },
  methods: {
    increaseQuantity(productId) {
      const cartStore = useCartStore();
      const product = cartStore.cartItems.find((item) => item.id === productId);
      if (product) {
        cartStore.updateQuantity(productId, product.quantity + 1);
      }
    },
    decreaseQuantity(productId) {
      const cartStore = useCartStore();
      const product = cartStore.cartItems.find((item) => item.id === productId);
      if (product) {
        if (product.quantity > 1) {
          cartStore.updateQuantity(productId, product.quantity - 1);
        } else {
          cartStore.removeFromCart(productId);
        }
      }
    },
    removeFromCart(productId) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(productId);
    },
  },
};
</script>
