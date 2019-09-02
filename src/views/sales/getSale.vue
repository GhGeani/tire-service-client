<template lang="pug">
  .card(v-if="response.status === 200").mt-5
    .carousel.slide#sale(data-ride='carousel')
      ol.carousel-indicators
        li(v-for="(img, index) in response.data.images" :data-slide-to="index" data-target='#sale' v-bind:class="(index == 0) ? 'active' : ''")
      .carousel-inner
        .carousel-item(v-for="(img, index) in response.data.images" :class="(index == 0) ? 'active' : ''")
          img.w-100.h-100(v-bind:src="`http://localhost:3000/files/${img}`")
      .actions(v-if="response.data.images.length > 1")
        a.carousel-control-prev(href="#sale" role="button" data-slide="prev")
          span.carousel-control-prev-icon(aria-hidden="true")
          span.sr-only Previous
        a.carousel-control-next(href="#sale" role="button" data-slide="next")
          span.carousel-control-next-icon(aria-hidden="true")
          span.sr-only Next 
    .card-body
      .card-title {{ response.data.name }}
      .card-text.font-weight-light {{ response.data.description }}
  p(v-else) {{ response.statusText }}
</template>

<script>
export default {
  data() {
    return {
      response: {}
    }
  },
  async mounted() {
    await this.get();
    console.log(this.response)
  },
  methods: {
    async get() {
      this.response = await this.$http.get(`http://localhost:3000/item/${this.$route.params.id}`);
    }
  }
}
</script>

<style lang="stylus" scoped>
.carousel-inner
  width 100%
  height 100%
</style>