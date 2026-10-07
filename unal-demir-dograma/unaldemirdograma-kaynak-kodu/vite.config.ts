import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const nitroPreset = process.env['VERCEL'] ? 'vercel' : undefined

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: true,
    port: 8080,
    strictPort: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    nitro(nitroPreset ? { preset: nitroPreset } : {}),
    viteReact(),
  ],
})
