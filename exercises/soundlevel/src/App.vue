<template>
  <div id="app">
   <sound-level :level='level' /> 
  </div>
</template>

<script>
import SoundLevel from './components/SoundLevel.vue'

export default {
  name: 'app',
  components: {
    SoundLevel
  },
  data() {
    return {
      level: 633
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
