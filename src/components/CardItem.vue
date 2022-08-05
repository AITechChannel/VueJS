<script>
export default {
  props: { title: String, des: String, imgUrl: String },
  //   props: ["title", "description"],
  emit: ["addCart"],
};
</script>

<template>
  <div class="container">
    <div class="img-container">
      <img :src="imgUrl" />
    </div>
    <h4>{{ title }}</h4>
    <p>{{ des }}</p>
    <button @click="$emit('addCart')">Add Cart</button>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 200px;
  img {
    width: 100%;
  }
}
</style>
