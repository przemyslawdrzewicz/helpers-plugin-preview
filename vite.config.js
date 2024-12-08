import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Alias @ to src directory
    }
  },
  server: {
    host: '0.0.0.0', // Allow access from any IP address
    port: 5000 // You can specify any available port
  }
})
