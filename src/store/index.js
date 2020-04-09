import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { instance } from '@/utils/http'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 实现了对于vuex的持久化存储
  plugins: [createPersistedState()],
  state: {
    datas: []
  },
  mutations: {
  },
  actions: {
    getDetailsActions (store) {
      instance.get(`/o/home/product/${this.$route.query.id}/4?discount=0&gradeSpecIds=`).then(res => {
        // this.datas = res.data.data
        store.commit('setdetailslist', res.data.data)
      })
    }
  },
  modules: {
    setdetailslist (state, data) {
      state.datas = data
    }
  }
})
export default store
