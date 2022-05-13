import { fileURLToPath, URL } from 'url'

// const { resolve } = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // build: {
  //   rollupOptions: {
  //     input: {
        // index: resolve(__dirname, 'src/pages/index/index.html')
  //     }
  //   }
  // },
  server: {
    proxy: {
      // 选项写法
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      // 正则表达式写法
      '^/ofy/.*': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/ofy/, '')
      },
    }
  }
})
