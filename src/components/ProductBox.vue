<script setup lang="ts">
// import { useRoute, useRouter } from 'vue-router'
import type { ProductInfo } from '~/interfaceDict'

const props = defineProps<{
  productInfo: ProductInfo
}>()
const emits = defineEmits(['to-productpage'])
const goPath = (): void => {
  emits('to-productpage', props.productInfo)
}
</script>
<template>
  <div>
    <div class="box pointer" @click="goPath">
      <a class="block">
        <img :src="props.productInfo.imgSource[0]">
      </a>
      <div class="namePriceRow">
        <div class="fontMaginia fontSize">
          {{ props.productInfo.productName }}
        </div>
        <div class="pt-10px fontSize">
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
      width: 100%;
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
.namePriceRow{
  padding-top:20px ;
  .fontSize{
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}
.fontMaginia {
  font-family: 'Maginia', sans-serif;
}
@media screen and (max-width:768px){
  .box{
    width: 10rem;
    a{
      width: 10rem;
      height: 10rem;
      padding:20px;
      & img{
        max-width:150px ;
        max-height:150px ;
      }
    }
    a:hover{
        width: 10rem;
        height: 10rem;
        padding:20px;
    }
  }
  .namePriceRow{
    padding-top:5px ;
    .fontSize{
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
}

</style>
