import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://final-real-estate-project.onrender.com/api',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
