<template lang="pug">

nav.panel
  p.panel-heading
    | repositories
  .panel-block
    p.control.has-icons-left
      input.input.is-small(type='text', placeholder='search')
      span.icon.is-small.is-left
        i.fas.fa-search(aria-hidden='true')
  p.panel-tabs
    a.is-active all
    a public
    a private
    a sources
    a forks
  a.panel-block.is-active
    span.panel-icon
      i.fas.fa-book(aria-hidden='true')
    |     bulma
  a.panel-block
    span.panel-icon
      i.fas.fa-book(aria-hidden='true')
    |     marksheet
  a.panel-block
    span.panel-icon
      i.fas.fa-book(aria-hidden='true')
    |     minireset.css
  a.panel-block
    span.panel-icon
      i.fas.fa-book(aria-hidden='true')
    |     jgthms.github.io
  a.panel-block
    span.panel-icon
      i.fas.fa-code-branch(aria-hidden='true')
    |     daniellowtw/infboard
  a.panel-block
    span.panel-icon
      i.fas.fa-code-branch(aria-hidden='true')
    |     mojs
  label.panel-block
    input(type='checkbox')
    |     remember me
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
