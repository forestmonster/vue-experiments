<template>
  <div id="app">
    <textarea v-model="memeText" :maxlength="limit" :class="{ warn: longText }" />

    {{ memeText.length }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      memeText: "What if I told you " + "CSS can do that",
      limit: 50
    }
  },

  computed: {
    longText() {
      const isClose = this.limit - this.memeText.length <= 10

      return isClose ? true : false
    }
  }
}
</script>

<style>
.warn {
  background: mistyrose;
}
</style>

<!-- vim:set et nu sw=2 ts=2: -->
