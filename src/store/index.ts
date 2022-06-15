
import { reactive, readonly } from 'vue'
import { createStore } from 'vuex'
export default createStore({
  state: {
    loginState: false,
    menuState: false,
  },
  getters: {
    loginState: state => state.loginState,
    menuState: state => state.menuState,
  },
})
const state = reactive({
  productInfo: {},
})

// export default {
//   state: readonly(state),
// }
