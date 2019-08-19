<template lang="pug">
  .list-group-item.list-group-item(id='list-' + ${name + '-list' data-toggle="list" href="#list-" + name role="tab" aria-controls=name) {{ name }}
</template>

<script>
export default {
  props: {
    name: String,
    description: String
  }
}
</script>

<style lang="stylus" scoped>

</style>