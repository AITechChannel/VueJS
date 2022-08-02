<script setup>
import Practice from "@/components/Practice.vue";
</script>

<template>
  <div class="about">
    <Practice />
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
