<template>
<p>Sound level: {{ levelText[level] }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: 'sound-level',
      levelText: [
        'Quiet',
        'Medium',
        'Loud',
        'Very Loud'
      ],
    }
  },

  props: {
    level: {
      type: Number,
      default: 1,
      required: true,
      validator(x) {
        return x >= 0 && x <= 3
      }
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
