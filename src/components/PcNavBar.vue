<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { CollectionItem } from '../CollectionItem'
import state from '~/store'
const router = useRouter()
const collection = reactive(new CollectionItem())
const showMenuDown = ref(false)
const showSearch = ref(false)
const searchSomething = () => {
  // 顯示搜尋欄位
  if (!showSearch.value) showSearch.value = true

  // 搜尋商品
  const searchWhat = state.value.searchString.replaceAll(' ', '+')
  if (!searchWhat) return
  router.push({ path: `/search/${searchWhat}` })
}
const goPath = (path: string) => {
  if (path !== 'home')
    router.push({ path: `/collections/${path.toLocaleLowerCase()}` })
  else
    router.push({ path: '/' })
}
const selectedCollection = ref('bedroom')

const showMenu = (item: string) => {
  showMenuDown.value = true
  selectedCollection.value = item
}

const collectionMenuDown = computed(() => {
  if (selectedCollection.value === 'bedroom') return collection.bedRoom
  if (selectedCollection.value === 'furniture') return collection.furniture
  if (selectedCollection.value === 'kitchen') return collection.kitchen
  if (selectedCollection.value === 'dining') return collection.dining
  return collection.bedRoom
})
</script>

<template>
  <div class="relative pl-20 pr-20 bg-light-50" style="z-index:999">
    <div class="w-100%">
      <div class="flex w-full h-3rem justify-between items-center py-15px relative">
        <i-ion:home-outline class="text-4xl pointer" style="color:black" @click="goPath('home')" />
        <div v-if="!showSearch" class="items flex relative space-x-12">
          <div
            v-for="(item,index) in collection.title" :key="index"
            class="text-2xl pointer"
            @mouseenter="showMenu(item.kind)"
            @click="goPath(selectedCollection)"
          >
            {{ item.text }}
          </div>
        </div>
        <div v-if="showSearch" class="inputWrapper flex justify-center items-center w-75vw px-5rem">
          <input
            v-model="state.searchString" class="searchInput"
            placeholder="What can we help you find?"
          >
          <i-ion:search class="text-2xl black pointer" style="z-index:2" @click="searchSomething" />
          <i-ion:ios-close-empty
            v-if="showSearch"
            class="absolute right-0px pointer"
            style="font-size:30px"
            @click="showSearch=false"
          />
        </div>
        <div class="w-1px" />
        <span
          v-if="!showSearch"
          class="absolute top-20px right-1rem flex items-center pointer"
          @click="showSearch=!showSearch"
        >
          <span class="mr-10px"> SEARCH </span>
          <i-ion:search class="text-2xl" />
        </span>
      </div>

      <div
        v-if="showMenuDown"
        class="menuDown bgColor w-100% py-20 absolute left-0 top-70px"
        @mouseleave="showMenuDown=false"
      >
        <section class="flex justify-center text-gray-50 w-full">
          <div>
            <ul
              v-for="(item,index) in collectionMenuDown.items"
              :key="index"
              class="pointer"
              @click="goPath(selectedCollection)"
            >
              {{ item }}
            </ul>
          </div>
          <div>
            <div class="flex">
              <div v-for="(item,index) in collectionMenuDown.contents" :key="index" class="pl-12 pr-12">
                <img
                  :src="item.img"
                  class="w-100% pointer"
                >
                <h4 class="pointer">
                  {{ item.slogan }}
                </h4>
                <span> {{ item.text }} </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bgColor{
  background-color: #5A5F66;
}
.menuFont{
  font-family: "freight-big-pro";
  font-weight: 300;
  font-size: 5rem;
  line-height: 5rem;
  color: #353535;
}
.inputWrapper{
  max-width: 800px;
  .searchInput{
    font-family: "Montserrat",sans-serif;
    color:black;
    border-color:black;
    width: 100%;
    height: 3rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
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
}
.menuDown{
  z-index: 99;
}
.el-input{
  :deep(.el-input__wrapper){
    width: 100%;
    display: block;
    flex-grow: 0;
  }
  :deep(.el-input__inner){
    width: 100%;
    display: block;
    flex-grow: 0;
  }

}

</style>
