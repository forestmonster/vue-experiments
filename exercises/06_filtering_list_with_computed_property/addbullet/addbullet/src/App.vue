<template>
  <div id="app">
    <button @click="bullets++">Add bullet to list</button>
    <ul>
      <li v-bind:key="number" v-for="number in bullets">{{ myProperty }}</li>
    </ul>
    <h3>Font demonstration</h3>
    <p>This is a normal paragraph.</p>
    <p class="nice">
      Pack my box with twelve dozen liquor jugs. Pack my box with twelve dozen
      liquor jugs. Pack my box with twelve dozen liquor jugs.
    </p>
    <p id="bold">This is the &ldquo;bold&rdquo; paragraph.</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {bullets: 0};
  },
  computed: {
    myProperty() {
      alert('hi');
      return 'new Bullet';
    },
  },
};
</script>

<style>
#app {
  font-family: 'OCR A Std', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button,
h3 {
  font-family: 'Luminari', serif;
}

#bold {
  font-family: Arial, 'MS Trebuchet', sans-serif;
  font-weight: bold;
}
</style>
