<template lang="pug">
main
  header
    navi
    carousel
  section.container.mt-4.mb-4  
    Home
  footer.container
    contact
</template>

<script>
import navi from './components/navi'
import carousel from './components/carousel'
import contact from './components/contact'
import Home from './views/Home'

export default {
  name: 'tire-service',
  components: {
    navi,
    carousel,
    contact,
    Home
  }
}
</script>

<style lang="stylus" scoped>

</style>
