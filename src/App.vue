<template lang="pug">
main
  navi
  carousel
  .container
    router-view
</template>

<script>
import navi from './components/navi'
import carousel from './components/carousel'

export default {
  name: 'tire-service',
  components: {
    navi,
    carousel
  }
}
</script>

<style lang="stylus" scoped>

</style>
