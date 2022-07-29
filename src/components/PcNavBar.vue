<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { CollectionItem } from '../CollectionItem'
const router = useRouter()
const collection = reactive(new CollectionItem())
const showMenuDown = ref(false)

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
  <div class="relative pl-20 pr-20 bg-light-50">
    <div class="w-100%">
      <div class="flex w-full justify-between items-center py-15px">
        <i-ion:home-outline class="text-4xl" style="color:black" @click="goPath('home')" />
        <div class="items flex relative space-x-12">
          <div
            v-for="(item,index) in collection.title" :key="index"
            class="text-2xl pointer"
            @mouseenter="showMenu(item.kind)"
            @click="goPath(selectedCollection)"
          >
            {{ item.text }}
          </div>
        </div>
        <div class="w-1px" />
      </div>
      <span class="absolute top-20px right-1rem flex items-center pointer">
        <span class="mr-10px"> SEARCH </span>
        <i-ion:search class="text-2xl" />
      </span>
    </div>

    <div
      v-if="showMenuDown && selectedCollection!=='new'"
      class="menuDown bgColor w-100% py-20 absolute top-70px"
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
</template>

<style scoped>
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
.menuDown{
  z-index: 99;
}
</style>
