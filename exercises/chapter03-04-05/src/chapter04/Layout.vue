<template>
  <div>
    <header></header>
    <div class="wrapper">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style>
.wrapper {
  margin: 0 auto;
  width: 80%;
  max-width: 700px;
  text-align: left;
}

header {
  height: 40px;
  background: #222;
  margin-bottom: 20px;
  width: 100%;
}
</style>