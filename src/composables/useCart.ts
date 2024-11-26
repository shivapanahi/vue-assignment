import { useCartStore } from "../store/cartStore";
import type { Product } from "../store/cartStore"; // ایمپورت تایپ Product

export function useCart() {
  const cartStore = useCartStore();

  const addToCart = (product: Product) => {
    cartStore.addToCart(product);
  };

  const increaseQuantity = (productId: number) => {
    const product = cartStore.cartItems.find((item) => item.id === productId);
    if (product && product.quantity !== undefined) {
      cartStore.updateQuantity(productId, product.quantity + 1);
    }
  };

  const decreaseQuantity = (productId: number) => {
    const product = cartStore.cartItems.find((item) => item.id === productId);
    if (product && product.quantity !== undefined) {
      if (product.quantity > 1) {
        cartStore.updateQuantity(productId, product.quantity - 1);
      } else {
        cartStore.removeFromCart(productId);
      }
    }
  };

  const isInCart = (productId: number): boolean => {
    return cartStore.cartItems.some((item) => item.id === productId);
  };

  const getQuantity = (productId: number): number => {
    const product = cartStore.cartItems.find((item) => item.id === productId);
    return product?.quantity || 0;
  };

  const removeFromCart = (productId: number) => {
    cartStore.removeFromCart(productId);
  };

  return {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    isInCart,
    getQuantity,
    removeFromCart,
  };
}
