<template lang="pug">
  section
    .row
      .container.add-border-bottom.text-center.text-muted
        span.title Anunțuri
    .row.mt-4(v-if="response.status === 200")
      .container
        announce(v-for="announce in response.data.result" :description="announce.description" :date="announce.date")
    .h5.text-muted.text-center(v-else) {{ response.statusText }}
</template>

<script>
import announce from './announce';

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
      this.response = await this.$http.get('http://localhost:3000/announces?page=1');
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size 30px
</style>