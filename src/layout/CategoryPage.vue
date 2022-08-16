<script setup lang="ts">
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/brace-style */

import type { Ref } from 'vue'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  bedRoomPriceOption, bedRoomType,
  diningPriceOption, diningType,
  furniturePriceOption, furnitureType, kitchenPriceOption, kitchenType,
  productsData, quickShipOption, sortOption
} from '../FakeData'
import type { OriginOption, ProductInfo } from '~/interfaceDict'
import ProductBox from '~/components/ProductBox.vue'
import CategoryMenu from '~/components/CategoryMenu.vue'
import CategoryMenuMobile from '~/components/CategoryMenuMobile.vue'
import RelatedProduct from '~/components/RelatedProduct.vue'
const route = useRoute()
const searchMode = computed(() => {
  const mode = route.path.split('/')[1]
  if (mode === 'search') return true
  return false
})
const searchWhat = computed(() => {
  return route.path.split('/')[2]
})
const totalProducts: Ref<ProductInfo[]> = ref(productsData)
const productItemsInfo = computed(() => {
  if (searchMode.value) {
    // search
    return totalProducts.value.filter((p) => {
      const productNameWithoutBlank = p.productName.replaceAll(' ', '').toLowerCase()
      const searchWhatWithoutPlus = searchWhat.value.replaceAll('+', '').toLowerCase()
      return productNameWithoutBlank.includes(searchWhatWithoutPlus)
    })
  } else {
    return totalProducts.value.filter((p) => {
      return p.category.toLocaleLowerCase() === route.params.category
    })
  }
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
const getCategoryProductsPriceRange = () => {
  if (category.value === 'furniture') return setupCategorySelectOptions(furniturePriceOption)
  if (category.value === 'dining') return setupCategorySelectOptions(diningPriceOption)
  if (category.value === 'kitchen') return setupCategorySelectOptions(kitchenPriceOption)
  return setupCategorySelectOptions(bedRoomPriceOption)
}
const priceCondition = ref(getCategoryProductsPriceRange())
console.log(priceCondition.value)
// 選項:type
const getCategorySelectCondition = () => {
  if (searchMode.value) return null
  if (category.value === 'furniture') return setupCategorySelectOptions(furnitureType)
  if (category.value === 'dining') return setupCategorySelectOptions(diningType)
  if (category.value === 'kitchen') return setupCategorySelectOptions(kitchenType)
  return setupCategorySelectOptions(bedRoomType)
}
const categorySelectCondition = ref(getCategorySelectCondition())
// 選項:字母排序
const sortOptions = ref(setupCategorySelectOptions(sortOption))
// 商品選項堆(template v-for)
const productsOptions = computed(() => {
  if (!searchMode.value)
    return [quickShipCondition.value, priceCondition.value, categorySelectCondition.value]
  return null
})

const filteredProducts = computed(() => {
  let filterProdictsArr = productItemsInfo.value.filter((p, index) => {
    if (quickShipCondition.value.details[0].status)
      if (!p.quickShip) return false

    if (categorySelectCondition.value) {
      const enabledTypes = categorySelectCondition.value.details.filter(d => d.status)
      if (enabledTypes.length > 0)
        if (enabledTypes.filter(t => t.text === p.type).length === 0) return false
    }

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

const filteredProductsLength = computed(() => {
  return filteredProducts.value.length
})
watch(route, (newVal, oldVal) => {
  // change category
  categorySelectCondition.value = getCategorySelectCondition()
  priceCondition.value = getCategoryProductsPriceRange()
  // reset option status
  if (productsOptions.value && productsOptions.value.length > 0) {
    productsOptions.value.forEach((element) => {
      element?.details.forEach((obj) => {
        obj.status = false
      })
    })
  }
})
const pages = ref({
  current_page: 1,
  displayAllProducts: filteredProductsLength,
  pageSize: 12,
})
const displayProducts = computed(() => {
  const start = pages.value.current_page - 1
  const showProducts = filteredProducts.value.slice(start * 12, start * 12 + 12)
  return showProducts
})
const clickPage = (value: any) => {
  pages.value.current_page = value
}

const showMobileFiltersMenu = ref(false)
const showMobileSortByMenu = ref(false)
</script>

<template>
  <div class="relative bg-light-50 pt-10px">
    <div class="textHalfInBgColor">
      <div class="pageTitle fontMaginia flex justify-center bg-light-50">
        {{ searchMode ? 'Search Results' : category.toUpperCase() }}
      </div>
    </div>

    <div class="lightGreen w-100% pl-10px pr-10px min-h-75vh" style="box-sizing:border-box">
      <div v-if="displayProducts.length>0" class="mobile buttonMenu">
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
            v-if="showMobileFiltersMenu && productsOptions"
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

      <div v-if="!searchMode && displayProducts.length>0" class="PC py-10 mx-auto flex flex-col" style="max-width:1366px">
        <div class="buttonMenu w-100% h-100% ">
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
            <div v-if="!searchMode" class="w-40% flex flex-row-reverse">
              <CategoryMenu
                :sortBy="sortOptions"
                :mode="'select'"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="searchMode" class="p-10 mx-auto">
        <div v-if="productItemsInfo.length>0" class="flex justify-center">
          <h5 style="color:black">
            FOR :
          </h5>
          <h5 class="font-light" style="color:black">
            {{ searchWhat.replaceAll('+', ' ') }}
          </h5>
        </div>
        <div v-if="productItemsInfo.length<1">
          <h4> {{ "Your search for"+"&#8221"+searchWhat.replaceAll('+', ' ')+"&#8221" +"returned no results." }} </h4>
          <span class="font-semibold text-base">Suggestions</span>
          <p class="indent text-base">
            Check for misspellings.
          </p>
          <p class="indent text-base">
            Remove possible redundant keywords (ie. "products").
          </p>
          <p class="indent text-base">
            Use other words to describe what you are searching for.
          </p>
          <span class="font-semibold text-base">Address</span>
          <p class="text-base">
            118 Q test St
          </p>
          <p class="text-base">
            Abc 105 D EF 17603
          </p>
          <span class="font-semibold text-base">Hours</span>
          <p class="text-base">
            M-F 9am - 5:30pm EST
          </p>
          <span class="font-semibold text-base">Call Us</span>
          <p class="text-base">
            (123)-456-7890
          </p>
          <span class="font-semibold text-base">Email</span>
          <p class="text-base">
            abc@ccc.com
          </p>
          <RelatedProduct
            class="PC"
            :productsArr="totalProducts"
            :slidesPerView="4"
            :slidesPerGroup="4"
            swiperWidth="800"
            text="More Ideas"
            title=""
          />
          <RelatedProduct
            class="mobile"
            :productsArr="totalProducts"
            :slidesPerView="1"
            :slidesPerGroup="1"
            swiperWidth="300"
            text="More Ideas"
            title=""
          />
        </div>
      </div>
      <div class="productWrapper">
        <div class="container">
          <ProductBox
            v-for="(item, index) in displayProducts"
            :key="index"
            :productInfo="item"
            class="productBox"
          />
        </div>
      </div>

      <el-pagination
        v-if="pages.displayAllProducts>pages.pageSize"
        background
        layout="next, pager, prev"
        :page-size="pages.pageSize"
        :total="pages.displayAllProducts"
        class=" flex flex-row-reverse"
        style="padding:2rem"
        @current-change="clickPage"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.pageTitle {
  position: relative;
  z-index: 1;
  margin: 0;
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
    height: 60%;
    width: 100%;
  }
}
.windowWidthReduce2{
  width: calc(100% - 2px);
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
.mobile{
  display: none;
}
.productWrapper{
  display: flex;
  justify-content: center;
  .container{
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
    margin:auto;
    .productBox{
      padding: 5px;
      --tw-space-x-reverse: 0;
      margin-right: calc(2rem * var(--tw-space-x-reverse));
      margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
    }
  }
}

@media screen and (max-width:768px) {
  .pageTitle{
    font-size: 1.5rem;
  }
  .mobile{
    display: inherit;
  }
  .PC{
    display: none;
  }
  .productWrapper{
    .container{
      .productBox{
        padding: 10px 0 0 0;
        width: 50%;
        display: flex;
        justify-content: center;
        margin-right: 0;
        margin-left: 0;
      }
    }
  }

}
</style>
