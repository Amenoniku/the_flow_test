<template lang="pug">

article.media
  .media-left
    figure.image.is-64x64
      img(:src='client.general.avatar' alt='Avatar')
  .media-content
    .content
      p
        strong {{ client.general.firstName }} {{ client.general.lastName }}
        br
        small {{ client.job.title }}

</template>


<script>
// import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'SCard',
  props: [ 'client' ]
}
</script>


<style lang="sass">
@import '../../assets/styles/variables.sass'

</style>
