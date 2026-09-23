import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://schroedermarc.github.io/portfolio-site/ via GitHub Pages
  base: '/portfolio-site/',
  plugins: [react(), tailwindcss()],
})
