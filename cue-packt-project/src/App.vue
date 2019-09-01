<template>
  <div id="app">
    <div v-show="isNight">
      <p>I'm a ghost. Boo.</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },

  computed: {
    isNight() {
      return new Date('3 January 04:30').getHours() < 7
    }
  }
}
</script>

<style>
</style>