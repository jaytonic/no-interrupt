<script setup>
import Header from "../components/header.vue";
</script>

<template>
  <div class="container min-h-screen">
    <Header class="header"></Header>
    <div class="content bg-white border-round-lg p-3 mb-3 shadow-6">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr fit-content(64rem) 1fr;
  grid-template-rows: min-content auto;
}
.header {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.content {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
</style>
