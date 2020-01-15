<template>
  <div id="app">
    <form @submit.prevent="vueSubmit">
      <div>
        <label>Name</label>
        <input type="text" required />
      </div>
      <div>
        <label>E-mail</label>
        <input type="email" required />
      </div>
      <div>
        <label>Submit</label>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    vueSubmit() {
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
