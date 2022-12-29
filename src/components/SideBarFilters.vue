<template>
    <div class="border-2 rounded-sm h-[300px] p-[10px] m-[20px]">
          <div>
            <el-checkbox
              v-model="filters.unbidded"
              label="unbidded"
              size="large"
            />
          </div>
          <div>
            <el-checkbox 
              v-model="filters.bidded"
              label="bidded" size="large" />
          </div>
          <div>
            <el-checkbox
             v-model="filters.period"
             label="period" size="large" />
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
</template>

<script lang="ts" setup>

interface Filters {
  unbidded: boolean,
  bidded: boolean,
  period: boolean,
  qualifications: {
    selectedOption: string
  }
}

interface Options {
  value: string,
  label: string
}


interface Props {
  filters: Filters;
  options: Options[]
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'accept-filters'): void
  (e: 'update:filters-unbidded', value: boolean): void
  (e: 'update:filters-bidded', value: boolean): void
  (e: 'update:filters-period', value: boolean): void
  (e: 'update:filters-qualifications-selectedOption', value: string): void
}>()

const acceptFilters = () => {
   emit('accept-filters')


}
</script>
