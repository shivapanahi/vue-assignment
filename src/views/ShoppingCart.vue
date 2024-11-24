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
import "../assets/styles/ShoppingCart.scss";
import { useCart } from "../composables/useCart";

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
  setup() {
    const { increaseQuantity, decreaseQuantity, getQuantity,removeFromCart } = useCart();

    return {
      increaseQuantity,
      decreaseQuantity,
      getQuantity,
      removeFromCart
    };
  },
};
</script>
