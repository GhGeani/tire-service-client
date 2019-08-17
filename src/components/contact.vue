<template lang="pug">
  section.container
    .row
      .container.bg-light.text-dark.text-center
        span.display-4.text-muted Contact
    .row.mt-3
        .col-md-6
          ul.list-group
            p.text-center.list-group-item.text-white(style="background-color: #EA846F") Unde mă poți găsi?
            i.fab.fa-facebook.list-group-item
              button.btn.btn-link(href="https://www.facebook.com/badea.alinmarian") Badea Alin Marian
            i.fab.fa-whatsapp.list-group-item 
              a.btn.btn-link(href="https://api.whatsapp.com/send?phone=0766712981") Trimite mesaj whatsapp
            i.fas.fa-phone-square-alt.list-group-item 
              a.btn.btn-link(href="tel:+40766712981") Sună acum
            i.fas.fa-envelope-square.list-group-item 
              a.btn.btn-link(href="sms:+40766712981") Trimite sms
        .col-md-6
          iframe#gmap_canvas(src='https://maps.google.com/maps?q=Parking%20Auto%20Ba%C8%99cov&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='yes' marginheight='0' marginwidth='0')
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

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

</style>