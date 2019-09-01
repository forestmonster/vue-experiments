<template>
  <div id="app">
    <input type="text" v-model="name"/>
    <input type="text" v-model="surname">
    <output>{{ computedFullName }}</output>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: "John",
      surname: "Snow"
    }
  },

  computed: {
    computedFullName() {
      return this.name + ' ' + this.surname
    }
  }
}
</script>

<style>

</style>
