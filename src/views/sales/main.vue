<template lang="pug">
  section.contianer
    .container(style="background-color: #EA846F")
      .text-white.text-center.title Vânzări
    list(v-if="response.status === 200" :response="response.data")
    h5.m-auto.text-muted(v-else) {{ response.statusText }}
    contact
</template>

<script>
import list from './list'
import contact from '../../components/contact.vue'

export default {
  components: {
    list,
    contact
  },
  data() {
    return {
      response: {}
    }
  },
  async mounted() {
    await this.getAll();
    console.log(this.response);
  },
  methods: {
    async getAll() {
      this.response = await this.$http.get('http://localhost:3000/items?page=1') 
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>