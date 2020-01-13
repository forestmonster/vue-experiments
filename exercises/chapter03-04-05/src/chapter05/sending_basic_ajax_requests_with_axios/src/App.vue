<template>
  <div id="app">
    <h2>Latest Bitcoin price</h2>
    <p>{{ price }}</p>
  </div>
</template>

<script>
const btcURL = "https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR"

import axios from "axios"

export default {
  name: "app",
  data() {
    return {
      price: "loading..."
    }
  },
  created() {
    axios
      .get(btcURL)
      .then(x => {
        this.price = x.data[0].price_usd
      })
      .catch(err => {
        this.price = err.message
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
