import fs from 'fs';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import { build } from 'vite';
import { babel } from '@rollup/plugin-babel';
import glob from 'fast-glob';

const imports = [];

const getImports = async () => {
  const files = await glob([
    path.resolve('../../components/**/package.json'),
    '!**/node_modules/**/*',
  ]);
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const pkg = JSON.parse(content);
    if (pkg.imports) {
      imports.push({
        name: pkg.name,
        lib: path.resolve(file, '../', pkg.imports.lib),
        style: path.resolve(file, '../', pkg.imports.style),
      });
    }
  });
};

await getImports();

imports.forEach(async item => {
  await build({
    configFile: false,
    build: {
      lib: {
        entry: item.lib,
        name: item.name,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
          assetFileNames: `${item.name}/[name].[ext]`,
          entryFileNames: () => '[name]/[name].[format].js',
        },
      },
    },
    plugins: [vue(), babel({ babelHelpers: 'bundled' })],
  });
});
