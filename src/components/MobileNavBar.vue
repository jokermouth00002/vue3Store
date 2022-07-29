<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { CollectionItem } from '../CollectionItem'
const router = useRouter()
const collection = reactive(new CollectionItem())
const showMobileMenu = ref(false)
const goPath = (path: string): void => {
  if (path !== 'home')
    router.push({ path: `/collections/${path.toLocaleLowerCase()}` })
  else
    router.push({ path: '/' })

  showMobileMenu.value = false
}

</script>
<template>
  <div class="flex p-1rem justify-between h-70px">
    <i-ion:menu-outline class="text-4xl" @click="showMobileMenu=!showMobileMenu" />
    <i-ion:home-outline class="text-3xl" style="color:black" @click="goPath('home')" />
    <div class="flex">
      <i-ion:cart-outline class="pointer white text-2xl pr-10px" @click="goPath('cart')" />
      <i-ion:person-outline class="white text-2xl pointer" />
    </div>
    <el-drawer
      v-model="showMobileMenu"
      direction="ltr"
      size="75%"
    >
      <div
        v-for="(item,index) in collection.title " :key="index"
        class="flex justify-between p-1rem"
        @click="goPath(item.text)"
      >
        <span> {{ item.text }} </span>
      </div>
    </el-drawer>
  </div>
</template>
<style scoped class="scss">
  :deep(.el-overlay) {
    position:fixed;
    top:130px
  }
</style>
