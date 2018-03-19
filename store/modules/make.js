import { INITIALIZE, MAKE_TTL } from './../mutation-types'

export default {
  state: () => ({servers:[]}),
  mutations: {
    [INITIALIZE](state){
      state.servers = []
    },
    [MAKE_TTL](state, value){
      state.servers.push(value)
    },
  },
  actions: {
    initialize({ commit }){
      commit(INITIALIZE)
    },
    makeTtl({ commit, dispatch }, value){
      commit(MAKE_TTL, value)
      // Call API
      commit(INITIALIZE)
    },
  }
}
