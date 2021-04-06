import { createStore } from 'vuex'

export default createStore({
  state: {

    color: "red"

  },
  mutations: {

    setColor(state,payload) {
        state.color = payload ;
    }
  },
  actions: {
  },
  modules: {
  }
})
