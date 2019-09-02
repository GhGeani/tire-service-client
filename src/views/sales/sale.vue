<template lang="pug">
  .card
    router-link(:to="`/vanzari/${id}`")
      img.card-img-top(v-bind:src="`http://localhost:3000/files/${images[0]}`")
    .card-body.pb-0.pt-1
      p.card-title {{ title }}
      small.card-subtitle.float-right {{ date }}
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    images: Array,
    date: String,
    id: String
  }
}
</script>

<style lang="stylus" scoped>
.card:hover
  transition .1s
  background-color #e8dec9
img
  cursor pointer
</style>