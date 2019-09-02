<template lang="pug">
.row
  .col-12
    carousel
  .col-12.mt-3
    announce-list
  footer.mt-4.container
    contact
</template>

<script>
import saleList from './sales/list';
import serviceList from './services/list';

import announceList from './announce/list';
import carousel from '../components/carousel'
import contact from '../components/contact'

export default {
  components: {
    saleList,
    serviceList,
    contact,
    announceList,
    carousel
  }
}
</script>

<style lang="stylus" scoped>

</style>