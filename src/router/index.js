import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import { useLoadingStore } from "../store/loadingStore";

const routes = [
  { path: "/", component: ProductList },
  { path: "/cart", component: ShoppingCart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const loadingStore = useLoadingStore();
  loadingStore.startLoading();
  next();
});

router.afterEach(() => {
  const loadingStore = useLoadingStore();
  loadingStore.stopLoading();
});

export default router;
