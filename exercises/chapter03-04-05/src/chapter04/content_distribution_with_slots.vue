<template>
  <div id="app">
    <layout>
      <h1>Dispatch slots</h1>
      <p>Lorem ipsum stuff here</p>
      <card>
        <h2 slot="title">Card Title</h2>
        <p slot="content">Here's some text one might find on a card.</p>
      </card>
      <card>
        <h2 slot="title">Another card</h3>
        <p slot="content">Here's some more interesting text.</p>
        <button slot="content">Ok</button>
      </card>
    </layout>
  </div>
</template>

<script>
import Layout from "./Layout"
import Card from "./Card"

export default {
  name: "app",
  components: {
    Layout,
    Card
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
}

body {
  margin: 0;
  padding: 0;
}
</style>

<!-- vim:set et nu sw=2 ts=2: -->
