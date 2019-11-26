<template>
  <div id="app">I have {{ $ | currency }} in my pocket.</div>
</template>

<script>
import accounting from "accounting"
export default {
  data() {
    return {}
  },

  filters: {
    currency() {
      return 10
    }
  }
}
</script>

<style></style>
