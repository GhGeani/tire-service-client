<template lang="pug">
  .row
    sale(v-for="sale in response" :title="sale.name" :description="sale.description" :images="sale.images" :date="sale.date" :id="sale._id" :key="sale._id")
</template>

<script>
import sale from './Sale'
export default {
  props: {
    response: {}
  },
  components: {
    sale
  }
}
</script>

<style lang="css" scoped>

@media (max-width: 991.98px) {
  img {
    height: 15rem;
    widows: 15rem;
  }
}
</style>