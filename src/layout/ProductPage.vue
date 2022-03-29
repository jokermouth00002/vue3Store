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
      <i-ion-ios-arrow-up class="pb-1rem" />
      <img class="w-80px h-80px pb-10px pointer" src="https://cdn.shopify.com/s/files/1/1087/6904/products/e2838a183ba8c534c40ebbd2fc723447_1400x.jpg?v=1571438954">
      <img class="w-80px h-80px pb-10px pointer" src="https://cdn.shopify.com/s/files/1/1087/6904/products/e2838a183ba8c534c40ebbd2fc723447_1400x.jpg?v=1571438954">
    </div>
    <div class="">
      <img
        class="w-30vw"
        src="https://cdn.shopify.com/s/files/1/1087/6904/products/e2838a183ba8c534c40ebbd2fc723447_1400x.jpg?v=1571438954"
      >
    </div>
    <!-- <div class="w-10vw h-10px" /> -->
    <div class="chartInfo p-4rem fixed right-10%" style="max-width:20vw">
      <span class="brandFont text-xl"> OEUF </span>
      <div class="fontMaginia text-3xl pb-10px pt-10px">
        River Twin Bed
      </div>
      <span class="font-bold"> $950 </span>
      <div class="flex space-x-4">
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
              class="test"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="w-100% pb-20px pt-10px">
        <span> QUANTITY </span>
        <div>
          <el-input-number v-model="num" :min="1" :max="99" class="w-100% mt-2 text-lg selector" />
        </div>
      </div>
      <el-button class="w-100% h-30px" type="warning" style="box-sizing:content-box">
        <span>
          Add To Cart
        </span>
      </el-button>
      <a class="mt-10px flex pointer" @click="addFavorite=!addFavorite">
        <i-ion-heart class="pr-10px" :class="{red:addFavorite}" />
        View in Wishlist
      </a>
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
.test{
  ::v-deep(.el-select-dropdown__item){
    font-size: 20px;
  }
}
.el-button{
  padding-left: 0;
  padding-right: 0;
}
</style>
