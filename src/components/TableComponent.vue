<template>
  <div class="relative">
    <el-table v-loading="isDataLoading" :data="props.tableData" border style="max-width: 1250px; height: 540px">
      <el-table-column label="Title" width="350">
        <template #default="scope">
          <p>{{ scope.row.title }}</p>
          <TableDetails :currentPage="props.currentPage" :qualifications="scope.row.qualification_scores" />
        </template>
      </el-table-column>
      <el-table-column prop="base_qualified" label="Base qualification" width="180" />
      <el-table-column prop="qpoints" label="QPoints" width="80" />
      <el-table-column prop="full_qualified" label="Full qualification" width="180" />
      <el-table-column prop="publish_time" label="Publish time" width="180">
        <template #default="scope">
          <p>{{ formatDate(scope.row.publish_time) }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="lead_category" label="Category" width="100" />
      <el-table-column prop="skills" label="Skills" width="200" />
      <el-table-column prop="setting" label="Settings" width="100">
        <template #default="scope">
          <img @click="openSettings(scope.$index, scope.row)" class="w-[30px] cursor-pointer"
            src="../assets/settings.png" />
        </template>
      </el-table-column>
    </el-table>

    <DialogWindow :dialogWindowData="dialogWindowData" @closeDialog="dialogVisible = false"
      :dialogVisible="dialogVisible" />
    <div class="mr-[20px] mt-[20px]">
      <el-pagination @current-change="setCurrentPage" :current-page="currentPage" :total="props.total"
        :page-size="pageSize" background :small="calculatedSizePagination" layout="prev, pager, next" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import { ElTable } from "element-plus";
import { useJobsStore } from "../stores/jobs";
import { computed } from "@vue/reactivity";

import formatDate from "../utils/formatDate";

import DialogWindow from "./DialogWindow.vue";
import TableDetails from "./TableDetails.vue";

const emit = defineEmits<{
  (e: "get-data", page: number): void;
  (e: "set-page", page: number): void;
}>();

const pageSize = ref(5); //elements per page
const setCurrentPage = (page: number) => {
  emit("set-page", page);
  emit("get-data", page);
};

const dialogWindowData = ref();

const dialogVisible = ref(false);

const jobsStore = useJobsStore();

const { width } = useWindowSize();

interface Job {
  title: string;
  base_qualified: boolean;
  full_qualified: boolean;
  job_id: string;
  lead_category: string;
  publish_time: string;
  skills: string[];
  qualification_scores: {
    location: {
      value: string,
      score: number
    },
    duration: {
      value: string,
      score: number
    },
    workload: {
      value: string,
      score: number
    },
    client_rating: {
      value: number,
      score: number
    },
    fixed_price: {
      value: string,
      score: number
    }
  },
}

interface Props {
  tableData: Job[];
  total: number;
  selectedTab: string;
  isDataLoading: boolean;
  currentPage: number;
}

const props = defineProps<Props>();

const openSettings = (index: number, row: any) => {
  console.log(row);

  dialogVisible.value = true;

  dialogWindowData.value = row;
};

const calculatedSizePagination = computed(() => {
  if (width.value <= 420) {
    return true;
  } else {
    return false;
  }
});
</script>
