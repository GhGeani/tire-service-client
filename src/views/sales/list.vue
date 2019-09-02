<template lang="pug">
  section.card-columns.mt-2.container
    sale(v-for="sale in response.result" :title="sale.name" :description="sale.description" :images="sale.images" :date="sale.date" :id="sale._id" :key="sale._id")
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