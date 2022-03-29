<script setup lang="ts">
import { computed, getCurrentInstance, reactive, ref, toRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const nowPath = computed(() => route.path)
console.log(route.params, 'im route.params')
interface ProductInfo {
  imgSource: string
  productName: string
  productPrice: number
}
const props = defineProps<{
  productInfo: ProductInfo
}>()
const goPath = (text: string) => {
  const pathString = text.replace(/\s/g, '-')
  router.push({ path: `${nowPath.value}/products/${pathString}` })
  console.log(`${nowPath.value}/products/${pathString}`)
}

const productInfo = reactive(props.productInfo)
</script>
<template>
  <div>
    <div class="box pointer" @click="goPath(productInfo.productName)">
      <a class="block">
        <img class="w-100% pt-2rem" :src="productInfo.imgSource">
      </a>
      <div class="pt-20px">
        <span class="fontMaginia text-3xl"> {{ productInfo.productName }}</span>
        <div class="pt-10px">
          {{ ` $ ${productInfo.productPrice}` }}
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
  }
  a:hover{
    padding:2.5rem;
    transition:all 0.3s;
    opacity: 0.8;
  }
}
.fontMaginia {
  font-family: 'Maginia', sans-serif;
}

</style>
