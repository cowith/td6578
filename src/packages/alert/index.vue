<template>
  <div class="vite-alert">
    <div class="vite-alert__content">
      <!-- using slot -->
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
      message: 'Hello World',
    };
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
