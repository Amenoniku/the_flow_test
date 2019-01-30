import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import clients from './stores/clients'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    clients
  }
})
