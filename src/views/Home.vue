<template lang="pug">

  .row.justify-content-center
    .col-12.col-sm-12.col-md-12.col-lg-4.col-xl-4
      announceList.border-bottom.border-warning
    .col-12.col-sm-12.col-md-12.col-lg-8.col-xl-8
      router-view
</template>

<script>
import announceList from './announce/list';
import saleList from './sales/list';
import serviceList from './services/list';

export default {
  components: {
    announceList,
    saleList,
    serviceList,
  }
}
</script>

<style lang="stylus" scoped>

</style>