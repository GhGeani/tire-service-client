<template lang="pug">
  .container.mt-3
    announces
    .row
      .jumbotron.col-12.col-md-5.bg-light
        h1.display-4.text-center Contact
        ul.list-group
          i.fab.fa-facebook.list-group-item
            a.btn.btn-link(href="https://www.facebook.com/badea.alinmarian") Badea Alin Marian
          i.fab.fa-whatsapp.list-group-item 
            a.btn.btn-link(href="https://api.whatsapp.com/send?phone=+40766712981") Whatsapp
          i.fas.fa-phone-square-alt.list-group-item 
            a.btn.btn-link(href="tel:+40766712981") 0766 712 981
          i.fas.fa-envelope-square.list-group-item 
            a.btn.btn-link(href="sms:+40766712981") 0766 712 981
      .jumbotron.col-12.col-md-7.pt-2.pb-5.mb-1.map-holder.bg-dark
        iframe#gmap_canvas(src='https://maps.google.com/maps?q=Parking%20Auto%20Ba%C8%99cov&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='yes' marginheight='0' marginwidth='0')
</template>

<script>
import Announces from '../components/announce/List.vue'

export default {
  components: {
    Announces
  }
}
</script>

<style lang="stylus" scoped>

.fa-facebook
  color #4267B2
  font-size 30px
.fa-phone-square-alt
  color #70ad69
  font-size 30px
.fa-envelope-square
  color #fcd619
  font-size 30px
.fa-whatsapp
  color #00E676
  font-size 30px
iframe
  width 100%
  height 100%
.map-holder
  height 30rem
</style>