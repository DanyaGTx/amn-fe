<template>
  <div class="max-w-[1500px] m-auto border-2 border-white mt-[10px] w-full">
    <div class="grid-container w-full">
      <header class="header h-[70px] bg-white border-b-2 border-white">
        <div class="flex justify-between items-center">
          <h1 class="text-[30px] mt-2 ml-2">Upwork Leads</h1>
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
              <img src="../assets/user.png" alt="">
            </div>
          </div>
        </div>
      </header>
      <div class="sidebar h-[700px] w-[250px] bg-white ml-auto sticky top-0 z-10">
        <div class="border-2 rounded-sm h-[300px] p-[10px] m-[20px]">
          <div>
            <el-checkbox
              v-model="filters.unbidded"
              label="unbidded"
              size="large"
            />
          </div>
          <div>
            <el-checkbox v-model="filters.bidded" label="bidded" size="large" />
          </div>
          <div>
            <el-checkbox v-model="filters.period" label="period" size="large" />
          </div>
          <div class="mt-[10px]">
            <h2>Qualifications</h2>
            <el-select
              v-model="filters.qualifications.selectedOption"
              class="m-2"
              placeholder="Select"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="text-center mt-[10px]">
            <el-button @click="acceptFilters" type="success">Accept filters</el-button>
          </div>
          
        </div>
      </div>
      <div class="main">
        <el-tabs v-model="selectedTab" class="demo-tabs p-[10px]">
          <el-tab-pane label="Tab 1" name="table-one"
            ><TableComponent :table-data="paginationData"
          /></el-tab-pane>
          <el-tab-pane label="Tab 2" name="table-two"
            ><TableComponent :table-data="paginationData"
          /></el-tab-pane>
        </el-tabs>
        <div class="flex justify-between items-center">
          <div
            class="p-[15px] mt-[50px]"
          >
            <p>Parsing information:</p>
            <h3>Date: 2022-07-12</h3>
            <h3>New jobs - 30</h3>
            <h3>Base qualified - 5</h3>
            <h3>Full qualified - 10</h3>
            <h3>Current Tab: {{ selectedTab }}</h3>
            <h3>Page on this tab: {{ currentPage }}</h3>
          </div>
          <div class="mr-[20px]">
            <el-pagination @current-change="setCurrentPage" :current-page="currentPage" :total="tableDataOne.length" :page-size="pageSize" background layout="prev, pager, next" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,computed, watch } from "vue";
import TableComponent from "./TableComponent.vue";
import { useRouter } from "vue-router";


const router = useRouter();


const selectedTab = ref<string>("table-one");

interface TableData {
  id: number;
  job: string;
  baseQualification: string;
  fullQualification: string;
  publishTime: string;
  publishDays: string;
  score: string;
  fullScore: string;
}

const filters = ref({
  unbidded: false,
  bidded: false,
  period: false,
  qualifications : {
    selectedOption: ''
  }
});


const tableDataOne = ref<TableData[]>([
  {
    id: 1,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
  {
    id: 2,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
  {
    id: 3,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
  {
    id: 4,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
  {
    id: 5,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
  {
    id: 6,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
  {
    id: 7,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
  {
    id: 1,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
  {
    id: 2,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
  {
    id: 3,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
  {
    id: 4,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
  {
    id: 5,
    job: "developer",
    baseQualification: "junior",
    fullQualification: "full stack",
    publishTime: "15:26",
    publishDays: "27.12.2022",
    score: "1200",
    fullScore: "8000",
  },
]);
const tableDataTwo = ref<TableData[]>([
  {
    id: 1,
    job: "manager",
    baseQualification: "senior",
    fullQualification: "sales",
    publishTime: "11:00",
    publishDays: "17.12.2022",
    score: "6000",
    fullScore: "12000",
  },
  {
    id: 2,
    job: "manager",
    baseQualification: "senior",
    fullQualification: "sales",
    publishTime: "11:00",
    publishDays: "17.12.2022",
    score: "6000",
    fullScore: "12000",
  },
  {
    id: 3,
    job: "manager",
    baseQualification: "senior",
    fullQualification: "sales",
    publishTime: "11:00",
    publishDays: "17.12.2022",
    score: "6000",
    fullScore: "12000",
  },
  {
    id: 4,
    job: "manager",
    baseQualification: "senior",
    fullQualification: "sales",
    publishTime: "11:00",
    publishDays: "17.12.2022",
    score: "6000",
    fullScore: "12000",
  },
  {
    id: 5,
    job: "manager",
    baseQualification: "senior",
    fullQualification: "sales",
    publishTime: "11:00",
    publishDays: "17.12.2022",
    score: "6000",
    fullScore: "12000",
  },
  {
    id: 6,
    job: "manager",
    baseQualification: "senior",
    fullQualification: "sales",
    publishTime: "11:00",
    publishDays: "17.12.2022",
    score: "6000",
    fullScore: "12000",
  },
  {
    id: 7,
    job: "manager",
    baseQualification: "senior",
    fullQualification: "sales",
    publishTime: "11:00",
    publishDays: "17.12.2022",
    score: "6000",
    fullScore: "12000",
  },
  {
    id: 8,
    job: "manager",
    baseQualification: "senior",
    fullQualification: "sales",
    publishTime: "11:00",
    publishDays: "17.12.2022",
    score: "6000",
    fullScore: "12000",
  },
]);

const options = [
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
];


const signOut = () => {
  router.push('login');
}

const currentPage = ref<number>(1)
const pageSize = ref<number>(7) //elements per page

const setCurrentPage = (page: number) => {
  currentPage.value = page
}

const paginationData = computed(() => {
  if(selectedTab.value === 'table-one') {
    if (!tableDataOne.value || tableDataOne.value.length === 0) return [];
        return tableDataOne.value.slice(pageSize.value * currentPage.value - pageSize.value, pageSize.value * currentPage.value)
  } else if(selectedTab.value === 'table-two') {
    if (!tableDataTwo.value || tableDataTwo.value.length === 0) return [];
        return tableDataTwo.value.slice(pageSize.value * currentPage.value - pageSize.value, pageSize.value * currentPage.value)
  } else {
    return tableDataOne.value
  }
})

watch(selectedTab, () => {
  console.log('changed');
  
  currentPage.value = 1
});


const acceptFilters = () => {
  console.log(filters.value)
}

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

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
