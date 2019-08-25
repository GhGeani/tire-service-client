<template lang="pug">
main
  navi
  header.container
    .row
      .col-12.col-sm-12.col-md-12.col-lg-8.m-auto
        carousel
      .col-12.col-sm-12.col-md-12.col-lg-4.mt-3
        announceList.border-bottom.border-warning
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
import announceList from './views/announce/list';


export default {
  name: 'tire-service',
  components: {
    navi,
    carousel,
    contact,
    Home,
    announceList,
  }
}
</script>

<style lang="stylus" scoped>

</style>
