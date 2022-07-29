
import type { NowUserWantedProduct, ProductInfo } from '~/interfaceDict'

// export default {
//   state: readonly(state),
// }

const state: {
  products: ProductInfo[]
  shoppingCart: NowUserWantedProduct[]
  productsIDString: string[]
  overlay: boolean
} = {
  products: [],
  shoppingCart: [],
  productsIDString: [],
  overlay: false,
}

export default ref(state)
