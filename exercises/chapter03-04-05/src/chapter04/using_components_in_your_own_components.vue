<template>
  <div id="app">
    <div class="wrapper">
      <h1>Applications in Dispatch</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet.
      </p>
      <like-button />
      <comment-button />
    </div>
  </div>
</template>

<script>
import LikeButton from "./LikeButton"
import CommentButton from "./CommentButton"

export default {
  name: "app",
  components: {
    LikeButton,
    CommentButton
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
</style>
