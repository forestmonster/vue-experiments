<template>
  <div id="app">
    <div class="wrapper">
      <h1>Title of blog</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet.
      </p>
      <button class="button" @click="like">Like</button>
      <button class="comment-button" @click="comment">Comment</button>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue"

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  methods: {
    like() {
      alert("liking")
    },
    comment() {
      alert("commenting")
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

.wrapper {
  margin: 0 auto;
  width: 80%;
  max-width: 700px;
  text-align: left;
}

.button {
  border: none;
  background: #57e298;
  padding: 5px 15px;
  color: white;
  border-radius: 20px;
  margin-right: 10px;
}

.comment-button {
  border: none;
  background: #576ce2;
  padding: 5px 15px;
  color: white;
  border-radius: 20px;
  margin-right: 10px;
}

body {
  margin: 0;
  padding: 0;
}
</style>
