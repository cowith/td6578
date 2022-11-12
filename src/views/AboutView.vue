<script type="module" setup>
// import { ViteAlert } from 'http://127.0.0.1:3001/my-lib.es.js';
</script>

<template>
  <div class="about">
    <ViteAlert email="example@example.com"></ViteAlert>
  </div>
</template>

<script type="module">
import { ViteAlert } from 'http://127.0.0.1:3001/my-lib.es.js';
// import ViteAlert from '../packages/alert/index.vue';
export default {
  components: {
    ViteAlert,
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
