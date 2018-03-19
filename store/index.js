import Vuex from 'vuex'
import make from './modules/make'

export default () => 
  new Vuex.Store({
    modules: {
      make,
    },
  },
)
