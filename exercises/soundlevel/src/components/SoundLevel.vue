<template>
<p>Sound level: {{ levelText[level] }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: 'sound-level',
      levelText: {
        1: 'Quiet',
        2: 'Medium',
        3: 'Loud',
        4: 'Very Loud'
      },
    }
  },

  props: ['level']
}
</script>

<style>
* {
  font-family: "Lato";
}
</style>

<!-- vim:set et nu sw=2 ts=2: -->
