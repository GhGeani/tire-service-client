<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light
    router-link.navbar-brand(to="/")
      img.logo(src="../assets/logo.png")
    button.navbar-toggler(data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation")
      span.navbar-toggler-icon
    .collapse.navbar-collapse.justify-content-center#navbarNavAltMarkup
      ul.navbar-nav
        router-link.nav-item(to="/" tag="li")
          i.fas.fa-home
          .nav-link Acasă
        router-link.nav-item(to="/servicii" tag="li")
          i.fas.fa-tools
          .nav-link Servicii
        router-link.nav-item(to="/vanzari" tag="li")
          i.fas.fa-shopping-cart
          .nav-link Vânzări
        a.nav-item(href="#contact" tag="li")
          i.fas.fa-address-book
          .nav-link Contact
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
  cursor pointer

.nav-item:hover
  background-color lightgrey 
  color #f56042
  transition 0.2s
a
  text-decoration none!important

</style>