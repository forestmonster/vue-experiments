<template>
  <div id="app">
    <p>I have {{ 5 | currency }} in my pocket</p>
  </div>
</template>

<script>
import accounting from 'accounting'

export default {
  data() {
    return {

    }
  },

  filters: {
    currency(money) {
      return accounting.formatMoney(money)
    }
  }
}
</script>

<style>
</style>