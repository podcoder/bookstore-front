<script setup lang="ts">
</script>

<template>
  <div class="navbar">
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link>
  </div>
  <div class="container content-center px-4">
      <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
  </div>
</template>

<style>

</style>
