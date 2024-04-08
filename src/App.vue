<template>
  <div class="container my-5">
    <Navbar />
    <!-- <h1>Hello</h1> -->

    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style scoped></style>
