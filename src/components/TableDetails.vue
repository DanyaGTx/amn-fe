<template>
  <div
    @click="openDeatils"
    class="cursor-pointer translate-y-[-23px] float-left ml-6 flex"
  >
    <h3>{{ !isDetailsOpened ? "details" : "hide" }}</h3>
    <img
      :class="{ 'rotate-90 ': !isDetailsOpened }"
      class="w-[18px] transition duration-300 ease-out"
      src="../assets/arrow-down.png"
      alt=""
    />
  </div>
  <tr v-show="isDetailsOpened">
    <td class="text-left">Base qualification</td>
  </tr>
  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Location:
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications.location.value }}
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications.location.score }}
    </td>
  </tr>

  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Duration:
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications.duration.value }}
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications.duration.score }}
    </td>
  </tr>

  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Workload:
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications.workload.value }}
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications.workload.score }}
    </td>
  </tr>
  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Client Rating:
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications.client_rating.value }}
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications.client_rating.score }}
    </td>
  </tr>
  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Fixed price:
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications.fixed_price.value }}
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications.fixed_price.score }}
    </td>
  </tr>
  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Job snippet:
    </td>
    <td class="border-r"></td>
    <td class="border-r"></td>
    <td
      rowspan="1"
      colspan="4"
      class="text-[13px] text-gray-900 font-light border-r text-left p-[10px]"
    >
      <p class="">{{ props.snippet }}</p>
    </td>
  </tr>
  <tr v-show="isDetailsOpened">
    <td class="text-left">Full qualification</td>
  </tr>
  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Expertise
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications?.expertise?.value }}
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications?.expertise?.score }}
    </td>
  </tr>
  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Client Spent
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications?.client_spent?.value }}
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications?.client_spent?.score }}
    </td>
  </tr>
  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Looking for an agency
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications?.looking_for_agency?.value }}
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications?.looking_for_agency?.score }}
    </td>
  </tr>
  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Prev Freelance Review
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications?.prev_freelancer_reviews?.value }}
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications?.prev_freelancer_reviews?.score }}
    </td>
  </tr>
  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Interview Hiring
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications?.interview_hiring?.value }}
    </td>
    <td
      class="text-sm text-gray-900 font-light text-center whitespace-nowrap border-r"
    >
      {{ props.qualifications?.interview_hiring?.score }}
    </td>
  </tr>
  <tr v-show="isDetailsOpened" class="border border-black bg-orange-200">
    <td
      class="text-sm text-gray-900 font-light text-left pl-[25px] whitespace-nowrap border-r"
    >
      Job Skills:
    </td>
    <td></td>
    <td class="border-l"></td>
    <td
      rowspan="1"
      colspan="2"
      class="text-sm text-gray-900 font-light whitespace-nowrap border-r border-l text-left p-[10px]"
    >
      Skills:
      <p v-for="skill in props.skills">{{ skill }}</p>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

interface qualifications {
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
  };
  prev_freelancer_reviews: {
    value: string;
    score: number;
  };
  expertise: {
    value: string;
    score: number;
  };
}

interface Props {
  qualifications: qualifications;
  currentPage: number;
  q_points: string | number;
  snippet: string;
  skills: string[];
}

const props = defineProps<Props>();

const isDetailsOpened = ref(false);

const openDeatils = () => {
  isDetailsOpened.value = !isDetailsOpened.value;
};

watch(
  () => props.currentPage,
  () => {
    return (isDetailsOpened.value = false);
  }
);
</script>

<style></style>
