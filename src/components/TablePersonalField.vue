<template>
  <input
    @keyup.enter="saveName"
    placeholder="Enter name"
    type="text"
    class="h-[50px] text-[15px] max-w-[100px] p-[5px] text-black"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const personalName = ref("");
const saveName = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    personalName.value = event.target.value;

    console.log(personalName.value);

    //function that will send put request
    // sendPersonalName(personalName.value)
   

    event.target.blur();
  }
};

// const sendPersonalName = async (personalName: string) => {
//   try {
//     const { data } = await api.jobs.sendPersonalName(personalName.value);
//     // ... = data 

//   } catch (error) {
//     console.log(error);
//   }
// } 
</script>

<style lang="scss" scoped></style>
