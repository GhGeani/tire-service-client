<template lang="pug">
  section(v-if="response.status === 200")
    service(v-for="(service, index) in response.data" :name="service.name" :description="service.description" :img="service.img" :key="index")
  h5.text-muted.text-center(v-else) {{ response.statusText }}
</template>

<script>
import service from './Service.vue';

export default {
  data() {
    return {
      response: {},
    }
  },
  components: {
    service,
  },
  methods: {
    async getAll() {
      this.response = await this.$http.get(`${this.$config.url}/infos`);
    }
  },
  async mounted() {
    await this.getAll();
  }
}
</script>