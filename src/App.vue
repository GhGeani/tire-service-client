<template lang="pug">
main.position-relative
  nav-bar
  router-view
</template>

<script>
import navBar from './components/NavBar'

export default {
  name: 'tire-service',
  components: {
    navBar
  }
}
</script>

<style lang="stylus" scoped>
main
  width 100%
  height 100%
</style>
