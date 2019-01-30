const GET_CLIENTS = 'test_quest_GET_CLIENTS'

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    [GET_CLIENTS] (state, clients) {
      state.list = clients
    },
  },
  actions: {
    getClients ({commit, dispatch}) {
      const DEV_MODE = process.env.NODE_ENV === 'development'
      if (DEV_MODE) commit(GET_CLIENTS, require('../assets/data/clients.json'))
      else fetch('/clients.json')
        .then(res => res.json())
        .then(json => commit(GET_CLIENTS, json))
    }
  }
}
