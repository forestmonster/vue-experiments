<template>
  <div id="app">
    <div class="wrapper">
      <input v-model="item" />
      <button>Add</button>

      <div style="display: flex">
        <div>
          <note-card
          v-for="item in list"
          v-bind:key="item.id"
          :remove="() => console.log('removing')"
          :title="item.name"
          />
        </div>
        <div>
          <note-summary-list :list="list" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteCard from "./NoteCard.vue"
import NoteSummaryList from "./NoteSummaryList.vue"

export default {
  name: "app",
  components: {
    NoteCard,
    NoteSummaryList
  },
  data() {
    return {
      item: '',
      list: [
        {
          id: 1,
          name: 'Dispatch Note 01'
        },
        {
          id: 2,
          name: 'Dispatch Note 02'
        },
        {
          id: 3,
          name: 'Dispatch Note 03'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  text-align: left;
}
</style>

<!-- vim:set et nu sw=2 ts=2: -->
