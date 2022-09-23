<script setup lang="ts">
import { ref, toRef } from 'vue'
import type { AddedStatusOption } from '~/interfaceDict'
const showDetails = ref(false)
const props = defineProps<{
  option?: AddedStatusOption | null
  mode: string
  sortBy?: AddedStatusOption
}>()
const sortBy = toRef(props, 'sortBy')
const option = toRef(props, 'option')
const chooseSortBy = (sortBy: AddedStatusOption | undefined, option: { text: string; status: boolean }) => {
  sortBy?.details.forEach((element) => {
    element.status = element.text === option.text
  })
}

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
      <div class="flex">
        <span v-if="option" class="font-normal">
          {{ option?.title.content }}
        </span>
        <span v-if="sortBy" class="font-normal">
          {{ sortBy.title.content }}
        </span>
        <i-uil:angle-down />
      </div>
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
      <div v-if="mode==='checkBox'">
        <div
          v-for="(item, index) in option?.details"
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
      <div v-if="mode==='select' && sortBy">
        <div
          v-for="(obj,index) in sortBy?.details" :key="index"
          class="hidden pointer" :class="[ {optionDetailsButton: showDetails},{choosedStyle:obj.status}]"
          @click="chooseSortBy(sortBy,obj)"
        >
          {{ obj.text }}
        </div>
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
.choosedStyle{
  font-weight: bold
}
</style>
