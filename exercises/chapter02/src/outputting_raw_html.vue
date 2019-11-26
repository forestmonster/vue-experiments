<template>
  <div id="app" v-html="htmlTexts[0]">
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlTexts: [
        "Dear John,<br />thank you for the <pre>Batman vs Superman</pre> DVD!",
        "Dear John,<br />thank you for the <pre>Ghostbusters 3</pre> DVD!",
        "Dear John,<br />thank you, <b>Gods of Egypt</b> is my new favorite DVD!"
      ]
    }
  }
}
</script>

<style>
* {
  font-family: "Lato";
}
</style>

<!-- vim:set et nu sw=2 ts=2: -->
