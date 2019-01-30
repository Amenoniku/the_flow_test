<template lang="pug">

.c-details.card
  .card-content(v-if='isClient')
    .media
      .media-left
        figure.image.is-128x128
          img(:src='client.general.avatar', alt='Avatar')
      .media-content
        p.title.is-3 {{ client.general.firstName }} {{ client.general.lastName }}
        p.subtitle.is-4 {{ client.job.title }} - {{ client.job.company }}
    .content
      p.subtitle.is-5 Address
      span
        strong City: 
        | {{ client.address.city }}
      br
      span
        strong Country: 
        | {{ client.address.country }}
      br
      span
        strong Street: 
        | {{ client.address.street }}
      br
      span
        strong Zip code: 
        | {{ client.address.zipCode }}
    .content
      p.subtitle.is-5 Contants
      span
        strong Email: 
        | {{ client.contact.email }}
      br
      span
        strong Phone: 
        | {{ client.contact.phone }}
  .card-content(v-else)
    p.title.is-3 Please pick some client

</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'Details',
  computed: {
    isClient () {
      return Object.keys(this.client).length !== 0
    },
    ...mapState('clients', {
      client: state => state.client
    })
  }
}
</script>


<style lang="sass">

</style>
