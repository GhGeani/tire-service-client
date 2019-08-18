<template lang="pug">
  section.container
    .row
      .container.text-center(style="background-color: #EA846F")
        span.text-white.title Anunțuri
    .row(v-if="message === ''")
      ul.list-group
        announce(v-for="announce in data.data" :description="announce.description", :date="announce.date")
    p.text-muted(v-else) {{ message }}
</template>

<script>
import announce from './announce';
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
      message: ''
    }
  },
  components: {
    announce
  },
  async mounted() {
    const result = await this.getAll();
    console.log(result);
    if(result.status === 200) return this.data = result.data
     return this.message = result.statusText;
  },
  methods: {
    async getAll() {
      const result =  await axios.get('http://localhost:3000/announces?page=1');
      return result;
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size 30px
</style>