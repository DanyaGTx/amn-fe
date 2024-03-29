import { ref } from "vue";
import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", () => {
  const categories = ref(['ruby','design'])
  return {
    categories,
  }
});
