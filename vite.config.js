import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  pages: {
    detail: {
      template: 'src/detail.html',
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        detail: './detail.html',
      },
      output: {
        manualChunks: undefined // 手動チャンク分割を無効化
      }    
    },
    cssCodeSplit: false // CSS分割を無効化
  },
})
