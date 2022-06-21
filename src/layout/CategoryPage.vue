<script setup lang="ts">
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/brace-style */

import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  bedRoomType, diningType,
  furnitureType, kitchenType,
  lightingType, priceOption,
  productsData, quickShipOption, sortOption
} from '../fakeData'
import type { OriginOption, ProductInfo } from '~/interfaceDict'
import ProductBox from '~/components/ProductBox.vue'
import CategoryMenu from '~/components/CategoryMenu.vue'
const route = useRoute()
const router = useRouter()

const totalProducts: Ref<ProductInfo[]> = ref(productsData)
const productItemsInfo = computed(() => {
  return totalProducts.value.filter((p) => {
    return p.category === route.params.category
  })
})

const productsNumber = ref(productItemsInfo.value.length)
const nowPage = ref(1)
const pageSize = ref(20)
const setupCategorySelectOptions = (options: OriginOption) => {
  const arr = options.details.map((content) => {
    return {
      text: content,
      status: false,
    }
  })
  return {
    title: options.title,
    details: arr,
    category: options.category
  }
}

// const handleCurrentPage = (val: number): ProductInfo[] => {
//   const deductProductNumber = (val - 1) * pageSize.value
//   const residueProduct = productsNumber.value - deductProductNumber
//   let start = 0
//   let end = 0
//   if (residueProduct > pageSize.value) {
//     start = deductProductNumber - 1
//     end = start++ + pageSize.value
//   } else {
//     start = deductProductNumber
//     end = productsNumber.value + 1
//   }

//   nowShowProductsArr = productItemsInfo.slice(start, end + 1)
//   return nowShowProductsArr
// }
const nowCategoryTypeOptions = computed(() => {
  if (route.params.category === 'bedRoom') return setupCategorySelectOptions(bedRoomType)
  if (route.params.category === 'furniture') return setupCategorySelectOptions(furnitureType)
  if (route.params.category === 'dining') return setupCategorySelectOptions(diningType)
  if (route.params.category === 'kitchen') return setupCategorySelectOptions(kitchenType)
  if (route.params.category === 'lighting') return setupCategorySelectOptions(lightingType)

  return setupCategorySelectOptions({
    title: 'error',
    details: ['errorOption'],
    category: 'error'
  })
})

const productsOptions = ref([
  setupCategorySelectOptions(quickShipOption),
  nowCategoryTypeOptions.value,
  setupCategorySelectOptions(priceOption)
])
const category = ref(route.params.category as string)
const sortOptions = ref(setupCategorySelectOptions(sortOption))
const filteredProducts = computed(() => {
  let filterProdictsArr = productItemsInfo.value.filter((p, index) => {
    const [quickShipCondition, categoryTypeCondition, priceConditions] = productsOptions.value
    if (quickShipCondition.details[0].status)
      if (!p.quickShip) return false

    const enabledTypes = categoryTypeCondition.details.filter(d => d.status)
    if (enabledTypes.length > 0)
      if (enabledTypes.filter(t => t.text === p.type).length === 0) return false

    const enablePrices = priceConditions.details.filter(d => d.status)
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

const toProductPage = (propductInfo: ProductInfo): void => {
  const pathString = propductInfo.productName.replaceAll(/\s/g, '-')
  router.push({ path: `${propductInfo.type}/products/${pathString}` })
}
</script>

<template>
  <div class="relative">
    <h2 class="pageTitle flex justify-center top-5rem">
      {{ category.toUpperCase() }}
    </h2>
    <div class="bgColor w-100%">
      <div class="py-10 mx-auto" style="max-width:1366px">
        <div class="w-100% h-100%">
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
            <div class="categoryFont w-40% flex flex-row-reverse">
              <CategoryMenu
                :mode="'radio'"
                :option="sortOptions"
              />
            </div>
          </div>
          <!-- nowShowProductsArr -->
          <div class="flex-wrap flex space-y-4 justify-around w-100%">
            <ProductBox
              v-for="(item, index) in filteredProducts"
              :key="index"
              :productInfo="item"
              class="space-x-6 w-25rem"
              @toProductPage="toProductPage"
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
