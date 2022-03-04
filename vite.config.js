import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {join, resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: join(__dirname, 'public'),
  resolve: {
    alias: [
      {
        find: '/src',
        replacement: resolve(process.cwd(), 'src')
      }
    ]
  }
})
