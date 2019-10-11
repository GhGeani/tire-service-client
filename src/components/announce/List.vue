<template lang="pug">
.jumbotron.bg-light.my-1(v-if="response.data")
  h1.display-4.text-center.mb-2 Anunțuri
  .overflow
    announce(v-for="announce in response.data.result" :description="announce.description" :date="announce.date")
.h5.text-muted.text-center(v-else) Nu sunt incă anunțuri postate.
</template>

<script>
import announce from './Announce.vue';

export default {
  data() {
    return {
      response: {}
    }
  },
  components: {
    announce
  },
  async mounted() {
    await this.getAll();
  },
  methods: {
    async getAll() {
      this.response = await this.$http.get(`${this.$config.url}/announces`);
    }
  }
}
</script>

<style lang="stylus" scoped>
.overflow
  height 20rem
  overflow-y auto
</style>