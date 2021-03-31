import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    count: 0,
    permissionList: ['one', 'two', 'three']
  },
  mutations: {
    INCREMENT: (state, payload) => {
      state.count = state.count + payload.num
    },
    DECREMENT: state => state.count --,

    SETPERMISSION: (state, payload) => {
      state.permissionList = payload.list
    }
  },
  actions: {
    increment: (context, payload) => {
      context.commit('INCREMENT', payload)
    },
    decrement: (context) => {
      context.commit('DECREMENT')
    },
    setPermission: (context, payload) => {
      context.commit('SETPERMISSION', payload)
    }
  }
})
export default store
