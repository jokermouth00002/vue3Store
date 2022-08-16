<script setup lang="ts" >
import { ref, toRef } from 'vue'
import type { AddedStatusOption } from '~/interfaceDict'
const props = defineProps<{
  sortBy?: AddedStatusOption
  filters?: AddedStatusOption[]
  mode: string
}>()
const sortBy = toRef(props, 'sortBy')
const chooseSortBy = (sortBy: AddedStatusOption | undefined, option: { text: string; status: boolean }) => {
  sortBy?.details.forEach((element) => {
    element.status = element.text === option.text
  })
}
const showFiltersDetail = ref('')
props.filters?.forEach((obj) => {
  showFiltersDetail.value = showFiltersDetail.value.concat(`${obj.title.content},`)
})
const filters = computed(() => {
  if (props.filters)
    return props.filters
  return null
})
const showOrHiedItem = (content: string): void => {
  // showFiltersDetail表示手機頁面商品選項展開/收起的開關，如果showFiltersDetail裡面沒有該選項則內容被折疊起來。
  if (showFiltersDetail.value.match(content))
    showFiltersDetail.value = showFiltersDetail.value.replace(`${content},`, '')
  else
    showFiltersDetail.value = showFiltersDetail.value.concat(`${content},`)
}
</script>

<template>
  <div class="bg-light-50 border relative" style="color:black">
    <div v-if="props.mode==='checkBox'">
      <div
        v-for="(item,index) in filters" :key="index"
        class="bg-light-50 flex flex-col"
        style="color:black"
      >
        <div class="borderBottom">
          <div
            class="flex justify-between  text-base p-10px"
            @click="showOrHiedItem(item.title.content)"
          >
            <span>{{ item.title.content }}</span>
            <i-uil:angle-down />
          </div>
          <div
            v-for="(obj,i) in item.details" :key="i"
            class="bg-light-50 flex justify-between text-sm font-base"
            :class="{'none':!showFiltersDetail.match(item.title.content)}"
          >
            <div class="flex px-10px">
              <el-checkbox
                v-model="obj.status"
                size="large"
                :label="obj.text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="props.mode==='select' && sortBy">
      <div
        v-for="(obj,i) in sortBy.details" :key="i"
        class="bg-light-50 p-10px flex justify-between text-sm font-base"
        :class="{choosedStyle:obj.status}"
        @click="chooseSortBy(sortBy,obj)"
      >
        <div class="px-10px">
          {{ obj.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.border {
  border: 1px solid #dfdfdf;
}
.borderBottom{
  border: 1px solid #dfdfdf;
  border-top:0;
  border-right:0;
  border-left:0
}
.none{
  display: none;
}
.choosedStyle{
  font-weight: bold
}

</style>
