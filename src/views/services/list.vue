<template lang="pug">
  section.container
    .container.add-border-bottom.mt-5
      h3.text-muted.text-center.title Serviciile oferite
    .row(v-if="response.status === 200")
      service(v-for="service in response.data" :name="service.name" :description="service.description")
    .h5.text-muted.text-center(v-else) {{ response.statusText }}
    footer.container.mt-4
      contact
</template>

<script>
import service from './service';

import contact from '../../components/contact'

export default {
  data() {
    return {
      response: {},
    }
  },
  components: {
    service,
    contact
  },
  methods: {
    async getAll() {
      this.response = await this.$http.get('http://localhost:3000/infos');
    }
  },
  async mounted() {
    await this.getAll();
  }
}
</script>

<style lang="stylus" scoped>

</style>