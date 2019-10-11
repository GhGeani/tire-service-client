<template lang="pug">
main.position-relative
  nav-bar
  router-view
  foote
</template>

<script>
import navBar from './components/NavBar'
import foote from './components/Footer.vue'

export default {
  name: 'tire-service',
  components: {
    navBar,
    foote
  }
}
</script>

<style lang="stylus" scoped>
main
  width 100%
  height 100%
</style>
