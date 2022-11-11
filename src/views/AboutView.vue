<template>
  <div class="about">
    <ViteAlert email="google.com"></ViteAlert>
    <h1 class="red">This is an about page</h1>
  </div>
</template>

<script type="module">
// import { ViteAlert } from 'http://127.0.0.1:8082/my-lib.es.js';
import ViteAlert from '../packages/alert/index.vue';
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
