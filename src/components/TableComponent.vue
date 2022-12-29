<template> 
  <div class="relative">
    <el-table
      v-loading="isDataLoading"
      :data="props.tableData"
      border
      style="max-width: 1220px; height: 540px"
    >
      <el-table-column prop="title" label="Title" width="250" />
      <el-table-column prop="base_qualified" label="Base qualification" width="180" />
      <el-table-column prop="full_qualified" label="Full qualification" width="180" />
      <el-table-column prop="publish_time" label="Publish time" width="180" />
      <el-table-column prop="lead_category" label="Category" width="100" />
      <el-table-column prop="skills" label="Skills" width="200" />
      <el-table-column prop="setting" label="Settings" width="100">
        <template #default="scope">
          <img
          @click="openSettings(scope.$index, scope.row)"
          class="w-[30px] cursor-pointer"
          src="../assets/settings.png" />
        </template>
      </el-table-column>
    </el-table>
    
    <DialogWindow
      :dialogWindowData="dialogWindowData"
      @closeDialog="dialogVisible = false"
      :dialogVisible="dialogVisible"
    />
    <div class="mr-[20px] mt-[20px]">
      <el-pagination
        @current-change="setCurrentPage"
        :current-page="currentPage"
        :total="props.total"
        :page-size="pageSize"
        background
        layout="prev, pager, next"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElTable } from "element-plus";
import DialogWindow from "./DialogWindow.vue";
import { useJobsStore } from '../stores/jobs'

const emit = defineEmits<{
  (e: "get-data", page: number): void;
  (e: "set-page", page: number): void;
}>();

const pageSize = ref(5); //elements per page
const setCurrentPage = (page: number) => {
  emit('set-page', page)
  emit('get-data', page)
};

const dialogWindowData = ref()

const dialogVisible = ref(false);


const jobsStore = useJobsStore();

interface Job {
    title: string
    base_qualified: boolean
    full_qualified: boolean
    job_id: string
    lead_category: string
    publish_time: string
    skills: string[]
    details?: {
      baseQualification: {
        location: string,
        duration: string,
        workload: string,
        clienRating: number,
        FixedPrice: number
      },
      fullQualification: {
        expertise: string,
        clientSpent: number,
        lookingAgency: string,
      }
    }
}


interface Props {
  tableData: Job[];
  total: number
  selectedTab: string;
  isDataLoading: boolean
  currentPage: number
}

const props = defineProps<Props>();

const openSettings = (index: number, row: any) => {
  console.log(index,row);
  
  dialogVisible.value = true;
  
  dialogWindowData.value = row
};
</script>
