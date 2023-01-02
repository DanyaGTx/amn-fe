<template>
    <div @click="openDeatils" class="flex cursor-pointer mt-[10px]">
        <h3 class="mr-[10px]">Open details</h3>
        <img class="w-[20px] " src="../assets/details.png" alt="" />
    </div>
    <div class="border-2 p-[5px]" v-show="isDetailsOpened">
        <p v-for="(qualification, key) in props.qualifications">{{ key }}: {{ qualification.value }} | Score: {{  qualification.score }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const isDetailsOpened = ref(false)

interface Props {
  qualifications: any;
  currentPage: number
}

const props = defineProps<Props>();

const openDeatils = (qualification: Object) => {
  isDetailsOpened.value = !isDetailsOpened.value
  console.log(qualification);
}


watch(() => props.currentPage, () => {
    return isDetailsOpened.value = false
});
</script>
