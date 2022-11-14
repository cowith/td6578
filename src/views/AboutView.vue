<script type="module" setup>
import { ViteAlert } from 'http://127.0.0.1:3001/alert@1.1.es.js';
</script>

<template>
  <div class="about">
    <ViteAlert email="example@example.com"></ViteAlert>
  </div>
</template>

<style scoped>
@import url('http://127.0.0.1:3001/alert@1.1.css');
.red {
  color: red;
}
</style>
