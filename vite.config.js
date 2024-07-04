import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MeuPortfolio/', // Caminho base para o GitHub Pages
  plugins: [react()],
});
