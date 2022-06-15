<script lang="ts" setup>
import { inject, ref } from 'vue'
import InnerImageZoom from 'vue-inner-image-zoom'
import RelatedProduct from '../components/RelatedProduct.vue'
import { productsData } from '../FakeData'
import ProductDetail from '~/components/ProductDetail.vue'

const value = ref('')
const addFavorite = ref(false)
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const num = ref(0)
</script>
<template>
  <div class="max-w-1366px mx-auto">
    <div class="flex w-100%">
      <div w="2/3">
        <div class="flex items-center noSelect calcHeight">
          <div class="flex flex-col items-center">
            <i-ion-ios-arrow-up class="pb-1rem pointer" />
            <img
              class="w-80px h-80px pb-10px pointer"
              src="//cdn.shopify.com/s/files/1/1087/6904/products/83fa05ceb61f887a7e5731c2cd61f181_1400x.jpg?v=1571438954"
            >
            <img
              class="w-80px h-80px pb-10px pointer"
              src="//cdn.shopify.com/s/files/1/1087/6904/products/83fa05ceb61f887a7e5731c2cd61f181_1400x.jpg?v=1571438954"
            >
            <i-ion-ios-arrow-down class="pt-1rem pointer" />
          </div>
          <div class="flex w-30vw justify-center relative flex-grow">
            <inner-image-zoom
              class="w-100%"
              src="//cdn.shopify.com/s/files/1/1087/6904/products/83fa05ceb61f887a7e5731c2cd61f181_1400x.jpg?v=1571438954"
              zoomSrc="//cdn.shopify.com/s/files/1/1087/6904/products/83fa05ceb61f887a7e5731c2cd61f181_1400x.jpg?v=1571438954"
              :hideHint="true"
            />
            <i-ph-magnifying-glass-bold
              class="absolute gray bottom-0 right-20px"
            />
            <div class="flex gray absolute bottom-0px left-0px">
              <i-ic-baseline-arrow-downward />
              Scroll
            </div>
          </div>
        </div>
        <div class="priceInfo">
          <span class="brandFont text-xl"> OEUF </span>
          <div class="fontMaginia text-3xl py-2.5rem">
            River Twin Bed
          </div>
          <span class="font-bold"> $950 </span>
          <div class="flex py-1rem space-x-4">
            <div class="w-50% pt-10px">
              <span> COLOR </span>
              <el-select
                v-model="value"
                class="mt-2 mb-2 selector"
                placeholder="Select"
                size="large"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="w-50% pt-10px">
              <span> SIZE </span>
              <el-select
                v-model="value"
                class="mt-2 mb-2 selector"
                placeholder="Select"
                size="large"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <div class="w-100% pb-20px pt-10px">
            <span> QUANTITY </span>
            <el-input-number
              v-model="num"
              :min="1"
              :max="99"
              class="w-100% mt-2 text-lg selector"
            />
          </div>
          <div class="pt-3rem">
            <el-button
              class="w-100% h-30px"
              type="warning"
              style="box-sizing: content-box"
            >
              <span> Add To Cart </span>
            </el-button>
            <a
              class="mt-10px flex pt-1rem pointer"
              @click="addFavorite = !addFavorite"
            >
              <i-ion-heart class="pr-10px" :class="{ red: addFavorite }" />
              View in Wishlist
            </a>
          </div>
          <div class="flex justify-around mt-3rem py-20px border-topBottom">
            <span class="flex item-center pointer">
              <i-ph-question /> QUESTIONS</span>
            <span class="flex item-center pointer">
              <i-ic-baseline-email /> EMAIL
            </span>
            <span class="flex item-center pointer">
              <i-ic-baseline-phone /> 02-9123456
            </span>
          </div>
        </div>
        <section
          class="
            flex
            justify-center
            flex-col
            p-3rem
            lightGreen
            extend-background--left
            mt-5rem
          "
        >
          <span class="sectionTitle flex justify-center fontMaginia text-5xl">
            Description
          </span>
          <div class="mx-auto" style="max-width: 500px">
            <p class="textColor" style="font-size: 20px; line-height: 2rem">
              The Oeuf mini library offers stylish and practical storage for
              children's rooms. Children will love its fun design and
              easy-to-reach height. Parents will love its sleek contemporary
              looks and sturdy construction.
            </p>
            <p class="textColor" style="font-size: 20px; line-height: 2rem">
              Smart Design: Low overall height Strong and stable construction
              Two storage compartments with hinged doors Can be attached to
              wall.
            </p>
            <p class="textColor" style="font-size: 20px; line-height: 2rem">
              Eco-friendly: Sustainably produced in Europe in an FSC certified
              facility Made of Baltic birch plywood and eco-MDF Finishes are non
              toxic, water-based and free of VOC health hazards Made under
              European environmental standards
            </p>
          </div>
        </section>
        <ProductDetail class="pt-1rem" />
        <RelatedProduct :productsArr="productsData" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.selector {
  ::v-deep(.el-input) {
    font-size: 20px;
  }
}
.calcHeight {
  height: calc(100vh - 150px);
}
.priceInfo {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.extend-background--left {
  padding-left: 3000px;
  margin-left: -3000px;
}
.sectionTitle {
  position: relative;
  color: black;
  top: -4.5rem;
}

.el-button {
  padding-left: 0;
  padding-right: 0;
}
.border-topBottom {
  border: 1px solid#dfdfdf;
  border-left: 0px;
  border-right: 0px;
}
.border-left {
  border: 1px solid#dfdfdf;
  border-top: 0px;
  border-bottom: 0px;
  border-left: 0px;
}
@media screen and (min-width: 1025px) {
  .priceInfo {
    max-width: 33.3333vw;
  }
}

@media screen and (min-width: 1366px) {
  .priceInfo {
    // right  calc((100vw - 1366px) / 2);
    max-width: calc(1366px / 3);
    right: calc((100vw - 1450px) / 2);
    padding-top: 290px;
  }
}
</style>
