<template lang="pug">

.box
  article.media
    .media-left
      figure.image.is-64x64
        img(src='https://bulma.io/images/placeholders/128x128.png', alt='Image')
    .media-content
      .content
        p
          strong John Smith
          small @johnsmith
          small 31m
          br
          |           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
      nav.level.is-mobile
        .level-left
          a.level-item(aria-label='reply')
            span.icon.is-small
              i.fas.fa-reply(aria-hidden='true')
          a.level-item(aria-label='retweet')
            span.icon.is-small
              i.fas.fa-retweet(aria-hidden='true')
          a.level-item(aria-label='like')
            span.icon.is-small
              i.fas.fa-heart(aria-hidden='true')

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
@import '../../assets/styles/variables.sass'

</style>
