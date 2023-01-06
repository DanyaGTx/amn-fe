<template>
  <div class="max-w-[1500px] m-auto bg-white mt-[10px] w-full">
    <div class="w-full">
      <header class="header h-[70px] bg-white border-white">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <h1 class="max-[520px]:text-[20px] text-[30px] mt-2 ml-2">
              Upwork Leads
            </h1>
            <el-button class="mt-[12px] ml-[20px]">Parse</el-button>
            <h3 class="mt-[10px] ml-[20px]">Personal name: {{ personalNameStore.personalName }}</h3>
          </div>
          <div class="flex items-center mr-[22px]">
            <el-dropdown :hide-on-click="false">
              <h2 class="mr-[20px] text-[16px]">Danylo Rakhubovskyi</h2>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Reports</el-dropdown-item>
                  <el-dropdown-item>Doc</el-dropdown-item>
                  <el-dropdown-item @click="signOut">Sign out</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <div class="w-[35px] h-[35px] bg-black rounded-full">
              <img src="../assets/user.png" alt="" />
            </div>
          </div>
        </div>
      </header>
      <div class="flex max-[1400px]:block max-[1200px]:items-center max-[1400px]:justify-center h-[800px]">
        <el-tabs v-model="selectedTab" class="demo-tabs p-[10px]">
          <el-tab-pane v-for="category in categoriesStore.categories" :label="category" :name="category">
            <TableComponent @set-page="(page) => (currentPage = page)" @get-data="loadDataWithPage"
              :currentPage="currentPage" :total="jobsStore.meta.total_count" :isDataLoading="isDataLoading"
              :selectedTab="selectedTab" :table-data="jobsStore.jobs" />
          </el-tab-pane>
        </el-tabs>
        <div class="sidebar w-[250px] bg-white ml-auto sticky top-0 z-10">
          <div class="text-center mt-[20px]">
            <el-button @click="isFiltersShowed = !isFiltersShowed">{{
              isFiltersShowed? "Hide Filters": "Show Filters"
            }}</el-button>
          </div>
          <div class="max-[1400px]:mt-[-360px] max-[1400px]:bg-white" v-show="isFiltersShowed">
            <SideBarFilters @accept-filters="acceptFilters" :options="options" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import TableComponent from "./TableComponent.vue";
import { useRouter } from "vue-router";

import { useJobsStore } from "../stores/jobs";

import { useCategoriesStore } from "../stores/categories";

import { api } from "../api/api";
import SideBarFilters from "./SideBarFilters.vue";
import { usePersonalNameStore } from "../stores/personalName";

const jobsStore = useJobsStore();
const categoriesStore = useCategoriesStore();
const personalNameStore = usePersonalNameStore();
const router = useRouter();

const selectedTab = ref<string>("ruby");
const currentPage = ref(1);

const isFiltersShowed = ref(false);
const isDataLoading = ref(false);
interface Filters {
  unbidded: boolean;
  bidded: boolean;
  period: boolean;
  qualifications: {
    selectedOption: string;
  };
}

interface Options {
  value: string;
  label: string;
}

const options = ref<Options[]>([
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
]);

const signOut = () => {
  router.push("login");
};

const acceptFilters = (filters: Filters) => {
  console.log(filters);
};

const getJobs = async (page: number, job: string) => {
  isDataLoading.value = true;
  try {
    const { data } = await api.jobs.getJobs(page, job);

    jobsStore.jobs = data.jobs;

    console.log("JOBS", jobsStore.jobs);
  } catch (error) {
    isDataLoading.value = false;
    console.log(error);
  }
  isDataLoading.value = false;
};

const getMeta = async (page: number, job: string) => {
  try {
    const { data } = await api.jobs.getJobs(page, job);

    jobsStore.meta = data.meta;
  } catch (error) {
    isDataLoading.value = false;
    console.log(error);
  }
  isDataLoading.value = false;
};

const getCategories = async () => {
  try {
    const { data } = await api.categories.getCategories();
    categoriesStore.categories = data;
  } catch (error) {
    // isLoading.value = false;
    // toast.error("Error: " + error, toastOptions);
    console.log(error);
  }
};

const loadDataWithPage = (page: number) => {
  currentPage.value = page;
  getJobs(page, selectedTab.value);
};

watch(selectedTab, (job) => {
  currentPage.value = 1;
  getMeta(currentPage.value, job);
  getJobs(currentPage.value, job);
});

onMounted(() => {
  getJobs(currentPage.value, selectedTab.value);
  getMeta(currentPage.value, selectedTab.value);
  getCategories();
});
</script>

<style scoped>
.header {
  grid-area: header;
}

.sidebar {
  grid-area: menu;
}

.main {
  grid-area: main;
}

.grid-container {
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "main main main main main menu";
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
