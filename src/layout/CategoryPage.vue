<script setup lang="ts">
import { reactive, ref } from 'vue'
import { categoryData, productData } from '../FakeData'
import ProductBox from '@/components/ProductBox.vue'
interface Category {
  title: string
  detail: string[]
}
const setCategorySelectBox = (categoryData: Category[]): Array<any> => {
  let arr: any[] = []
  const newCasetCategoryBox = categoryData.map((obj) => {
    arr = obj.detail.map((o) => {
      return {
        text: o,
        status: false,
      }
    })
    return {
      title: obj.title,
      detail: arr,
    }
  })

  return newCasetCategoryBox
}
const categoryItems = reactive(setCategorySelectBox(categoryData))

const productItemsInfo = reactive(productData)
const categoryByText = reactive({
  title: 'Sort by',
  detail: [
    'Best Sellers',
    'Name: A - Z',
    'Name: Z - A',
    'Price: Low to High',
    'Price: High to Low',
    'Newest',
  ],
})
</script>

<template>
  <div class="relative bottom-5rem">
    <h2 class="pageTitle flex justify-center top-5rem">
      <slot name="title" />
      Title
    </h2>
    <div class="pr-60 pl-60 py-10 bgColor">
      <div class="w-100% h-100%">
        <div class="category flex justify-between">
          <div class="w-60%">
            <div class="flex justify-around h-44px pb-10">
              <slot name="category" />
              <CategoryButton
                v-for="(item,index) in categoryItems"
                :key="index" :category="item"
              />
            </div>
          </div>
          <div class=" categoryFont w-40% flex flex-row-reverse">
            <CategoryButton :category="categoryByText" />
          </div>
        </div>
        <div class="flex-wrap flex justify-around w-100%">
          <ProductBox
            v-for="(item,index) in productItemsInfo" :key="index"
            :productInfo="item"
            class="space-x-6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pageTitle{
    position: relative;
    font-family: "freight-big-pro";
    font-weight: 300;
    font-size: 4.10989rem;
    line-height: 4.10989rem;
    color: #353535;
    ::after {
    content: "";
    display: block;
    background: #F7F7F7;
    position: absolute;
    bottom: 0;
    height: 47%;
    width: 100%;
  }
}
.bgColor{
  background-color: #F7F7F7;
}
.sortFont{
  color: black;
}

</style>
