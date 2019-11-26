<template>
  <div id="app">
    <article>
      <p>
        They call me fruit.<br />
        They call me fish.<br />
        They call me insect.<br />
        But actually I'm none of those.<br />
      </p>
    </article>
    <div id="solution" @click="showSolution = !showSolution">
      I am a
      <transition name="fade">
        <span id="dragon" v-show="showSolution">Dragon</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSolution: false
    }
  }
}
</script>

<style>
* {
  font-family: "Lato";
}

#solution {
  background: coral;
  display: inline-block;
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1.5s;
}
</style>

<!-- vim:set et nu sw=2 ts=2: -->
