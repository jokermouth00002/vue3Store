<script setup lang="ts">
import { useRouter } from 'vue-router'
import RelatedProduct from '../components/RelatedProduct.vue'
import { productsData } from '../FakeData'
import CartProductRow from '~/components/CartProductRow.vue'
import state from '~/store'
console.log(state.value.shoppingCart)
const router = useRouter()
const toHome = () => {
  router.push({ path: '/' })
}
const buyedSomething = computed(() => {
  if (state.value.shoppingCart.length > 0) return true
  return false
})
const totalPrice = computed((): number => {
  if (state.value.shoppingCart.length > 0) {
    let totalPrice = 0
    state.value.shoppingCart.forEach((obj) => {
      if (obj.quantity) {
        const quantity = obj.quantity
        const price = obj.productInfo.productPrice
        totalPrice += quantity * price
      }
    })
    console.log(totalPrice)
    return totalPrice
  }
  return 0
})
</script>
<template>
  <div style="background-color: #f7f7f7;">
    <div class="pt-4rem max-w-1336px mr-auto ml-auto">
      <span class="flex black justify-center fontMaginia text-6xl">  Shopping Cart </span>
      <div class="flex backgroundColor p-8rem" :class="{withoutPadding:buyedSomething}">
        <div v-if="buyedSomething" class="w-2/3 pt-4rem">
          <div class="flex">
            <span class="w-60% text-2xl"> PRODUCT </span>
            <span class="w-15% text-2xl"> QUANTITY </span>
            <span class="w-15% text-2xl flex flex-row-reverse"> PRICE </span>
            <span class="w-10%" />
          </div>

          <div v-if="state.shoppingCart.length > 0" class="flex flex-col w-100%">
            <div v-for="(product,index) in state.shoppingCart" :key="index" class="mt-1rem">
              <CartProductRow class="mb-1rem" :nowUserWantedProduct="product" :productIndex="index" />
            </div>
          </div>
        </div>
        <div v-if="buyedSomething" id="cartSummary" class="w-1/3 flex-col items-center pt-4rem pl-2rem">
          <span class="text-2xl">CART SUMMARY </span>
          <div class="bg-light-50 items-center mt-2rem p-1rem">
            <div class="p-3rem flex justify-around">
              <span class="black fontMaginia text-4xl"> Subtotal: </span>
              <span class="black text-4xl">{{ totalPrice }}</span>
            </div>
            <div class="flex justify-center">
              <nav class="buttonStyle mx-4 w-75% ">
                <ui class="font-black text-2xl h-50px flex justify-center items-center pointer noSelect">
                  CHECKOUT
                </ui>
              </nav>
            </div>
            <div class="mt-2rem pb-1rem text-center border-top">
              Orders over $75 qualify for free ground shipping
            </div>
            <div class="mt-3rem px-1rem py-20px ">
              <div class="pb-5rem flex justify-center">
                Shipping questions?
              </div>
              <div class="flex justify-around pt-1rem pb-1rem border-topBottom">
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
          </div>
        </div>
        <div v-if="!buyedSomething" class="flex-col w-100% flex items-center">
          <p class="fontMaginia text-2.8rem text-center black" style="max-width:350px; line-height:1">
            Your cart is empty.
            Bummer!
          </p>
          <div class="flex justify-center pointer" @click="toHome">
            <nav class="buttonStyle mx-4 pl-20px pr-20px">
              <ui class="font-black text-2xl h-50px flex justify-center items-center noSelect">
                Shop Awesome Design >>
              </ui>
            </nav>
          </div>
        </div>
      </div>
      <RelatedProduct class="pt-20px" :productsArr="productsData" title="You May Also Like" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.backgroundColor{
  background-color: #f7f7f7;
}
.font{
    font-family: "Maginia, sans-serif";
    font-size: 2rem;
    font-weight: 300;
    color: #353535;
    font-weight: 400;
}
.black{
  color:black
}
.buttonStyle{
  border-radius: 0;
  height: 50px;
  border: 2px solid #dbb385;
  background-color: #dbb385;
  color: #fff;
}
.border-top {
  border: 1px solid#dfdfdf;
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
}
.border-topBottom {
  border: 1px solid#dfdfdf;
  border-left: 0px;
  border-right: 0px;
}
.withoutPadding{
  padding: 0;
}
.flexCol{
  display:flex;
  flex-direction: column;
}
</style>
