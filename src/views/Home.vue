<template lang="pug">
section
    presentation.text-center
    .container-fluid.text-center.bg-dark.text-white.p-5
      .row
        .col-12.col-md-6
          h3.title Unde suntem?
          p.lead.font-italic „La intrare în Calafat, Bascov, în spatele benzinăriei MOL”
        .col-12.col-md-6
          h3.title Contactează-ne
          h6.mb-0 Telefon:
            a.btn.btn-link(href="tel:+40766712981") +40766712981
          h6.mt-0 Facebook:
            a.btn.btn-link(href="https://www.facebook.com/badea.alinmarian") Badea Alin
    services
</template>

<script>
import presentation from '../components/presentation/Presentation.vue'
import services from '../components/services/List.vue';

export default {
  components: {
    presentation,
    services
  }
}
</script>

<style lang="stylus" scoped>
iframe
  height 350px
</style>