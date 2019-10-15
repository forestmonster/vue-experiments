<div id="app" class="app">
    <button v-on:click="toastedBreads++">Toast bread</button>
    <input type="text" value="" name="" id=""/>Quantity to put in the oven: {{ toastedBreads }}
</div>

new Vue({
  el: '#app',
  data: {
    toastedBreads: 0
  }
})
