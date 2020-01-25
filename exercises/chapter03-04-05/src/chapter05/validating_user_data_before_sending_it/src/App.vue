<template>
  <div id="app">
    <h3>Create a post</h3>
    <div>
      <form @submit.prevent="postSubmit" accept-charset="utf-8">
        <div>
          <label>Your name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label>Your thoughts</label>
          <input type="text" name="thoughts" id="thoughts" />
        </div>
        <div>
          <button type="submit">Submit thoughts</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      name: "",
      thoughts: "",
      userID: 5,
      response: ""
    }
  },
  methods: {
    postSubmit() {
      const data = {
        title: this.title,
        body: this.body,
        userID: this.userID
      }
      const postURL = "https://jsonplaceholder.typicode.com/posts"
      axios
        .post(postURL, data)
        .catch()
        .then(x => {
          debugger
          //this.name = "blah"
        })
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
  padding-bottom: 30px;
  border: 3px dashed #999;
}
</style>
