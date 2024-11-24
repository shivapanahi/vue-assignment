<template>
    <div class="cart-summary">
      <p>Total Price: <span class="total-price">${{ totalPrice }}</span></p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalPrice: {
        type: Number,
        required: true,
      },
    },
  };
  </script>

  