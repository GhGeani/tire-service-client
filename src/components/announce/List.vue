<template lang="pug">
  section
    .row
      .container.text-center.text-muted 
        hr
        h3.title Anunțuri
        hr
    .row.mt-4(v-if="response.status === 200")
      .container
        announce(v-for="announce in response.data.result" :description="announce.description" :date="announce.date")
    .h5.text-muted.text-center(v-else) {{ response.statusText }}
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
      this.response = await this.$http.get(`${this.$config.url}/announces?page=1`);
    }
  }
}
</script>
