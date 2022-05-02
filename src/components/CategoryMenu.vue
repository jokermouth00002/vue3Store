<script setup lang="ts">
import { ref } from 'vue'
interface Option {
  category: string
  title: string
  details: { text: string; status: boolean }[]
}
const showDetails = ref(false)
const props = defineProps<{
  option: Option
}>()
</script>
<template>
  <div
    style="z-index: 20"
    class="relative"
    @mouseover="showDetails = true"
    @mouseout="showDetails = false"
  >
    <div
      class="optionButton w-max flex flex-col pointer"
      :class="{ hoverStyle: showDetails }"
    >
      <span class="font-normal">
        {{ props.option.title }}
        <i class="fa-solid fa-angle-down" style="font-size:14px" />
      </span>
    </div>

    <div
      class="
        optionDetails
        flex flex-col
        w-max
        items-start
        absolute
        left-0
        top-10
        border
        bg-light-50
      "
    >
      <div
        v-for="(item, index) in props.option.details"
        :key="index"
        class="bg-light-50 hidden pointer"
        :class="{ optionDetailsButton: showDetails }"
      >
        <el-checkbox
          v-model="item.status"
          size="large"
          class="w-100%"
          :label="item.text"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.optionButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid transparent;
}
.optionDetailsButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-top: 0;
}
.optionDetails :deep(.el-checkbox__label) {
  font-size: 20px;
}
.border {
  border: 1px solid #dfdfdf;
}
.hoverStyle {
  background-color: white;
  border: 1px solid #dfdfdf;
}
</style>
