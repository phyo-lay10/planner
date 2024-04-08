<template>
  <div class="text-center mb-3">
    <router-link to="/" class="fw-bold fs-3 mx-3 text-decoration-none"
      >Plans</router-link
    >
    <router-link
      :to="{ name: 'addPlan' }"
      class="fw-bold fs-3 mx-3 text-decoration-none"
      >Plan</router-link
    >
  </div>
</template>

<script setup></script>

<style scoped>
a.router-link-active {
  border-bottom: 4px solid #00ce89;
}
</style>
