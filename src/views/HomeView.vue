<script setup>
import TheWelcome from '../components/TheWelcome.vue';

import { ViteAlert } from 'http://127.0.0.1:3001/alert@1.1.es.js';
</script>

<template>
  <main>
    <ViteAlert email="example@example.com"></ViteAlert>

    <TheWelcome />
  </main>
</template>
