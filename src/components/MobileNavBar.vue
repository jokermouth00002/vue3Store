<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { CollectionItem } from '../CollectionItem'
import state from '~/store'
const router = useRouter()
const collection = reactive(new CollectionItem())
const showMobileMenu = ref(false)
const goPath = (path: string): void => {
  if (path === 'cart')
    router.push({ path: '/cart' })
  else if (path !== 'home')
    router.push({ path: `/collections/${path.toLocaleLowerCase()}` })
  else
    router.push({ path: '/' })

  showMobileMenu.value = false
}
const showSearch = ref(false)
const onSearch = (): void => {
  if (!showSearch.value) {
    // show
    showSearch.value = true
    state.value.overlay = true
  }
  else {
    if (state.value.searchString.length < 1) return
    // action
    const searchWhat = state.value.searchString.replaceAll(' ', '+')
    router.push({ path: `/search/${searchWhat}` })
    state.value.overlay = false
  }
}
const closeSearch = (): void => {
  showSearch.value = false
  state.value.overlay = false
}
</script>
<template>
  <div class="flex p-0.5rem justify-between items-center h-50px" style="z-index:99">
    <i-ion:menu-outline v-if="!showSearch" class="text-4xl" @click="showMobileMenu=!showMobileMenu" />
    <i-ion:home-outline v-if="!showSearch" class="text-3xl" style="color:black" @click="goPath('home')" />
    <input
      v-if="showSearch"
      v-model="state.searchString" class="searchInput"
      placeholder="Search"
    >
    <div class="flex">
      <i-ph:magnifying-glass class="white text-2xl pointer" @click="onSearch" />
      <i-ion:cart-outline v-if="!showSearch" class="pointer white w-32px h-32px" @click="goPath('cart')" />
      <i-ion:ios-close-empty
        v-if="showSearch"
        class="pointer w-32px h-32px"
        style="font-size:30px"
        @click="closeSearch"
      />
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
<style scoped lang="scss">
  :deep(.el-overlay) {
    position:fixed;
    top:110px
  }
  .searchInput{
    font-family: "Montserrat",sans-serif;
    color:black;
    width: 100%;
    height: 3rem;
    border: 0;
    letter-spacing:2px;
    line-height: 3rem;
    font-size: 1rem;
    &:hover{
      outline:none
    }
    &:focus{
      outline:none
    }
}
</style>
