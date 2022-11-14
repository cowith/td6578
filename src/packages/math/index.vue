<template>
  <div class="vite-math">
    <div class="vite-math__content">
      <slot></slot>
      <h1 class="red">{{ message }} - {{ email }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      message: 'Math',
    };
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
