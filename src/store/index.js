import { createStore } from 'vuex'

export default createStore({
  state: {
  
      nom : "",
      cognom :"",
      edat: 0


  },
  mutations: {

    setNom(state,payLoad)
    {
      state.nom = payLoad;
    },
    setCognom(state,payLoad)
    {
      state.cognom = payLoad;
    },
    setEdat(state,payLoad)
    {
      state.edat = payLoad;
    }
  },
  actions: {
  },
  modules: {
  }
})
