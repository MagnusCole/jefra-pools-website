import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/google-apps-script': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/google-apps-script/, '/macros/s/AKfycbwOHC8dRw5UHYVU-xT2RISidyjd60TQKajpDk9p9jLhXosmzLsIlNZlBSWU_B8XA_1M2w/exec')
      }
    }
  }
})
