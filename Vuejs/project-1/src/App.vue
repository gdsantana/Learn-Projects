<template>
  <div class="home-container">
    <Login />
  </div>
</template>


<script setup lang="ts">
import Login from './components/Login.vue'
</script>


<style scoped>
.home-container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #222222;
  
}
</style>
