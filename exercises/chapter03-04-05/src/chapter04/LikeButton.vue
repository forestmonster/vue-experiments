<template>
  <button class="button" @click="like">Like</button>
</template>

<script>
export default {
  name: "like-button",
  methods: {
    like() {
      alert("liking")
    }
  }
}
</script>

<style scoped>
.button {
  font-family: "Lato";
  border: none;
  background: #57e298;
  cursor: pointer;
  padding: 5px 15px;
  color: white;
  border-radius: 20px;
  margin-right: 10px;
}
</style>

<!-- vim:set et nu sw=2 ts=2: -->
