<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
import InnerImageZoom from 'vue-inner-image-zoom'
import RelatedProduct from '../components/RelatedProduct.vue'
import { productsData } from '../FakeData'
import ProductDetail from '~/components/ProductDetail.vue'
import state from '~/store'
import 'swiper/css'
import 'swiper/css/navigation'
// demo Mini Library、
const route = useRoute()
const router = useRouter()
const modules = [Navigation, Pagination]
const showDialog = ref(false)
const productName = route.path.split('products/')[1]?.replaceAll('-', ' ')
const productInfo = ref(state.value.products.filter(i => i.productName === productName)[0])
const productQuantity = ref(1)
const nowDisplayProductPicIndex = ref(0)
const userWantedProduct = computed(() => {
  let defaultColor
  let defaultSize
  if (productInfo.value.styleOptions.length > 0) {
    const [colorOption] = productInfo.value.styleOptions.filter((obj, i) => obj.title === 'color')
    const [sizeOpton] = productInfo.value.styleOptions.filter((obj, i) => obj.title === 'size')
    defaultColor = colorOption.details ? colorOption.details[0].id : ''
    defaultSize = sizeOpton.details ? sizeOpton.details[0].id : ''
  }
  return {
    quantity: productQuantity.value,
    color: defaultColor,
    size: defaultSize,
    IDString: '',
    productInfo: productInfo.value,
    imageIndex: nowDisplayProductPicIndex.value,
  }
})

const nowDisplayProductPic = computed((): string => {
  const pics = productInfo.value.imgSource
  const picsIndex = nowDisplayProductPicIndex.value
  if (pics[picsIndex]) return pics[picsIndex]
  return pics[picsIndex][0]
})

const addToCart = () => {
  // IDString 當做商品的唯一碼，不用productName是因為同名商品會有不同樣式ex:顏色、大小。
  console.log(userWantedProduct.value, 'userWantedProduct.value')
  const productName = productInfo.value.productName || ''
  if (productName === '') return console.log('should not happen')
  const color = userWantedProduct.value.color || ''
  const size = userWantedProduct.value.size || ''
  userWantedProduct.value.IDString = `${productName}-${color}-${size}`
  const IDString = userWantedProduct.value.IDString
  const cart = state.value.shoppingCart
  const [sameProduct = undefined] = cart.filter((e) => {
    return e.IDString === IDString
  })
  const productIndex = cart.findIndex((e) => {
    return e.IDString === IDString
  })
  if (!sameProduct) cart.push(userWantedProduct.value)
  else
    cart[productIndex].quantity += userWantedProduct.value.quantity

  showDialog.value = true
  console.log(cart, 'cart')
}
const changImg = (options: { text: string; id: string }[], id: string, title: string) => {
  if (title !== 'color') return
  const colorOptionImgIndex = options.findIndex(obj => obj.id === id)
  if (colorOptionImgIndex < 0) return console.log('should not happen')
  console.log(nowDisplayProductPicIndex, 'options')
  nowDisplayProductPicIndex.value = colorOptionImgIndex
  console.log(userWantedProduct.value.color, 'here')
  userWantedProduct.value.color = id
}
const changeProductQuantity = (value: number | undefined): void => {
  if (value) userWantedProduct.value.quantity = value
}
const beforeClose = (done: any) => {
  showDialog.value = false
  done()
}
const goCartPage = (): void => {
  router.push({ path: '/cart' })
}
const slideChange = (slide): void => {
  nowDisplayProductPicIndex.value = slide.activeIndex
}
watch(route, () => {
  if (route.path !== '/cart')
    history.go()
  window.scrollTo(0, 0)
})

</script>
<template>
  <div class="max-w-1366px mx-auto bg-light-50">
    <div class="flex w-100% onPC">
      <div w="2/3">
        <div class="flex items-center noSelect calcHeight">
          <div class="flex flex-col items-center pr-20">
            <img
              v-for="(img,index) in productInfo.imgSource"
              :key="img"
              class="w-80px h-80px pb-10px pointer"
              :src="img"
              @click="nowDisplayProductPicIndex = index"
            >
          </div>
          <div class="flex h-100% justify-center relative flex-grow">
            <inner-image-zoom
              :src="nowDisplayProductPic"
              :zoomScale="1.5"
              class="items-center"
              style="display:flex"
              :zoomSrc="nowDisplayProductPic"
              :hideHint="true"
            />
            <i-ph-magnifying-glass-bold
              class="absolute gray bottom-0 right-20px"
            />
            <div class="flex gray absolute bottom-0px left-0px">
              <i-ic-baseline-arrow-downward />
              Scroll
            </div>
          </div>
        </div>
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
            Description
          </span>
          <div class="mx-auto" style="max-width: 500px">
            <p class="textColor" style="font-size: 20px; line-height: 2rem">
              The Oeuf mini library offers stylish and practical storage for
              children's rooms. Children will love its fun design and
              easy-to-reach height. Parents will love its sleek contemporary
              looks and sturdy construction.
            </p>
            <p class="textColor" style="font-size: 20px; line-height: 2rem">
              Smart Design: Low overall height Strong and stable construction
              Two storage compartments with hinged doors Can be attached to
              wall.
            </p>
            <p class="textColor" style="font-size: 20px; line-height: 2rem">
              Eco-friendly: Sustainably produced in Europe in an FSC certified
              facility Made of Baltic birch plywood and eco-MDF Finishes are non
              toxic, water-based and free of VOC health hazards Made under
              European environmental standards
            </p>
          </div>
        </section>
        <ProductDetail class="pt-1rem" />
        <RelatedProduct
          :productsArr="productsData"
          :slidesPerView="3"
          :slidesPerGroup="3"
          swiperWidth="800"
          text="Customers Also Viewed"
          title="RELATED PRODUCTS"
        />
      </div>
      <div w="1/3" class="priceInfo">
        <div class="fontMaginia black text-3xl py-2.5rem">
          {{ productInfo.productName }}
        </div>
        <span class="font-bold black"> {{ `$${productInfo.productPrice}` }} </span>
        <div class="flex py-1rem space-x-4">
          <div
            v-for="(item,index) in productInfo.styleOptions"
            :key="index"
            class="w-50% pt-10px"
          >
            <div class="flex flex-col">
              <span class="optionTitle"> {{ item.title }} </span>
              <select
                v-if="item.title"
                v-model="userWantedProduct[item.title]"
                class="mt-2 mb-2"
                @change="changImg(item.details,userWantedProduct[item.title],item.title)"
              >
                <option
                  v-for="(obj,i) in item.details"
                  :key="i"
                  :value="obj.id"
                >
                  {{ obj.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="pb-20px pt-10px">
          <span> QUANTITY </span>
          <el-input-number
            v-model="productQuantity"
            :min="1"
            :max="99"
            class="mt-2 text-lg selector"
            style="width:100% "
            @change="changeProductQuantity"
          />
        </div>
        <div class="pt-3rem">
          <nav class="buttonHoverStyle solid mx-4 w-full%" @click="addToCart">
            <ui class="font-black text-2xl h-50px flex justify-center items-center pointer noSelect">
              Add To Cart
            </ui>
          </nav>
        </div>
        <div class="flex justify-around mt-3rem py-20px border-topBottom">
          <span class="flex item-center pointer">
            <i-ph-question /> QUESTIONS</span>
          <span class="flex item-center pointer">
            <i-ic-baseline-email /> EMAIL
          </span>
          <span class="flex item-center pointer">
            <i-ic-baseline-phone /> 02-9123456
          </span>
        </div>
      </div>
    </div>
    <div class="w-100% onMobile">
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :slidesPerGroup="1"
        :pagination="true"
        :modules="modules"
        :navigation="true"
        class="w-90%"
        @slide-change="slideChange"
      >
        <swiper-slide v-for="(index) in productInfo.imgSource" :key="index">
          <inner-image-zoom
            :src="nowDisplayProductPic"
            :zoomScale="1.5"
            class="items-center"
            style="display:flex"
            :zoomSrc="nowDisplayProductPic"
          />
        </swiper-slide>
      </swiper>
      <div class="pt-4rem flex flex-col">
        <div class="px-1rem flex flex-col">
          <span class="fontMaginia text-3xl black">{{ productInfo.productName }}</span>
          <span class="text-xl black line">{{ `$${productInfo.productPrice}` }} </span>
        </div>

        <div class="flex pl-1rem">
          <div
            v-for="(item,index) in productInfo.styleOptions"
            :key="index" class="flex flex-col pr-1rem w-50% pt-10px"
          >
            <span class="optionTitle"> {{ item.title }} </span>
            <select
              v-if="item.title"
              v-model="userWantedProduct[item.title]"
              class="mt-2 mb-2"
              @change="changImg(item.details,userWantedProduct[item.title],item.title)"
            >
              <option
                v-for="(obj,i) in item.details"
                :key="i"
                :label="obj.text"
                :value="obj.id"
              />
            </select>
          </div>
        </div>
        <div class="pb-20px pt-10px px-1rem">
          <span> QUANTITY </span>
          <el-input-number
            v-model="productQuantity"
            :min="1"
            :max="99"
            class="mt-2 text-lg selector"
            style="width:100% "
          />
        </div>
        <nav class="buttonHoverStyle solid mx-4 my-2rem w-full%" @click="addToCart">
          <ui class="font-black text-2xl h-50px flex justify-center items-center pointer noSelect">
            Add To Cart
          </ui>
        </nav>
        <div class="flex justify-around text-base my-3rem py-20px border-topBottom">
          <span class="flex item-center pointer">
            <i-ph-question /> QUESTIONS</span>
          <span class="flex item-center pointer">
            <i-ic-baseline-email /> EMAIL
          </span>
          <span class="flex item-center pointer">
            <i-ic-baseline-phone /> 02-9123456
          </span>
        </div>
        <section
          class="
            flex
            justify-center
            w-100%
            flex-col
            lightGreen
            extend-background--left
            mt-5rem
          "
        >
          <span class="sectionTitle flex justify-center fontMaginia text-5xl">
            Description
          </span>
          <div class="mx-auto" style="max-width: 500px">
            <p class="px-1rem textColor text-base" style="font-size: 20px; line-height: 2rem">
              The Oeuf mini library offers stylish and practical storage for
              children's rooms. Children will love its fun design and
              easy-to-reach height. Parents will love its sleek contemporary
              looks and sturdy construction.
            </p>
            <p class="px-1rem textColor text-base" style="font-size: 20px; line-height: 2rem">
              Smart Design: Low overall height Strong and stable construction
              Two storage compartments with hinged doors Can be attached to
              wall.
            </p>
            <p class="px-1rem textColor text-base" style="font-size: 20px; line-height: 2rem">
              Eco-friendly: Sustainably produced in Europe in an FSC certified
              facility Made of Baltic birch plywood and eco-MDF Finishes are non
              toxic, water-based and free of VOC health hazards Made under
              European environmental standards
            </p>
          </div>
        </section>
        <ProductDetail class="pt-1rem" />
        <RelatedProduct
          class="text-center"
          :productsArr="productsData"
          :slidesPerView="1"
          :slidesPerGroup="1"
          text="Customers Also Viewed"
          title="RELATED PRODUCTS"
        />
      </div>
    </div>
    <el-dialog
      class="w-100%"
      :model-value="showDialog" :before-close="beforeClose"
      center
    >
      <span class="text-2xl">
        {{ `${productInfo.productName}|Teak was added to your cart` }}
      </span>
      <template #footer>
        <div class="flex w-full">
          <nav class="buttonHoverStyle empty mx-4 w-50%" @click="showDialog = false">
            <ui class="font-black text-2xl h-50px flex justify-center items-center pointer noSelect buttonFont">
              CONTINUE SHOPPING
            </ui>
          </nav>
          <nav class="buttonStyle mx-4 w-50%" @click="goCartPage">
            <ui class="font-black text-2xl h-50px flex justify-center items-center pointer noSelect buttonFont">
              VIEW CART
            </ui>
          </nav>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<style scoped lang="scss">
.onPC{
  display: inherit;
}
.onMobile{
  display: none;
  box-sizing: border-box;
}
.calcHeight {
  height: calc(100vh - 150px);
}
.priceInfo {
  position: fixed;
  top: 0;
  right: 0;
}
.extend-background--left {
  padding-left: 3000px;
  margin-left: -3000px;
}
.sectionTitle {
  position: relative;
  color: black;
  top: -4.5rem;
}
select{
  height: 50px;
  font-size: larger;
  color:#353535;
  border-color:#dcdfe6;
  &:hover{
    border-color: #c0c4cc;
  }
  &:focus{
    outline:none;
  }
}

.border-topBottom {
  border: 1px solid#dfdfdf;
  border-left: 0px;
  border-right: 0px;
}
.optionTitle{
  color: #a6a6a6;
  font-size: larger;
  font-weight: 800;
}
:deep(.el-input) {
  height: 50px;
  font-size: larger;
}
:deep(.el-dialog){
    display: flex;
    flex-direction: column;
    margin:0 !important;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    height: 250px;
    .el-dialog__body{
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 100%;
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .el-dialog__headerbtn{
      svg path {
        color:black
      }
    }
}
:deep(.el-input__wrapper){
  pointer-events:none
}
:deep(.el-input-number__decrease){
  background-color:white;
  svg path {
    color:black
  }
}
:deep(.el-input-number__increase){
  background-color:white;
  svg path {
    color:black
  }
}
.buttonStyle{
  border-radius: 0;
  height: 50px;
  border: 2px solid #dbb385;
  background-color: #dbb385;
  color: #fff;
}
.buttonHoverStyle{
  transition: .2s;
  border-radius: 0;
  height: 50px;
  &.empty{
    border: 2px solid #dbb385;
    color: #dbb385;
    :hover{
      border-radius: 0;
      height: 50px;
      background-color: #dbb385;
      color: #fff;
    }
  }
    &.solid{
    background-color: #dbb385;
    color: #fff;
    :hover{
      border-radius: 0;
      background-color: white;
      height: 50px;
      border: 2px solid #dbb385;
      color: #dbb385;
    }
  }

}

@media screen and (max-width: 768px) {
  .onPC{
    display: none;
  }
  .onMobile{
    display: inherit;
  }
  :deep(.el-dialog){
    width: 100%;
    .buttonFont{
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
}

@media screen and (min-width: 1366px) {
  .priceInfo {
    max-width: calc(1366px / 3);
    right: calc((100vw - 1450px) / 2);
    padding-top: 290px;
  }
}
</style>
