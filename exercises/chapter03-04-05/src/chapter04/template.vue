<template>
  <div id="app">
    <button class="button" @click="like">Like</button>
  </div>
</template>

<script>
import LikeButton from "./LikeButton"
export default {
  name: "like-button",
  methods: {
    like() {
      alert("liking")
    }
  }
}
</script>

<style>
* {
  font-family: "Lato";
}

.button {
  border: none;
  background: #57e298;
  padding: 5px 15px;
  color: white;
  border-radius: 20px;
  margin-right: 10px;
}
</style>

<!-- vim:set et nu sw=2 ts=2: -->
