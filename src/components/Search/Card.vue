<template lang="pug">

article.media
  .media-left
    figure.image.is-64x64
      img(src='https://bulma.io/images/placeholders/128x128.png', alt='Image')
  .media-content
    .content
      p
        strong John Smith
        br
        small @johnsmith

</template>


<script>
// import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'SCard',
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
