<template>
  <div id="app">
    <h3>Everest pizza delivery</h3>
    <button @click="order" :disabled="inProgress">Order pizza!</button>
    <span v-show="inProgress">ordering...</span>

    <h4>Pizzas wanted</h4>
    <p>{{ requests }}</p>

    <h4>Pizzas ordered</h4>
    <span v-bind:key="pizza.id" v-for="pizza in responses">{{ pizza.id }} : {{ pizza.req }}</span>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      inProgress: false,
      requests: new Object(null),
      responses: new Object(null),
      counter: 0,
      impatientAxios: undefined
    }
  },

  created() {
    this.impatientAxios = axios.create({
      timeout: 2000
    })
  },

  methods: {
    order() {
      let request = { req: "large pizza", id: this.counter++ }

      this.inProgress = true
      this.requests[request.id] = request
      this.impatientAxios.get("http://httpstat.us/200").then(() => {
        this.inProgress = false
        this.responses[request.id] = this.requests[request.id]
        delete this.requests[request.id]
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
