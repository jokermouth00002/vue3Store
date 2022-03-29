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
const category = reactive(props.category)
// console.log(category, 'child')

</script>
<template>
  <div
    style="z-index:20" class="relative"
    @mouseover=" showDetail = true"
    @mouseout=" showDetail = false"
  >
    <div
      class="categoryButton w-max flex flex-col pointer"
      :class="{'hoverStyle':showDetail}"
    >
      <span class="font-semibold">
        {{ category.title }}
        <i class=" fa-solid fa-angle-down" />
      </span>
    </div>

    <div class="categoryDetail flex flex-col w-max items-start absolute left-0 top-10 border bg-light-50">
      <div
        v-for="(item,index) in category.detail" :key="index"
        class="bg-light-50 hidden pointer"
        :class="{'categoryDetailButton':showDetail}"
      >
        {{ item.text }}
        <!-- <Checkbox v-model:testA="testA" /> -->
        <el-checkbox v-model="item.status" :label="item.text" />
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
  border:1px solid transparent;
}
.categoryDetailButton{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-top: 0;
}
.border{
  border:1px solid #dfdfdf;
}
.hoverStyle{
  background-color: white;
  border:1px solid #dfdfdf;
}
</style>
