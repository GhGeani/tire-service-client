<template lang="pug">
  section.col-12.col-md-12.col-lg-4
    .card
      img.card-img-top(v-bind:src="`http://localhost:3000/files/${images[0]}`")
        
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    images: Array,
    date: String
  },
  mounted() {
    console.log(this.images[0]);
  },
}
</script>

<style lang="stylus" scoped>

</style>