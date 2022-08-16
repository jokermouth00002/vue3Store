<!-- 特定類別價格太低選不到商品，改商品金額or改金額機制 -->
<script setup lang="ts">
import type { Ref } from 'vue'
import { RouterView } from 'vue-router'
import { productsData } from './FakeData'
import type { ProductInfo } from '~/interfaceDict'
import FunctionRow from '~/components/FunctionRow.vue'
import PCNavBar from '~/components/PcNavBar.vue'
import MobileNavBar from '~/components/MobileNavBar.vue'
import state from '~/store'
// import Footer from '~/components/Footer.vue'
// import '~/assets/app.scss'

const totalProducts: Ref<ProductInfo[]> = ref(productsData)

totalProducts.value.forEach((obj) => {
  const setupName = obj.productName.replaceAll('-', ' ').replaceAll('&', ' ')
  obj.productName = setupName
})
state.value.products = totalProducts.value
</script>

<template>
  <div id="root">
    <nav id="navBar" class="relative bg-cool-gray-800 w-full">
      <FunctionRow />
    </nav>
    <div>
      <PCNavBar id="PCNavBar" class="flex flex-col items-center" />
      <MobileNavBar id="MobileNavBar" />
    </div>
    <div :class="{overlay:state.overlay}" />
    <RouterView />
    <Footer class="absoulte" style="background-color:black;color:white;" />
  </div>
</template>

<style scoped>
#root{
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: #656565;
}
.overlay{
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 98;
  opacity: 0.7;
  background-color: #656565;
}
@media screen and (max-width:1150px) {
  #PCNavBar{
    display: none;
  }
  #navBar{
    height: 50px;
  }
}
@media screen and (min-width:1150px) {
  #MobileNavBar{
    display: none;
  }
}

</style>
