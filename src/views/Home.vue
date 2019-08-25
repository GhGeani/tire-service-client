<template lang="pug">

  .row.mt-5.pt-5
    .col-12
      router-view
</template>

<script>
import saleList from './sales/list';
import serviceList from './services/list';

export default {
  components: {
    saleList,
    serviceList,
  }
}
</script>

<style lang="stylus" scoped>

</style>