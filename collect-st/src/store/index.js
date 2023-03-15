import { createStore } from 'vuex'
import { ref } from 'vue';


export default createStore({
  state:{
    username: ''
  },
  getters: {
  },
  mutations: {
    GETUSERNAME(state,value){
      state.username = value
      console.log('vuex',state.username)
    }
  },
  actions: {
    getUserName(context,value){
      context.commit('GETUSERNAME',value)
    }
  },
  modules: {
  }
})
