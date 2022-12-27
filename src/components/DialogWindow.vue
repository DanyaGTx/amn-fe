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
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const dialogInput = ref("");

interface Props {
  dialogVisible: boolean;
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
