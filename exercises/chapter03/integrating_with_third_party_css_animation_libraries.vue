<template>
  <div id="app">
    <h3>{{ message }}</h3>
    <button @click="taxiCalled = true">
      Call a cab
    </button>
    <transition enter-active-class="animated slideInRight">
      <p v-if="taxiCalled">🚖</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hi there",
      taxiCalled: false
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
