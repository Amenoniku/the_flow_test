const GET_CLIENTS = 'test_quest_GET_CLIENTS'
const UPDATE_CLIENT = 'test_quest_UPDATE_CLIENT'

export default {
  namespaced: true,
  state: {
    list: [],
    client: {}
  },
  mutations: {
    [GET_CLIENTS] (state, clients) {
      state.list = clients
    },
    [UPDATE_CLIENT] (state, client) {
      state.client = client
    },
  },
  actions: {
    getClients ({commit}) {
      const DEV_MODE = process.env.NODE_ENV === 'development'
      if (DEV_MODE) commit(GET_CLIENTS, require('../assets/data/clients.json'))
      else fetch('/clients.json')
        .then(res => res.json())
        .then(json => commit(GET_CLIENTS, json))
    },
    updateClient ({commit}, client) {
      commit(UPDATE_CLIENT, client)
    }
  }
}
