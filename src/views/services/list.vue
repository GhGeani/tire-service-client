<template lang="pug">
  section.border-bottom.border-warning
    .container(style="background-color: #EA846F")
      .text-white.text-center.title Serviciile oferite
    .list-group#list-tab(v-if="response.status === 200" role="tablist")
      service(v-for="service in response.data" :name="service.name" :description="service.description")
    .h5.text-muted.text-center(v-else) {{ response.statusText }}
</template>

<script>
import service from './service';

import axios from 'axios';

export default {
  data() {
    return {
      response: {},
    }
  },
  components: {
    service
  },
  methods: {
    async getAll() {
      this.response = await axios.get('http://localhost:3000/infos');
    }
  },
  async mounted() {
    await this.getAll();
    console.log(this.response);
  }
}
</script>

<style lang="stylus">
.title
  font-size 30px
</style>