import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';
import commonjs from 'rollup-plugin-commonjs';
import externalGlobals from 'rollup-plugin-external-globals';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      compilerOptions: {},
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // ====================for isCE error====================
      // vue: resolve(__dirname, './node_modules/vue'),
    },
    // dedupe: ['vue'],
    // ====================for isCE error====================
  },
  build: {
    // outDir: 'lib',
    // lib: {
    //   entry: resolve(__dirname, './src/comp.js'),
    //   name: 'MyLib',
    //   formats: ['es', 'umd'],
    //   fileName: format => `my-lib.${format}.js`,
    // },
    rollupOptions: {
      external: ['vue'],

      // ====================for isCE error====================
      // resolve: {
      //   alias: {
      //     vue: resolve(__dirname, './node_modules/vue'),
      //   },
      //   dedupe: ['vue'],
      // },
      // ====================for isCE error====================

      plugins: [
        commonjs(),
        externalGlobals({
          vue: 'Vue',
          'vue-router': 'VueRouter',
        }),
      ],

      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
        },
      },
    },
  },
});
