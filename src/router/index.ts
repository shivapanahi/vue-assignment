import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useLoadingStore } from "../store/loadingStore";

const ProductList = () => import("../views/ProductList.vue");
const ShoppingCart = () => import("../views/ShoppingCart.vue");

const routes: Array<RouteRecordRaw> = [
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
