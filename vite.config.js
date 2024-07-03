import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/MeuPortfolio/api': {
        target: 'http://localhost:3000', // Porta do seu servidor backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/MeuPortfolio\/api/, '/api'),
      },
    },
  },
});
