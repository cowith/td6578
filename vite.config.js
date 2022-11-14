import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';
import commonjs from 'rollup-plugin-commonjs';
import externalGlobals from 'rollup-plugin-external-globals';
import importToCDN from 'vite-plugin-cdn-import';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      compilerOptions: {
        isCustomElement: tag => tag.includes('-'),
      },
    }),

    createHtmlPlugin({
      entry: '/src/main.js',

      // Data that needs to be injected into the index.html ejs template
      inject: {
        data: {
          scripts: `
            <script src="/libs/vue.global.js"></script>
          `,
        },
      },
    }),

    // importToCDN({
    //   modules: [
    //     {
    //       name: 'vue',
    //       var: 'Vue',
    //       path: 'https://unpkg.com/vue@3.2.41/dist/vue.global.js',
    //     },
    //     {
    //       name: 'vue-router',
    //       var: 'VueRouter',
    //       path: 'https://unpkg.com/vue-router@4.1.6/dist/vue-router.global.js',
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      // 'vue-demi', 'pinia'
      external: ['vue' /* 'vue-router', 'vue-demi', 'pinia' */],

      // output: {
      //   globals: {
      //     vue: 'Vue',
      //     'vue-router': 'VueRouter',
      //     'vue-demi': 'VueDemi',
      //     pinia: 'Pinia',
      //   },
      // },
    },
    plugins: [
      externalGlobals({
        vue: 'Vue',
        // 'vue-router': 'VueRouter',
        // 'vue-demi': 'VueDemi',
        // pinia: 'Pinia',
      }),
    ],
  },
});
