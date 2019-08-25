<template lang="pug">
  section
    .container.add-border-bottom
      h3.text-muted.text-center.title Serviciile oferite
    .row(v-if="response.status === 200")
      service(v-for="service in response.data" :name="service.name" :description="service.description")
    .h5.text-muted.text-center(v-else) {{ response.statusText }}
</template>

<script>
import service from './service';

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