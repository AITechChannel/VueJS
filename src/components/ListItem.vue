<script>
export default {
  props: { title: String, description: String },
  //   props: ["title", "description"],
  emit: ["select"],
};
</script>

<template>
  <div>
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
    <button @click="$emit('select')">Select</button>
    <slot></slot>
  </div>
</template>
