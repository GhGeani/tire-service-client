<template lang="pug">
  section.bg-light(v-if="response")
    .container.my-3
      form.form-group(v-on:submit.prevent="search")
        input.form-control.lead(type="text" placeholder="Cauți ceva anume?" v-model="words")
    .container
        list(v-if="response.status === 200" :response="response.data")
        .container(v-else)
          p.
          | Nu avem încă acest produs in stoc. 
          router-link(to="/contact") Contactează-ne
          |  pentru mai multe detalii sau verifică sectiunea de 
          router-link(to="/contact") anunțuri
</template>

<script>
import list from '../components/sales/List.vue'

export default {
  components: {
    list,
  },
  data() {
    return {
      response: undefined,
      words: '',
      loading: false,
    }
  },
  async created() {
    await this.getAll();
  },
  methods: {
    async getAll() {
      this.loading = true;
      this.response = await this.$http.get(`${this.$config.url}/items`);
      this.loading = false;
    },
    async search() {
      const params = { page: 1 };
      if(this.words)  params.words = this.words.replace(/ /g, ',');
      else  params.words = ',';
      this.loading = true;
      this.response = await await this.$http.get(`${this.$config.url}/items/search`, { params });
      this.loading = false;
    },
   
  }
}
</script>