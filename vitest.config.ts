import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
    }),
    Components({
      dirs: ['components'],
    }),
    vuetify({
      autoImport: true,
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src/'),
      '@': path.resolve(__dirname, './src/'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
    setupFiles: path.resolve(__dirname, './src/tests/setup.ts'),
  },
})
