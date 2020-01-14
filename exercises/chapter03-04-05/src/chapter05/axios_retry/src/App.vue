<template>
  <div id="app">
    <h3>Latest Bitcoin Price</h3>
    <p>{{ price }}</p>
  </div>
</template>

<script>
const externalURL = "https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR"

import axios from "axios"

export default {
  data() {
    return {
      price: "Loading price..."
    }
  },
  created() {
    axios
      .get(externalURL)
      .catch(error => {
        this.price = error
      })
      .then(returned => {
        this.price = returned.data[0].price_usd
      })
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
