import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PortFolio/', // Make sure this matches your repo name exactly (case-sensitive)
  plugins: [react()],
});