import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Slides/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})