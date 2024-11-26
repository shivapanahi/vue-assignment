import { defineStore } from "pinia";
import { ref } from "vue";

export const useDirectionStore = defineStore("direction", () => {
  const direction = ref<"ltr" | "rtl">("ltr");

  const setDirection = (dir: "ltr" | "rtl") => {
    direction.value = dir;
    document.body.className = dir; 
  };

  return {
    direction,
    setDirection,
  };
});
