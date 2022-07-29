<script setup lang="ts">
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/brace-style */

import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  bedRoomType, diningType,
  furnitureType, kitchenType,
  priceOption,
  productsData, quickShipOption, sortOption
} from '../FakeData'
import type { OriginOption, ProductInfo } from '~/interfaceDict'
import ProductBox from '~/components/ProductBox.vue'
import CategoryMenu from '~/components/CategoryMenu.vue'
import CategoryMenuMobile from '~/components/CategoryMenuMobile.vue'

const route = useRoute()
const router = useRouter()
const totalProducts: Ref<ProductInfo[]> = ref(productsData)
const productItemsInfo = computed(() => {
  const filterProducts = totalProducts.value.filter((p) => {
    return p.category.toLocaleLowerCase() === route.params.category
  })
  return filterProducts
})
const setupCategorySelectOptions = (options: OriginOption) => {
  const arr = options.details.map((c) => {
    return {
      text: c,
      status: false,
    }
  })
  return {
    title: {
      content: options.title,
      status: false
    },
    details: arr,
    category: options.category
  }
}
// const category = ref(route.params.category as string)
const category = computed(() => {
  if (typeof route.params.category === 'string')
    return route.params.category
  return 'bedRoom'
})
// 選項:是否七天
const quickShipCondition = ref(setupCategorySelectOptions(quickShipOption))
// 選項:價格
const priceCondition = ref(setupCategorySelectOptions(priceOption))
// 選項:type
const categorySelectCondition = computed(() => {
  if (category.value === 'furniture') return setupCategorySelectOptions(furnitureType)
  if (category.value === 'dining') return setupCategorySelectOptions(diningType)
  if (category.value === 'kitchen') return setupCategorySelectOptions(kitchenType)
  return setupCategorySelectOptions(bedRoomType)
})
const sortOptions = ref(setupCategorySelectOptions(sortOption))
const productsOptions = computed(() => {
  return [quickShipCondition.value, priceCondition.value, categorySelectCondition.value]
})
const filteredProducts = computed(() => {
  let filterProdictsArr = productItemsInfo.value.filter((p, index) => {
    if (quickShipCondition.value.details[0].status)
      if (!p.quickShip) return false

    const enabledTypes = categorySelectCondition.value.details.filter(d => d.status)
    if (enabledTypes.length > 0)
      if (enabledTypes.filter(t => t.text === p.type).length === 0) return false

    const enablePrices = priceCondition.value.details.filter(d => d.status)
    if (enablePrices.length > 0) {
      let result = false
      for (const data of enablePrices) {
        const text = data.text
        const price = p.productPrice
        if (text === '$50 to $100') {
          if (price >= 50 && price <= 100) result = true
        } else if (text === '$100 to $250') {
          if (price >= 100 && price <= 250) result = true
        }
        else if (text === '$250 to $500') {
          if (price >= 250 && price <= 500) result = true
        }
        else if (text === '$500 to $1000') {
          if (price >= 500 && price <= 1000) result = true
        }
        else if (text === 'More then $1000') {
          if (price >= 1000) result = true
        }
      }
      if (!result) return false
    }

    return true
  })
  const enableSort = sortOptions.value.details.filter(d => d.status)
  if (enableSort.length > 0) {
    const sortMode = enableSort[0].text
    const productsName = filterProdictsArr.map(n => n.productName)
    const productsPrice = filterProdictsArr.map(n => n.productPrice)
    if (sortMode === 'Name: A - Z') {
      const AtoZProducts: ProductInfo[] = []
      const AtoZProductsName = productsName.sort()
      AtoZProductsName.forEach((name) => {
        const [productInfo] = filterProdictsArr.filter(p => p.productName === name)
        if (productInfo) AtoZProducts.push(productInfo)
      })
      filterProdictsArr = AtoZProducts
    }
    if (sortMode === 'Name: Z - A') {
      const ZtoAProducts: ProductInfo[] = []
      const ZtoAProductsName = productsName.sort().reverse()
      ZtoAProductsName.forEach((name) => {
        const [productInfo] = filterProdictsArr.filter(p => p.productName === name)
        if (productInfo) ZtoAProducts.push(productInfo)
      })
      filterProdictsArr = ZtoAProducts
    }
    if (sortMode === 'Price: Low to High') {
      const heightPriceProductsFirst: ProductInfo[] = []
      const heightToLowPrices = productsPrice.sort((a, b) => {
        if (a > b) return 1
        if (a < b) return -1
        return 0
      })
      const copyProdictsArr = filterProdictsArr
      heightToLowPrices.forEach((price) => {
        const priceIndex = copyProdictsArr.findIndex(p => p.productPrice === price)
        if (priceIndex > -1) {
          heightPriceProductsFirst.push(copyProdictsArr[priceIndex])
          copyProdictsArr.splice(priceIndex, 1)
        }
      })
      filterProdictsArr = heightPriceProductsFirst
    }
    if (sortMode === 'Price: High to Low') {
      const heightPriceProductsFirst: ProductInfo[] = []
      const heightToLowPrices = productsPrice.sort((a, b) => {
        if (a > b) return -1
        if (a < b) return 1
        return 0
      })
      const copyProdictsArr = filterProdictsArr
      heightToLowPrices.forEach((price) => {
        const priceIndex = copyProdictsArr.findIndex(p => p.productPrice === price)
        if (priceIndex > -1) {
          heightPriceProductsFirst.push(copyProdictsArr[priceIndex])
          copyProdictsArr.splice(priceIndex, 1)
        }
      })
      filterProdictsArr = heightPriceProductsFirst
    }
  }
  return filterProdictsArr
})
const pages = ref({
  current_page: 1,
  displayAllProducts: filteredProducts.value.length,
  pageSize: 9
})
const displayProducts = computed(() => {
  const start = pages.value.current_page - 1
  const showProducts = filteredProducts.value.slice(start * 9, start * 9 + 9)
  return showProducts
})
const clickPage = (value: any) => {
  pages.value.current_page = value
}
const goProductPage = (propductInfo: ProductInfo): void => {
  const pathString = propductInfo.productName.replaceAll(/\s/g, '-')
  router.push({ path: `${propductInfo.type}/products/${pathString}` })
}
const showMobileFiltersMenu = ref(false)
const showMobileSortByMenu = ref(false)
</script>

<template>
  <div class="relative bg-light-50 pt-10">
    <div class="textHalfInBgColor">
      <div class="pageTitle flex justify-center bg-light-50">
        {{ category.toUpperCase() }}
      </div>
    </div>

    <div class="bgColor w-100%">
      <div class="buttonMenu mobile pl-10px pr-10px">
        <div class="flex justify-center">
          <div
            class="w-50% bg-light-50 p-10px border flex justify-center"
            style="color:black"
            @click="showMobileFiltersMenu = !showMobileFiltersMenu"
          >
            <span class="noSelect text-center text-base font-semibold">Filters</span>
            <i-uil:angle-down />
          </div>
          <div
            class="w-50% bg-light-50 p-10px border flex justify-center"
            style="color:black"
            @click="showMobileSortByMenu = !showMobileSortByMenu"
          >
            <span class="noSelect text-center text-base font-semibold">SortBy</span>
            <i-uil:angle-down />
          </div>
        </div>

        <div class="relative w-100%">
          <CategoryMenuMobile
            v-if="showMobileFiltersMenu"
            style="z-index:1"
            :filters="productsOptions"
            mode="checkBox"
          />
          <CategoryMenuMobile
            v-if="showMobileSortByMenu"
            class="absoultTop0 windowWidthReduce2"
            style="z-index:2"
            :sortBy="sortOptions"
            mode="select"
          />
        </div>
      </div>

      <div class="py-10 mx-auto flex flex-col" style="max-width:1366px">
        <div class="buttonMenu pc w-100% h-100% ">
          <div class="category flex justify-between">
            <div class="w-60%">
              <div class="flex h-44px pb-10">
                <CategoryMenu
                  v-for="(item, index) in productsOptions"
                  :key="index"
                  :option="item"
                  mode="checkBox"
                />
              </div>
            </div>
            <div class="w-40% flex flex-row-reverse">
              <CategoryMenu
                :mode="'radio'"
                :option="sortOptions"
              />
            </div>
          </div>
          <!-- nowShowProductsArr -->
        </div>
        <div class="flex-wrap flex w-100% boxItemSpace-x">
          <ProductBox
            v-for="(item, index) in displayProducts"
            :key="index"
            :productInfo="item"
            class="productBox p-10px"
            @to-productpage="goProductPage"
          />
        </div>
        <el-pagination
          background
          layout="next, pager, prev"
          :page-size="pages.pageSize"
          :total="pages.displayAllProducts"
          class="flex flex-row-reverse"
          @current-change="clickPage"
          @prev-click="pages.current_page--"
          @next-click="pages.current_page++"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pageTitle {
  position: relative;
  z-index: 1;
  margin: 0;
  font-family: 'freight-big-pro';
  font-weight: 300;
  font-size: 4.10989rem;
  line-height: 4.10989rem;
  color: #353535;
}
.textHalfInBgColor{
  ::after{
    z-index: -1;
    content: '';
    display: block;
    background: #f7f7f7;
    position: absolute;
    bottom: 0;
    height: 47%;
    width: 100%;
  }
}
.windowWidthReduce2{
  width: calc(100% - 2px);
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
.border{
  border:1px solid #dfdfdf
}
.absoultTop0{
  position: absolute;
  top:0;
}
.buttonMenu.mobile{
  display: none;
}
.boxItemSpace-x{
    --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}

@media screen and (max-width:768px) {
  .pageTitle{
    font-size: 1.5rem;
  }
  .buttonMenu{
    &.pc{
      display: none;
    }
    &.mobile{
      display: inherit;
    }
  }
}
</style>
