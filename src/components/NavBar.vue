<template lang="pug">
  nav.navbar.navbar-dark.text-white.bg-dark.sticky-top.py-1.justify-content-around
    ul.nav
      router-link.nav-item.px-4.py-2(to="/" tag="li" title="Servicii")
        i.fas.fa-tools
      router-link.nav-item.px-4.py-2(to="/vanzari" tag="li" title="De vanzare")
        i.fas.fa-shopping-cart
      router-link.nav-item.px-4.py-2(to="/contact" tag="li" title="Contact")
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
  margin-right 1rem
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