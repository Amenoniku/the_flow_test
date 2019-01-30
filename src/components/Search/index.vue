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
    @click='pickCard(index)'
  )
    Card(:client='client')
  .panel-block
    button.button.is-link.is-outlined.is-fullwidth(@click="searchText = ''")
      | reset search

</template>


<script>
import { mapState } from 'vuex'

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
      // if (searchText)
      return clients
    },
    ...mapState('clients', {
      clients: state => state.list
    })
  },
  methods: {
    pickCard (index) {
      this.pickedCard = index
    }
  }
}
</script>


<style lang="sass">
@import '../../assets/styles/variables.sass'

</style>
