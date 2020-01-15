<template>
  <div id="app">
    <h3>Write a new post</h3>
    <form>
      <div>
        <label>Title of your post: </label>
        <input type="text" v-model="title" />
      </div>
      <div>
        <label>Write your thoughts for the day: </label>
        <textarea name="thoughts" id="thoughts" v-model="body"></textarea>
      </div>
      <div>
        <button @click.prevent="submit">Submit</button>
      </div>
    </form>
    <h3>Response from the server</h3>
    <pre>{{ response }}</pre>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      userId: 1,
      title: "",
      body: "",
      response: "..."
    }
  },
  methods: {
    submit() {
      const data = {
        title: this.title,
        body: this.body,
        userId: this.userId
      }

      const url = "https://jsonplaceholder.typicode.com/posts"

      // eslint-disable-next-line
      axios.post(url, data).then(x => {
        // eslint-disable-next-line
        debugger
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
}
</style>
