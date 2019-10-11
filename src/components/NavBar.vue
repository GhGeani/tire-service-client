<template lang="pug">
  nav.navbar.navbar-dark.text-white.bg-dark.sticky-top.py-1
    .navbar-brand VULCANIZARE
    ul.nav
      router-link.nav-item(to="/" tag="li")
        i.fas.fa-tools
      router-link.nav-item(to="/vanzari" tag="li")
        i.fas.fa-shopping-cart
      router-link.nav-item(to="/contact" tag="li")
        i.fas.fa-bullhorn.mr-1
        i.fas.fa-envelope
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.navbar
  opacity .9
.nav-item
  padding .3rem
  margin-right .7rem
.nav-item:hover
  background-color grey 
  transition 0.2s
  cursor pointer
  .fas
    color #54A2C6
  .nav-link
    color dark
.fas
.nav-link
  font-size 1.1rem 

</style>