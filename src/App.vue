<template lang="pug">

section#app.section
  .container
    .columns
      .column.is-one-quarter
        Search
      .column
        Details

</template>

<script>
import Search from '@/components/Search'
import Details from '@/components/Details'

export default {
  name: 'App',
  components: {
    Search,
    Details
  }
}
</script>

<style lang="sass">
@import './assets/styles/index.sass'

#app
  // font-family: 'Avenir', Helvetica, Arial, sans-serif
  // -webkit-font-smoothing: antialiased
  // -moz-osx-font-smoothing: grayscale

</style>
