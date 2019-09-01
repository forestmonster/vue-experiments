<template>
  <div id="app">
    <textarea 
      v-model="memeText"
      :class="{warn: tooLong}"
      :maxlength="limit"
    />

    {{ memeText.length }}

  </div>
</template>

<script>

export default {
  data() {
    return {
      memeText: 'What if I told you ' + 'CSS can do that',
      limit: 50
    }
  },

  computed: {
    tooLong() {
      const gettingClose = this.limit - this.memeText.length <= 10

      if (gettingClose) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
  .warn {
    background: mistyrose
  }
</style>