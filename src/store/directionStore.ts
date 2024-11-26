import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useDirectionStore = defineStore("direction", () => {
  const direction = ref<"ltr" | "rtl">(
    (localStorage.getItem("direction") as "ltr" | "rtl") || "ltr" 
  );

  const setDirection = (dir: "ltr" | "rtl") => {
    direction.value = dir;
    document.body.className = dir; 
    localStorage.setItem("direction", dir); 
  };

  onMounted(() => {
    const savedDirection = localStorage.getItem("direction") as "ltr" | "rtl";
    if (savedDirection) {
      direction.value = savedDirection;
      document.body.className = savedDirection; 
    }
  });

  return {
    direction,
    setDirection,
  };
});

