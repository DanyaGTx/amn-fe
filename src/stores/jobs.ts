import { ref } from "vue";
import { defineStore } from "pinia";

export const useJobsStore = defineStore("jobs", () => {
  const jobs = ref([]);

  const meta = ref({
    current_page: 0,
    next_page: 0,
    prev_page: 0,
    total_count: 0,
    total_pages: 0,
  })
  return {
    jobs,
    meta
  }
});
