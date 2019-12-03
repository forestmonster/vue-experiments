<template>
  <button class="button" @click="comment">Comment</button>
</template>

<script>
export default {
  name: "comment-button",
  methods: {
    comment() {
      alert("Commenting.")
    }
  }
}
</script>

<style scoped>
.button {
  font-family: "Lato";
  border: none;
  background: #576ce2;
  cursor: pointer;
  padding: 5px 15px;
  color: white;
  border-radius: 20px;
  margin-right: 10px;
}
</style>

<!-- vim:set et nu sw=2 ts=2: -->
