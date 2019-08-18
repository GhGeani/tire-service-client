<template lang="pug">
    .container.carousel.slide#carouselExampleIndicators(data-ride='carousel')
      ol.carousel-indicators
        li.active(data-target='#carouselExampleIndicators' data-slide-to='0')
        li(data-target='#carouselExampleIndicators' data-slide-to='1')
        li(data-target='#carouselExampleIndicators' data-slide-to='2')
      .carousel-inner
        .carousel-item.active
          img.d-block.w-100(src='../assets/img1.jpeg' alt='First Slide')
        .carousel-item
          img.d-block.w-100(src='../assets/img2.jpeg' alt='Second Slide')
      a.carousel-control-prev(href="#carouselExampleIndicators" role="button" data-slide="prev")
        span.carousel-control-prev-icon(aria-hidden="true")
        span.sr-only Previous
      a.carousel-control-next(href="#carouselExampleIndicators" role="button" data-slide="next")
        span.carousel-control-next-icon(aria-hidden="true")
        span.sr-only Next
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.carousel-item
  height 300px
  background-color lightgrey
  opacity 0.8
</style>