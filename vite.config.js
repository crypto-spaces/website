import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  server: {
    port: 9774, // 服务端口
    host: '0.0.0.0',
  }
})
