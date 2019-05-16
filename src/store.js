import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    num:1,
    tips: '我是提示语'
  },
  mutations: {
    addCount(state) {
      state.count ++;
    },
    changeTips(state, mes) {
      state.tips = mes.mes;
    },
  },
  getters: {
    countTip(state) {
      if(state.count == 1){
        return '此时数字为' + state.count;
      }
    },
  }
})
