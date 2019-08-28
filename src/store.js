import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: [],
    toast: {
      message: null,
      show: false
    },
  },
  getters: {
    getCompanies(state) {
      return state.companies
    },
    getToast(state) {
      return state.toast
    },
  },
  mutations: {
    addNewCompany(state, payload) {
      state.companies.push(payload)
    },
    showToast(state, toast) {
      // seconds to show
      var duration = toast.duration ? toast.duration : 4;

      state.toast.message = toast.message;
      state.toast.show = true;
      
      setTimeout(() => {
        state.toast.show = false;
      }, duration * 1000)

    }
  },
  actions: {

  }
})