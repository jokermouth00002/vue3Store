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
</script>
<template>
  <div class="flex items-center bg-light-50 p-1rem">
    <div class="w-60% flex items-center">
      <div class="w-50px h-50px">
        <img :src="product.productInfo.imgSource[0]" class="w-50px h-50px">
      </div>
      <div id="buyItemInfo" class="p-1rem">
        <h4>{{ product.productInfo.productName }}</h4>
        <p style="color:#dbb385" class="font-semibold">
          Availability: 20+ in stock ships in 7-10 business days, other quantities ship in 6-8 weeks
        </p>
      </div>
    </div>
    <div class="w-15%">
      <el-input-number
        v-model="product.quantity"
        :min="1"
        :max="99"
        class="mt-2 text-lg selector"
        style="width:100% "
        @change="changeProductQuantity"
      />
    </div>
    <div class="w-15% flex flex-row-reverse">
      <span>{{ `$${productTotalPrice}.00` }}</span>
    </div>
    <div id="closeIcon" class="w-10% flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--material-symbols pointer" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" @click="delProduct"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z" /></svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-input-number__decrease){
  background-color:white;
  svg path {
    color:black
  }
}
:deep(.el-input-number__increase){
  background-color:white;
  svg path {
    color:black
  }
}
</style>
