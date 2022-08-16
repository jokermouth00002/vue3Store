
import type { NowUserWantedProduct, ProductInfo } from '~/interfaceDict'

// export default {
//   state: readonly(state),
// }

const state: {
  products: ProductInfo[]
  shoppingCart: NowUserWantedProduct[]
  productsIDString: string[]
  overlay: boolean
  searchString: string
} = {
  products: [],
  shoppingCart: [],
  productsIDString: [],
  overlay: false,
  searchString: '',
}

export default ref(state)
