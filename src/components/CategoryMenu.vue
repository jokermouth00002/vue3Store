<script setup lang="ts">
import { ref, toRef } from 'vue'
import type { AddedStatusOption } from '~/interfaceDict'
const showDetails = ref(false)
const props = defineProps<{
  option: AddedStatusOption
  mode: string
  sortBy?: string
}>()
const option = toRef(props, 'option')

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
        <span class="font-normal">
          {{ option.title.content }}
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
      <!-- <div v-if="mode==='checkBox'">
      </div> -->
      <div
        v-for="(item, index) in option.details"
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
      <!-- <div v-if="mode==='radio'">
        <el-radio-group v-model="sortBy" class="ml-4">
          <el-radio
            v-for="(item,index) in option.details"
            :key="index"
            class="bg-light-50 hidden pointer"
            :label="item.text" size="large"
          >
            {{ item.text }}
          </el-radio>
        </el-radio-group>
      </div> -->
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
