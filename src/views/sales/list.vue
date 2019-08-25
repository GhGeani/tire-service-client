<template lang="pug">
  section.border-bottom.border-warning
    .row
      sale(v-for="sale in response.result" :title="sale.title" :description="sale.description" :images="sale.images" :date="sale.date" :key="sale._id")
</template>

<script>
import sale from './sale'
export default {
  props: {
    response: {}
  },
  components: {
    sale
  }
}
</script>

<style lang="stylus" scoped>

</style>