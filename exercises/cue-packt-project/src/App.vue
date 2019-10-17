<template>
  <div id="app">
    <input type="text" v-model="name"/>
    <input type="text" v-model="surname"/>
    <br />
    <p><code>name</code>: <output>{{ name }}</output></p>
    <p><code>computedFullName</code>: <output>{{ computedFullName }}</output></p>
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
    complexCalculation() {
      let i = 0;
      for (i=0; i < 100000000; i++) {}
      return blah
    },
    computedFullName() {
      return this.name + this.surname
    }

  },
}
</script>

<style>
</style>