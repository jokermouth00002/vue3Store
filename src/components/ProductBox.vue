<script setup lang="ts">
import { defineEmits } from 'vue'
// import { useRoute, useRouter } from 'vue-router'
import type { ProductInfo } from '~/interfaceDict'

const props = defineProps<{
  productInfo: ProductInfo
}>()
const emits = defineEmits(['toProductPage'])
const goPath = (): void => {
  emits('toProductPage', props.productInfo)
}
</script>
<template>
  <div>
    <div class="box pointer" @click="goPath">
      <a class="block">
        <img class="w-100% pt-2rem" :src="props.productInfo.imgSource[0]">
      </a>
      <div class="pt-20px">
        <span class="fontMaginia text-3xl"> {{ props.productInfo.productName }}</span>
        <div class="pt-10px">
          {{ ` $ ${props.productInfo.productPrice}` }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box{
  width: 25rem;
  box-sizing: border-box;
  a{
    box-sizing: border-box;
    width: 25rem;
    height: 25rem;
    background-color: white;
    padding:3rem;
    & img{
      max-width:300px ;
      max-height:300px ;
    }
  }
  a:hover{
    padding:4rem;
    transition:all 0.3s;
    opacity: 0.8;
  }
}
.fontMaginia {
  font-family: 'Maginia', sans-serif;
}

</style>
