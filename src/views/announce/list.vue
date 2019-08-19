<template lang="pug">
  section.container
    .row
      .container.text-center(style="background-color: #EA846F")
        span.text-white.title Anunțuri
    .row(v-if="response.status === 200")
      ul.list-group
        announce(v-for="announce in response.data.result" :description="announce.description" :date="announce.date")
    .h5.text-muted.text-center(v-else) {{ response.statusText }}
</template>

<script>
import announce from './announce';
import axios from 'axios';

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
    console.log(this.response);
  },
  methods: {
    async getAll() {
      this.response = await axios.get('http://localhost:3000/announces?page=1');
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size 30px
</style>