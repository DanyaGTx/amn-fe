<template>
  <div class="relative">
    <div class="max-w-[1250px] max-h-[600px] flex flex-col" v-loading="isDataLoading">
      <div class="overflow-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table  v-if="jobsStore.jobs.length" class="border text-center min-h-[500px]">
              <thead class="border-b">
                <tr>
                  <th scope="col" class="text-sm font-medium px-6 py-4 text-gray-900 border-r p-2">
                    Title
                  </th>
                  <th scope="col" class="text-sm font-medium px-6 py-4 text-gray-900 border-r p-2">
                    Base qualification
                  </th>
                  <th scope="col" class="text-sm font-medium px-6 py-4 text-gray-900 border-r p-2">
                    QPoints
                  </th>
                  <th scope="col" class="text-sm font-medium px-6 py-4 text-gray-900 border-r p-2">
                    Full qualification
                  </th>
                  <th scope="col" class="text-sm font-medium px-6 py-4 text-gray-900 border-r p-2">
                    Publish time
                  </th>
                  <th scope="col" class="text-sm font-medium px-6 py-4 text-gray-900 border-r p-2">
                    Category
                  </th>
                  <th scope="col" class="text-sm font-medium px-6 py-4 text-gray-900 border-r p-2">
                    Settings
                  </th>
                </tr>
              </thead>
              <tbody>
                <template class="relative" v-for="tableRow in props.tableData">
                  <tr class="border">
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium border-r  text-left p-2">
                      <a class="underline text-blue-500" :href="tableRow.url" target="_blank">{{ tableRow.title }}</a>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r p-2">
                      {{ tableRow.base_qualified }}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r p-2">
                      {{ tableRow.qpoints }}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r p-2">
                      {{ tableRow.full_qualified }}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r p-2">
                      {{ formatDate(tableRow.publish_time) }}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r p-2">
                      {{ tableRow.lead_category }}
                    </td>
                    <td class="text-sm text-gray-900 font-light whitespace-nowrap border-r flex justify-center pt-[10px] p-2">
                      <img @click="openSettings(tableRow.job_id)" class="w-[40px] cursor-pointer text-center"
                        src="../assets/settings.png" />
                    </td>
                  </tr>
                    <TableDetails :snippet="tableRow.snippet" :skills="tableRow.skills" :q_points="tableRow.qpoints" :currentPage="props.currentPage"
                    :qualifications="tableRow.qualification_scores" />      
                </template>
              </tbody>
            </table>
            <div v-else-if="!isDataLoading" class="mb-[480px] text-[20px]">Oops, no jobs :(</div>
          </div>
        </div>
      </div>
    </div>

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
import { ElTable, InputNumberEmits } from "element-plus";
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
  qpoints: number;
  snippet: string,
  url: string;
  qualification_scores: {
    location: {
      value: string;
      score: number;
    };
    duration: {
      value: string;
      score: number;
    };
    workload: {
      value: string;
      score: number;
    };
    client_rating: {
      value: number;
      score: number;
    };
    client_spent: {
      value: string;
      score: number;
    };
    hourly_price: {
      value: string;
      score: number;
    };
    fixed_price: {
      value: string;
      score: number;
    };
    interview_hiring: {
      value: string;
      score: number;
    };
    looking_for_agency: {
      value: string;
      score: number;
    }
    prev_freelancer_reviews: {
      value: string;
      score: number;
    }
    expertise: {
      value: string;
      score: number;
    }
  };
}

interface Props {
  tableData: Job[];
  total: number;
  selectedTab: string;
  isDataLoading: boolean;
  currentPage: number;
}

const props = defineProps<Props>();

const openSettings = (data: string) => {
  // console.log(row);

  dialogVisible.value = true;
  console.log(data);

  // dialogWindowData.value = row;
};

const calculatedSizePagination = computed(() => {
  if (width.value <= 420) {
    return true;
  } else {
    return false;
  }
});
</script>

<style>
#resp-table {
  width: 100%;
  display: table;
}

#resp-table-body {
  display: table-row-group;
}

.resp-table-row {
  display: table-row;
}

.table-body-cell {
  display: table-cell;
  border: 1px solid #dddddd;
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
}
</style>
