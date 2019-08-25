<template lang="pug">
  .col-12.col-sm-12.col-md-6.col-lg-4.mt-5
    .container.text-center
      i.fas.fa-tools
      h5.text-muted.mt-3 {{ name }}
      p.font-weight-light {{ description }}
</template>

<script>
export default {
  props: {
    name: String,
    description: String
  },
}
</script>

<style lang="stylus" scoped>
.fas
  color #EA846F
  font-size 30px
</style>
