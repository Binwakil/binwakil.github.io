import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // For a user or organization site (like username.github.io), the base path is root.
  base: '/', 
  plugins: [react()],
})

