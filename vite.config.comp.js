import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';
import commonjs from 'rollup-plugin-commonjs';
import externalGlobals from 'rollup-plugin-external-globals';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const config = {
  alert: {
    entry: resolve(__dirname, './src/packages/alert/index.js'),
    // fileName: 'alert' + '@' + process.env.LIB_VERSION,
    fileName: formats => `alert@${process.env.LIB_VERSION}.${formats}.js`,
    name: 'ViteAlert',
  },
  math: {
    entry: resolve(__dirname, './src/packages/math/index.js'),
    // fileName: 'math' + '@' + process.env.LIB_VERSION,
    fileName: formats => `math@${process.env.LIB_VERSION}.${formats}.js`,
    name: 'ViteMath',
  },
};

const currentConfig = config[process.env.LIB_NAME];

if (currentConfig === undefined) {
  throw new Error('LIB_NAME is not defined or is not valid');
}

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
    },
  },
  build: {
    // outDir: 'lib',
    // lib: {
    //   entry: resolve(__dirname, './src/packages/alert/index.js'),
    //   name: 'MyLib',
    //   formats: ['es', 'umd'],
    //   fileName: format => `my-lib.${format}.js`,
    // },
    outDir: 'libs',
    lib: {
      ...currentConfig,
      formats: ['es', 'umd', 'iife', 'cjs'],
    },

    emptyOutDir: false,
    minify: false,
    copyPublicDir: false,

    rollupOptions: {
      external: ['vue', 'vue-router'],
      plugins: [
        commonjs(),
        externalGlobals({
          vue: 'Vue',
          'vue-router': 'VueRouter',
        }),
      ],
      output: {
        inlineDynamicImports: true,
        assetFileNames: assetInfo => {
          return `${process.env.LIB_NAME}@${process.env.LIB_VERSION}.css`;
        },
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
        },
      },
    },
  },
});
