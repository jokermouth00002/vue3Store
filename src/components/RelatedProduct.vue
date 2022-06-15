<script setup lang="ts">
/* eslint-disable vue/html-closing-bracket-newline */
/* eslint-disable vue/html-self-closing */
/* eslint-disable @typescript-eslint/comma-dangle */

import { Swiper, SwiperSlide } from 'swiper/vue'
import { reactive, watch } from 'vue'
import { Navigation, Pagination } from 'swiper'
import { useRoute, useRouter } from 'vue-router'
import type { ProductInfo } from '~/interfaceDict'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
const router = useRouter()
const route = useRoute()
const modules = [Navigation, Pagination]

const props = defineProps<{ productsArr: ProductInfo[] }>()
const productsArr = reactive(props.productsArr)
const goPath = (item: any) => {
  const pathString = item.productName.replace(/\s/g, '-')
  router.push({ path: `/collections/${item.type}/products/${pathString}` })
}
watch(route, () => {
  window.scrollTo(0, 0)
})
</script>
<template>
  <div>
    <span class="flex justify-center brandFont"> RELATED PRODUCTS </span>
    <section
      class="
        flex
        justify-center
        flex-col
        p-3rem
        lightGreen
        extend-background--left
        mt-5rem
      "
    >
      <span class="sectionTitle flex justify-center fontMaginia text-5xl">
        Customers Also Viewed
      </span>
      <div class="flex justify-center w-100% items-center space-x-4">
        <div class="flex">
          <swiper
            :slidesPerView="3"
            :spaceBetween="10"
            :slidesPerGroup="3"
            :navigation="true"
            :modules="modules"
            class="w-800px h-100"
          >
            <swiper-slide v-for="(item, index) in productsArr" :key="index">
              <div class="box pointer" @click="goPath(item)">
                <a class="block">
                  <img class="w-100% pt-2rem noSelect" :src="item.imgSource[0]" />
                </a>
                <div class="pt-10px">
                  <p class="fontMaginia text-3xl text-area">
                    {{ item.productName }}
                  </p>
                  <div class="pt-0px">
                    {{ ` $ ${item.productPrice}` }}
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import 'swiper/scss';
swiper :deep(.swiper-button-next) {
  top: 35%;
}
.swiper-button-next {
  display: none;
}
.extend-background--left {
  padding-left: 3000px;
  margin-left: -3000px;
}
.text-area {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.box {
  width: 15rem;
  padding-top: 20px;
  box-sizing: border-box;
  a {
    box-sizing: border-box;
    width: 15rem;
    height: 15rem;
    background-color: white;
    padding: 2rem;
  }
  a:hover {
    padding: 1.5rem;
    transition: all 0.3s;
    opacity: 0.8;
  }
}
.sectionTitle {
  position: relative;
  color: black;
  top: -4.5rem;
}
</style>
