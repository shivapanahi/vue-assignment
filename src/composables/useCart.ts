import { useCartStore } from "../store/cartStore";

export function useCart() {
  const cartStore = useCartStore();

  const addToCart = (product) => {
    cartStore.addToCart(product);
  };

  const increaseQuantity = (productId) => {
    const product = cartStore.cartItems.find((item) => item.id === productId);
    if (product) {
      cartStore.updateQuantity(productId, product.quantity + 1);
    }
  };

  const decreaseQuantity = (productId) => {
    const product = cartStore.cartItems.find((item) => item.id === productId);
    if (product) {
      if (product.quantity > 1) {
        cartStore.updateQuantity(productId, product.quantity - 1);
      } else {
        cartStore.removeFromCart(productId);
      }
    }
  };

  const isInCart = (productId) => {
    return cartStore.cartItems.some((item) => item.id === productId);
  };

  const getQuantity = (productId) => {
    const product = cartStore.cartItems.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  };
 const removeFromCart=(productId)=> {
    const cartStore = useCartStore();
    cartStore.removeFromCart(productId);
  }

  return {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    isInCart,
    getQuantity,
    removeFromCart
  };
}
