<script lang="ts" setup>
import { ref } from 'vue'
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
  <div class="flex pt-2rem px-10rem relative justify-center">
    <div class="flex flex-col items-center absolute left-30%">
      <i-ion-ios-arrow-up class="pb-1rem pointer" />
      <img class="w-80px h-80px pb-10px pointer" src="//cdn.shopify.com/s/files/1/1087/6904/products/83fa05ceb61f887a7e5731c2cd61f181_1400x.jpg?v=1571438954">
      <img class="w-80px h-80px pb-10px pointer" src="//cdn.shopify.com/s/files/1/1087/6904/products/83fa05ceb61f887a7e5731c2cd61f181_1400x.jpg?v=1571438954">
      <i-ion-ios-arrow-down class="pt-1rem pointer" />
    </div>
    <div class="calcWidth flex justify-center">
      <img
        class="w-80%"
        src="//cdn.shopify.com/s/files/1/1087/6904/products/83fa05ceb61f887a7e5731c2cd61f181_1400x.jpg?v=1571438954"
      >
    </div>
    <div class="chartInfo p-4rem fixed right-10%" style="max-width:20vw">
      <span class="brandFont text-xl"> OEUF </span>
      <div class="fontMaginia text-3xl py-2.5rem">
        River Twin Bed
      </div>
      <span class="font-bold"> $950 </span>
      <div class="flex py-1rem space-x-4">
        <div class="w-50% pt-10px">
          <span> Option </span>
          <el-select v-model="value" class="mt-2 mb-2 selector" placeholder="Select" size="large">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="w-50% pt-10px">
          <span> Color </span>
          <el-select v-model="value" class="mt-2 mb-2 selector" placeholder="Select" size="large">
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
        <div class="test">
          <el-input-number v-model="num" :min="1" :max="99" class="w-100% mt-2 text-lg selector" />
        </div>
      </div>
      <div class="pt-3rem">
        <el-button class="w-100% h-30px" type="warning" style="box-sizing:content-box">
          <span>
            Add To Cart
          </span>
        </el-button>
        <a class="mt-10px flex pt-1rem pointer" @click="addFavorite=!addFavorite">
          <i-ion-heart class="pr-10px" :class="{red:addFavorite}" />
          View in Wishlist
        </a>
      </div>
      <div class="flex justify-around mt-3rem py-20px border-topBottom">
        <span class="flex item-center pointer"> <i-ph-question /> QUESTIONS</span>
        <span class="flex item-center pointer"> <i-ic-baseline-email /> EMAIL </span>
        <span class="flex item-center pointer"> <i-ic-baseline-phone /> 02-9123456 </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.selector{
   ::v-deep(.el-input){
    font-size: 20px;
  }
}
.red{
  color:red
}
.test {
  ::v-deep(.el-input-number){
    width: 100%
  }
}
.calcWidth{
  width: calc(100% - 3.15733rem - 85px);
}
.el-button{
  padding-left: 0;
  padding-right: 0;
}
.border-topBottom{
  border:1px solid#dfdfdf;
  border-left:0px;
  border-right:0px;
}
.border-left{
  border:1px solid#dfdfdf;
  border-top:0px;
  border-bottom:0px;
  border-left:0px;
}
</style>
