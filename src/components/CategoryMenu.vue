<script setup lang="ts">
import { reactive, ref } from 'vue'
interface Category {
  title: string
  detail: { text: string; status: boolean }[]
}
const showDetail = ref(false)
const props = defineProps<{
  category: Category
}>()
const emit = defineEmits(['test'])
function selectedOption(option: { text: string; status: boolean }) {
  console.log('selectedOption', option)
  emit('test', '123')
  console.log('selectedOption end')
}
const category = reactive(props.category)
</script>
<template>
  <div
    style="z-index: 20"
    class="relative"
    @mouseover="showDetail = true"
    @mouseout="showDetail = false"
  >
    <div
      class="categoryButton w-max flex flex-col pointer"
      :class="{ hoverStyle: showDetail }"
    >
      <span class="font-semibold">
        {{ category.title }}
        <i class="fa-solid fa-angle-down" />
      </span>
    </div>

    <div
      class="
        categoryDetail
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
        v-for="(item, index) in category.detail"
        :key="index"
        class="bg-light-50 hidden pointer"
        :class="{ categoryDetailButton: showDetail }"
      >
        <el-checkbox
          v-model="item.status"
          size="large"
          class="w-100%"
          :label="item.text"
          @click="selectedOption"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.categoryButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid transparent;
}
.categoryDetailButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-top: 0;
}
.categoryDetail :deep(.el-checkbox__label) {
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
