<template>
  <div id="app">
    <input type="text" v-model="name"/>
    <input type="text" id="surname" value="Snow"/>
    <button @click="saveSurname">Save Surname</button>
  </div>
</template>

<script>
let surname = 'Snow'

export default {
  data() {
    return {
      name: "John"
    }
  },

  computed: {
    computedFullName() {
      return this.name + surname
    }

  },

  methods: {
    saveSurname() {
      surname = document.querySelector()
    }
  }
}
</script>

<style>
</style>