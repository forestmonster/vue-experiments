new Vue({
  el: '#app',
  data: {
    toasted: 0
  },

  methods: {
    toast() {
      this.toasted++
    }
  }
})
