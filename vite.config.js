import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // By removing the 'base' property, Vite will use relative paths for assets.
  // This is a more robust solution for GitHub Pages.
  plugins: [react()],
})
