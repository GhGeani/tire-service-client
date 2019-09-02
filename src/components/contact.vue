<template lang="pug">
  .container
    .row
      .container.text-center(style="background-color: #EA846F")
        span.text-white.title Contact
    .row.mt-3
        .col-md-6
          ul.list-group
            .container.text-center(style="background-color: #EA846F")
              span.text-white.subtitle Date de contact
            i.fab.fa-facebook.list-group-item
              a.btn.btn-link(href="https://www.facebook.com/badea.alinmarian") Badea Alin Marian
            i.fab.fa-whatsapp.list-group-item 
              a.btn.btn-link(href="https://api.whatsapp.com/send?phone=0766712981") Trimite mesaj whatsapp
            i.fas.fa-phone-square-alt.list-group-item 
              a.btn.btn-link(href="tel:+40766712981") 0766 712 981
            i.fas.fa-envelope-square.list-group-item 
              a.btn.btn-link(href="sms:+40766712981") 0766 712 981
        .col-md-6
          .container.text-center(style="background-color: #EA846F")
            span.text-white.subtitle Locație
          iframe#gmap_canvas(src='https://maps.google.com/maps?q=Parking%20Auto%20Ba%C8%99cov&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='yes' marginheight='0' marginwidth='0')
</template>

<style lang="stylus" scoped>
iframe
  width 100%
  height 350px
.fa-facebook
  color #4267B2
  font-size 30px
.btn-link
  font-size 24px 
.container-fluid
  .row
    .container
      .col-md-6
        p
          font-size 20px
.fa-phone-square-alt
  color #70ad69
  font-size 30px
.fa-envelope-square
  color #fcd619
  font-size 30px
.fa-whatsapp
  color #00E676
  font-size 30px
.title
  font-size 30px
.subtitle
  font-size 20px
</style>