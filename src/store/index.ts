
import type { ProductInfo } from '~/interfaceDict'
// export default {
//   state: readonly(state),
// }

const state: { products: ProductInfo[] | []; test: string } = {
  products: [],
  test: '',
}

export default ref(state)
