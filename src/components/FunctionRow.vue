<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goPath = (path: string): void => {
  router.push({ path: `/${path}` })
}
</script>

<template>
  <div class=" h-12 flex justify-center items-center relative">
    <div class=" text-light-50 text-2xl">
      FREE SHIPPING OVER $75
    </div>
    <div class="cartAndMember absolute right-1rem w-100px flex justify-around">
      <i-ion:cart-outline class="pointer white text-2xl" @click="goPath('cart')" />
      <i-ion:person-outline class="white text-2xl pointer" />
    </div>
  </div>
</template>
<style scoped>
.white{
  color:white
}

@media screen and (max-width:768px) {
  .cartAndMember{
    display: none;
  }
}
</style>
