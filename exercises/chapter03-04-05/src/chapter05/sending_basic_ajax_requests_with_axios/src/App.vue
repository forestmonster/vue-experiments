<template>
  <div id="app">
    <h2>Latest Bitcoin price</h2>
    <p>{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      price: 'loading...'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
