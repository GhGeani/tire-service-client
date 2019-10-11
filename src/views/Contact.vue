<template lang="pug">
  .container.mt-3
    .row
      .jumbotron.col-12.col-md-5.bg-light
        h1.font-italic.text-center Contact
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
        p.lead.font-italic.text-center.text-white.hint „La intrare în Calafat, Bascov, în spatele benzinăriei MOL”
        iframe#gmap_canvas(src='https://maps.google.com/maps?q=Parking%20Auto%20Ba%C8%99cov&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='yes' marginheight='0' marginwidth='0')
</template>

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
  height 90%
.hint
  height 10%
.map-holder
  height 30rem
</style>