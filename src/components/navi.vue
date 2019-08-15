<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light
    router-link.navbar-brand(to="/")
      img.logo(src="../assets/logo.png")
    button.navbar-toggler(data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation")
      span.navbar-toggler-icon
    .collapse.navbar-collapse.justify-content-center#navbarNavAltMarkup
      ul.navbar-nav
        li.nav-item
          i.fas.fa-home
          router-link.nav-link(to="/") Acasă
        li.nav-item
          i.fas.fa-tools
          router-link.nav-link(to="/") Servicii
        li.nav-item
          i.fas.fa-shopping-cart
          router-link.nav-link(to="/") Vânzări
        li.nav-item
          i.fas.fa-address-book
          router-link.nav-link(to="/") Contact
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.logo 
  width 100%
  height 100%

.navbar-brand 
  width 100px
  height 100px

.nav-link
  text-align center
  font-size 20px
  display inline

.fas
  display inline
  font-size 25px
  margin-right 4px


.nav-item
  margin-right 5vw
  padding 3vw
  text-align center

.nav-item:hover
  background-color lightgrey 
  color #f56042
  transition 0.2s

</style>