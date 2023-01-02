<template>
  <el-dialog
    v-model="props.dialogVisible"
    title="Modal Window"
    width="30%"
    :before-close="handleClose"
  >
    <span>Enter text</span>
    <el-input v-model="dialogInput" placeholder="Please input" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('close-dialog', false)">Cancel</el-button>
        <el-button type="primary" @click="handleClose"> Confirm </el-button>
        <p v-for="(qualification, index) in props.dialogWindowData.qualification_scores">{{ index }}: {{ qualification  }}</p>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const dialogInput = ref("");

interface Job {
  title: string
  base_qualified: boolean
  full_qualified: boolean
  job_id: string
  lead_category: string
  publish_time: string
  snippet: string
  skills: string[],
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
  dialogVisible: boolean;
  dialogWindowData: Job
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "close-dialog", value: boolean): void;
}>();

const handleClose = () => {
  emit("close-dialog", false);
  console.log(dialogInput.value);
  dialogInput.value = "";
};
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
