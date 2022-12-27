<template>
  <div class="relative">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="id" width="50" />
      <el-table-column prop="job" label="Job Name" width="100" />
      <el-table-column
        prop="baseQualification"
        label="Base qualification"
        width="180"
      />
      <el-table-column
        prop="fullQualification"
        label="Full qualification"
        width="180"
      />
      <el-table-column prop="publishTime" label="Publish time" width="120" />
      <el-table-column prop="publishDays" label="Publish days" width="120" />
      <el-table-column prop="score" label="Score" width="100" />
      <el-table-column prop="fullScore" label="Full score" width="100" />
    </el-table>
    <img
      @click="openSettings"
      class="w-[40px] ml-auto cursor-pointer absolute top-[0px] right-[5px] z-10 p-[5px]"
      src="../assets/settings.png"
    />
    <DialogWindow
      @closeDialog="dialogVisible = false"
      :dialogVisible="dialogVisible"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElTable } from "element-plus";
import DialogWindow from "./DialogWindow.vue";

const dialogVisible = ref(false);

type TableData = {
  id: number;
  job: string;
  baseQualification: string;
  fullQualification: string;
  publishTime: string;
  publishDays: string;
  score: string;
  fullScore: string;
};

interface Props {
  tableData: TableData[];
}

const props = defineProps<Props>();

const openSettings = () => {
  dialogVisible.value = true;
};
</script>
