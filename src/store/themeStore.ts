import { defineStore } from "pinia";
import { ref } from "vue";

export const useTemplateConfigStore = defineStore("templateConfig", () => {
  const headerBgColor = ref(import.meta.env.VITE_HEADER_BG_COLOR || "#f8f9fa");
  const menuTextColor = ref(import.meta.env.VITE_MENU_TEXT_COLOR || "#000000");

  const changeHeaderColor = (color: string, menuText: string) => {
    headerBgColor.value = color;
    menuTextColor.value = menuText;

  };

  return {
    headerBgColor,
    menuTextColor,
    changeHeaderColor,
  };
});
