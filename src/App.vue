<template lang="pug">
main
  navi
  header
    router-view
</template>

<script>
import navi from './components/navi'

export default {
  name: 'tire-service',
  components: {
    navi,
  }
}
</script>

<style lang="stylus" scoped>
</style>
