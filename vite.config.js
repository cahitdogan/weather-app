import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Tüm IP adreslerinden gelen bağlantıları kabul eder
    port: 3000,      // Vite sunucusunun çalışacağı port
    open: true       // Tarayıcıda otomatik olarak açılır
  }
})