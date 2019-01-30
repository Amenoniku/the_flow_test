<template lang="pug">

.card
  .card-content
    .media
      .media-left
        figure.image.is-128x128
          img(src='https://bulma.io/images/placeholders/128x128.png', alt='Placeholder image')
      .media-content
        p.title.is-4 John Smith
        p.subtitle.is-6 @johnsmith
    .content
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      | Phasellus nec iaculis mauris. 
      a @bulmaio
      | .
      a(href='#') #css
      a(href='#') #responsive
      br
      time(datetime='2016-1-1') 11:09 PM - 1 Jan 2016

</template>


<script>
// import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'Search',
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
@import '../assets/styles/variables.sass'

</style>
