<template lang="pug">
main
  navi
  carousel
  .container
    router-view
  contact
</template>

<script>
import navi from './components/navi'
import carousel from './components/carousel'
import contact from './components/contact'

export default {
  name: 'tire-service',
  components: {
    navi,
    carousel,
    contact
  }
}
</script>

<style lang="stylus" scoped>

</style>
