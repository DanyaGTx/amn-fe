import { ref } from "vue";
import { defineStore } from "pinia";

export const usePersonalNameStore = defineStore("personalName", () => {
  const personalName = ref('')
  return {
    personalName,
  }
});
