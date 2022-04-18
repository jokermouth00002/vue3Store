<script setup lang="ts">
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/brace-style */

import { computed, onUpdated, reactive, ref, watch } from 'vue'
import { categoryData, productData } from '../FakeData'
import ProductBox from '~/components/ProductBox.vue'
import CategoryMenu from '~/components/CategoryMenu.vue'
interface Category {
  title: string
  detail: string[]
}
interface ProductInfo {
  imgSource: string
  productName: string
  productPrice: number
}

const productItemsInfo = reactive(productData)
const productsNumber = ref(productItemsInfo.length)
const categoryByText = [
  {
    title: 'Sort by',
    detail: [
      'Best Sellers',
      'Name: A - Z',
      'Name: Z - A',
      'Price: Low to High',
      'Price: High to Low',
      'Newest',
    ],
  },
]
const nowPage = ref(1)
const pageSize = ref(20)
let nowShowProductsArr: Array<ProductInfo> = reactive(
  productItemsInfo.slice(0, pageSize.value + 1)
)
const setupCategorySelectOptions = (categoryData: Category[]) => {
  return categoryData.map((obj) => {
    const arr = obj.detail.map((content) => {
      return {
        text: content,
        status: false,
      }
    })
    return {
      title: obj.title,
      detail: arr,
    }
  })
}
const handleCurrentPage = (val: number): ProductInfo[] => {
  const deductProductNumber = (val - 1) * pageSize.value
  const residueProduct = productsNumber.value - deductProductNumber
  let start = 0
  let end = 0
  if (residueProduct > pageSize.value) {
    start = deductProductNumber - 1
    end = start++ + pageSize.value
  } else {
    start = deductProductNumber
    end = productsNumber.value + 1
  }

  nowShowProductsArr = productItemsInfo.slice(start, end + 1)
  return nowShowProductsArr
}
const categoryItems = reactive(setupCategorySelectOptions(categoryData))
const categorySortBy = reactive(setupCategorySelectOptions(categoryByText))
console.log(categoryItems, categorySortBy)

const showProduct = (option: any) => {
  console.log(option)
}
// const quickShipOptionStatus = computed(() => {
//   return categoryItems[0].detail.status
// })
// const typeOptionStatus = computed(() => {
//   return categoryItems[1].detail.status
// })
// const priceOptionStatus = computed(() => {
//   return categoryItems[2].detail.status
// })
// const sortByOptionStatus = computed(() => {
//   return categorySortBy[0].detail.status
// })

window.categoryItems = categoryItems
</script>

<template>
  <div class="relative">
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
              <CategoryMenu
                v-for="(item, index) in categoryItems"
                :key="index"
                :category="item"
                :test="showProduct"
              />
            </div>
          </div>
          <div class="categoryFont w-40% flex flex-row-reverse">
            <CategoryMenu :category="categorySortBy[0]" />
          </div>
        </div>
        <div class="flex-wrap flex justify-around w-100%">
          <ProductBox
            v-for="(item, index) in nowShowProductsArr"
            :key="index"
            :productInfo="item"
            class="space-x-6 w-25rem"
          />
        </div>
      </div>
      <div class="pt-20px flex flex-row-reverse">
        <el-pagination
          v-model:current-page="nowPage"
          layout="prev, pager, next"
          :page-size="pageSize"
          :total="productsNumber"
        />
        <!-- @current-change="handleCurrentPage"  -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pageTitle {
  position: relative;
  font-family: 'freight-big-pro';
  font-weight: 300;
  font-size: 4.10989rem;
  line-height: 4.10989rem;
  color: #353535;
  ::after {
    content: '';
    display: block;
    background: #f7f7f7;
    position: absolute;
    bottom: 0;
    height: 47%;
    width: 100%;
  }
}
.bgColor {
  background-color: #f7f7f7;
}
.sortFont {
  color: black;
}
.example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block {
  margin-bottom: 16px;
}
</style>
