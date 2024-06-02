import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    proxy: {
      '/auth': {
        target: 'http://h.princip.es:54001/damo',
        changeOrigin: true,
      },
      '/posts': {
        target: 'http://h.princip.es:54001/damo',
        changeOrigin: true,
      },
      '/mypage': {
        target: 'http://h.princip.es:54001/damo',
        changeOrigin: true,
      },
      '/profile': {
        target: 'http://h.princip.es:54001/damo',
        changeOrigin: true,
      }
    }
}})