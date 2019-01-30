<template lang="pug">

nav.panel
  .panel-block
    p.control.has-icons-left
      input.input.is-small(type='text', placeholder='search')
      span.icon.is-small.is-left
        i.fas.fa-search(aria-hidden='true')
  a.panel-block.is-active
    Card
  .panel-block
    button.button.is-link.is-outlined.is-fullwidth
      | reset all filters

</template>


<script>
import Card from './Card'


export default {
  name: 'Search',
  components: {
    Card
  },
  data () {
    return {
      
    }
  },
  computed: {
    // ...mapState('profile', {
    //   user: state => state.user
    // }),
    // ...mapGetters('session', {
    //   isAuth: 'isAuth'
    // })
  },
  methods: {
    // ...mapActions('profile', {
    //   getUser: 'getInfo',
    //   veriCheck: 'verifiCheck'
    // })
  },
  created () {
    
  }
}
</script>


<style lang="sass">
@import '../../assets/styles/variables.sass'

</style>
