<script setup lang="ts">
// 未完成 主頁滾輪跑版、商品頁圖片超出。
import { useRouter } from 'vue-router'
import RelatedProduct from '../components/RelatedProduct.vue'
import { productsData } from '../FakeData'
import CartProductRow from '~/components/CartProductRow.vue'
import state from '~/store'
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
    return totalPrice
  }
  return 0
})
const showDialog = ref(false)
const whenShoppingDown = (): void => {
  console.log(123)
  showDialog.value = false
  state.value.products = []
  state.value.shoppingCart = []
  state.value.productsIDString = []
  state.value.overlay = false
  state.value.searchString = ''
  router.push({ path: '/' })
}
</script>
<template>
  <div class="lightGreen">
    <div class="pt-4rem max-w-1336px mr-auto ml-auto">
      <span class="flex black justify-center fontMaginia title">  Shopping Cart </span>
      <div class="flex backgroundColor p-8rem mobileCartContainer" :class="{withoutPadding:buyedSomething}">
        <div v-if="buyedSomething" class="productsContainer pt-4rem">
          <div class="flex productInfo">
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
          <span class="text-2xl cartSummaryMobileTitle">CART SUMMARY </span>
          <div class="bg-light-50 items-center mt-2rem p-1rem">
            <div class="p-3rem flex justify-around">
              <span class="black fontMaginia text-4xl"> Subtotal: </span>
              <span class="black text-4xl">{{ totalPrice }}</span>
            </div>
            <div class="flex justify-center">
              <nav class="buttonStyle mx-4 w-75% ">
                <ui
                  class="font-black buttonFont h-50px flex justify-center items-center pointer noSelect"
                  @click="showDialog=true"
                >
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
              <div class="flex justify-around pt-1rem pb-1rem border-topBottom connect">
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
          <p class="fontMaginia text-4xl text-center black" style="max-width:350px; line-height:1">
            Your cart is empty.
            Bummer!
          </p>
          <div class="flex justify-center pointer" @click="toHome">
            <nav class="buttonStyle mx-4 pl-20px pr-20px">
              <ui class="font-black text-2xl h-50px flex justify-center items-center noSelect goShopText">
                Shop Awesome Design >>
              </ui>
            </nav>
          </div>
        </div>
      </div>
      <RelatedProduct
        class="pt-20px PC"
        :productsArr="productsData"
        text="You May Also Like"
        title="RELATED PRODUCTS"
        :slidesPerView="3"
        :slidesPerGroup="3"
      />
      <RelatedProduct
        class="pt-20px mobile"
        :productsArr="productsData"
        text="You May Also Like"
        title="RELATED PRODUCTS"
        :slidesPerView="1"
        :slidesPerGroup="1"
      />
      <el-dialog
        class="w-100%"
        :model-value="showDialog" :show-close="false"
        center
      >
        <span class="text-2xl">
          Your order was created
        </span>
        <template #footer>
          <div class="flex w-full">
            <nav class="buttonStyle mx-4 w-100%" @click="whenShoppingDown">
              <ui class="font-black text-2xl h-50px flex justify-center items-center pointer noSelect buttonFont">
                OK
              </ui>
            </nav>
            <!-- <nav class="buttonStyle mx-4 w-50%" @click="goCartPage">
              <ui class="font-black text-2xl h-50px flex justify-center items-center pointer noSelect buttonFont">
                VIEW CART
              </ui>
            </nav> -->
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<style scoped lang="scss">
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
  .buttonFont{
    font-size: 1.5rem;
    line-height: 2rem;
  }
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
.productsContainer{
  width: 66.666667%;
}
.title{
  font-size: 3.75rem; /* 60px */
  line-height: 1;
}
.mobile{
  display: none;
}
:deep(.el-dialog){
    display: flex;
    flex-direction: column;
    margin:0 !important;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    height: 250px;
    .el-dialog__body{
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 100%;
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .el-dialog__headerbtn{
      svg path {
        color:black
      }
    }
}
@media screen and (max-width:768px) {
  .title{
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  .mobileCartContainer{
    flex-direction: column;
    padding:8rem 0 8rem 0;
    #cartSummary{
      width: 100%;
      padding: 0;
      .cartSummaryMobileTitle{
        display: none;
      }
    }
    .productsContainer{
      width: 100%;
      .productInfo{
        display: none;
      }
    }
    .buttonFont,.connect{
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  .text-4xl{
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .goShopText{
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  .mobile{
    display: inherit;
  }
  .PC{
    display: none;
  }
  :deep(.el-dialog){
    width: 100%;
    .buttonFont{
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
}
</style>
