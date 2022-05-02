<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { CollectionItem } from '../CollectionItem'
const router = useRouter()
const collection = reactive(new CollectionItem())
const showMenuDown = ref(false)

const routerTo = (text: string) => {
  router.push({ path: `/collections/${text}` })
}
const selectedCollection = ref('BedRoom')

const showMenu = (item: any) => {
  showMenuDown.value = true
  selectedCollection.value = item
}
function goHomePage() {
  router.push({ path: '/' })
}

const collectionMenuDown = computed(() => {
  if (selectedCollection.value === 'BedRoom') return collection.bedRoom
  if (selectedCollection.value === 'Furniture') return collection.furniture
  if (selectedCollection.value === 'FloorLamp') return collection.floorLamp
  if (selectedCollection.value === 'Dining') return collection.dining
  return collection.bedRoom
})
</script>

<template>
  <div class="relative pl-20 pr-20">
    <div class="flex w-full justify-between items-center py-15px">
      <i class="fa-solid fa-store text-4xl pointer" @click="goHomePage()" />
      <div class="items flex relative space-x-12">
        <div
          v-for="(item,index) in collection.title" :key="index"
          class="text-2xl pointer"
          @mouseenter="showMenu(item.kind)"
          @click="routerTo(item.kind)"
        >
          {{ item.text }}
        </div>
      </div>
      <i class="fa-solid fa-magnifying-glass text-2xl " />
    </div>

    <div
      v-if="showMenuDown && selectedCollection!=='new'"
      class="menuDown bgColor w-100% py-20 absolute top-70px"
      @mouseleave="showMenuDown=false"
    >
      <section class="flex justify-center text-gray-50 w-full">
        <div>
          <ul v-for="(item,index) in collectionMenuDown.items" :key="index" class="pointer">
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
