<template lang="pug">

nav.panel
  .panel-block
    p.control.has-icons-left
      input.input.is-small(type='text' placeholder='search' v-model='searchText')
      span.icon.is-small.is-left
        i.fas.fa-search(aria-hidden='true')
  a.panel-block(
    v-for='(client, index) in filteredClients'
    :class=`{
      'is-active': index === pickedCard
    }`
    @click='pickCard(index, client)'
  )
    Card(:client='client')
  .panel-block
    button.button.is-link.is-outlined.is-fullwidth(@click="searchText = ''")
      | reset search

</template>


<script>
import { mapState, mapActions } from 'vuex'

import Card from './Card'

export default {
  name: 'Search',
  components: {
    Card
  },
  data () {
    return {
      searchText: '',
      pickedCard: null
    }
  },
  computed: {
    filteredClients () {
      let clients = this.clients
      let searchText = this.searchText.toLowerCase()
      if (searchText) clients = clients.filter(item => {
        let fName = item.general.firstName.toLowerCase()
        let lName = item.general.lastName.toLowerCase()
        return fName.includes(searchText) || lName.includes(searchText)
      })
      return clients
    },
    ...mapState('clients', {
      clients: state => state.list
    })
  },
  methods: {
    pickCard (index, client) {
      this.pickedCard = index
      this.pickClient(client)
    },
    ...mapActions('clients', {
      pickClient: 'updateClient'
    })
  }
}
</script>


<style lang="sass">
@import '../../assets/styles/variables.sass'

</style>
