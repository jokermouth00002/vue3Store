<script setup lang="ts">
import type { NowUserWantedProduct } from '~/interfaceDict'
import state from '~/store'
const props = defineProps<{
  nowUserWantedProduct: NowUserWantedProduct
  productIndex: number
}>()
const product = ref(props.nowUserWantedProduct)
const changeProductQuantity = (value: number | undefined): void => {
  if (value) product.value.quantity = value
}
const delProduct = () => {
  state.value.shoppingCart.splice(props.productIndex, 1)
}
const productTotalPrice = computed(() => {
  if (product.value.quantity)
    return Number(product.value.productInfo.productPrice) * product.value.quantity
})
const productOptionsText = computed (() => {
  if (product.value.productInfo.styleOptions.length === 0) return null

  const [colorObj] = product.value.productInfo.styleOptions[0].details?.filter(obj => obj.id === product.value.color)
  const [sizeObj] = product.value.productInfo.styleOptions[1].details?.filter(obj => obj.id === product.value.size)
  if (colorObj.text && sizeObj.text) return `-${colorObj.text}/${sizeObj.text}`
  else if (colorObj.text) return `-${colorObj.text}`
  else if (sizeObj.text) return `-${sizeObj.text}`
  return null
})
</script>
<template>
  <div class="flex mobileDisplay items-center bg-light-50 p-1rem">
    <div class="w-60% flex items-center mobileContainer">
      <div class="w-50px h-50px">
        <img :src="product.productInfo.imgSource[product.imageIndex]" class="w-50px h-50px">
      </div>
      <div id="buyItemInfo" class="p-1rem">
        <h4>{{ product.productInfo.productName+`${productOptionsText}` }}</h4>
        <p style="color:#dbb385" class="font-semibold">
          Availability: 20+ in stock ships in 7-10 business days, other quantities ship in 6-8 weeks
        </p>
      </div>
    </div>
    <div class="w-40% flex justify-center itemOption items-center">
      <div class="w-1/3%">
        <el-input-number
          v-model="product.quantity"
          :min="1"
          :max="99"
          class="mt-2 text-lg selector"
          style="width:100% "
          @change="changeProductQuantity"
        />
      </div>
      <div class="w-1/3% flex flex-row-reverse justify-center">
        <span>{{ `$${productTotalPrice}.00` }}</span>
      </div>
      <i-ion:ios-close-empty @click="delProduct" />
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-input-number__decrease) , :deep(.el-input-number__increase){
  background-color:white;
  svg path {
    color:black
  }
}
@media screen and (max-width:768px) {
  .mobileDisplay{
    display: inherit;
    .mobileContainer , .itemOption{
      width: 100%;
    }
  }
}
</style>
