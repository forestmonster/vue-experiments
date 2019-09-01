<template>
  <div id="app">
    <h1>List of expensive experiments</h1>
    <ul>
      <li v-bind:key="exp.name" v-for="exp in nonPhysics">
        {{ exp.name }} ${{ exp.cost }}M USD
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      experiments: [
        {name: 'Large Hadron Collider', cost: 650, field: 'Physics'},
        {name: "Violinist in Metro", cost: 3, field: "Psychology"}
      ]
    }
  },

  computed: {
    nonPhysics() {
      return this.experiments
        .filter(exp => exp.field !== 'Physics')
    }
  }
}
</script>

<style>

</style>
