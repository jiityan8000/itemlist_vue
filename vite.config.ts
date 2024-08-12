import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

import vituum from 'vituum'
import nunjucks from "@vituum/vite-plugin-nunjucks";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vituum(), nunjucks()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined // 手動チャンク分割を無効化
      }    
    },
    cssCodeSplit: false // CSS分割を無効化
  },
})
