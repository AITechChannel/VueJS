<script setup>
import FetchAPiVue from "@/components/FetchAPi.vue";
import Practice2 from "@/components/Practice2.vue";
</script>

<template>
  <div class="about">
    <Practice2 />
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
