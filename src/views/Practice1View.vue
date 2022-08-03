<script setup>
import FetchAPiVue from "@/components/FetchAPi.vue";
import Practice1 from "@/components/Practice1.vue";
</script>

<template>
  <div class="about">
    <Practice1 />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
