<template>
  <div class="card">
    <div class="remove" @click="remove">x</div>
    <h2>{{ title }}</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, mollitia eveniet! Doloremque nisi placeat praesentium amet soluta officiis aliquam. Aperiam perferendis nesciunt architecto odio repudiandae rerum eum ut quod vero.</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    remove: Function
  }
}
</script>

<style scoped>
.card {
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 20px;
  display: inline-block;
  margin: 0 20px 20px 0;
  vertical-align: top;
  position: relative;
}

.remove {
  border: 2px solid #941e43;
  border-radius: 12px;
  background: #941e43;
  color: white;
  margin: 2px;
  padding: 2px;
  width: 15px;
  text-align: center;
}
</style>
