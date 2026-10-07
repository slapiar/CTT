import { defineConfig, normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const cesium = normalizePath(resolve(here, '../../node_modules/cesium/Build/Cesium'));
export default defineConfig({
  base: './',
  define: { CESIUM_BASE_URL: JSON.stringify('cesium/') },
  plugins: [viteStaticCopy({targets: ['Workers', 'ThirdParty', 'Assets', 'Widgets'].map(name => ({src: `${cesium}/${name}`, dest: 'cesium'}))})],
});
