<template>
  <div id="app">I have {{ 357 | currency }} in my pocket.</div>
</template>

<script>
import accounting from "accounting"
export default {
  data() {
    return {}
  },

  filters: {
    currency(money) {
      return accounting.formatMoney(money)
    }
  }
}
</script>

<style></style>

<!-- vim:set et nu sw=2 ts=2: -->
