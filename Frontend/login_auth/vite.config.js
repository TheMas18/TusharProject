import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Add this import for path resolution

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'jwt-decode': path.resolve(__dirname, 'node_modules/jwt-decode'),
    },
  },
  optimizeDeps: {
    include: ['jwt-decode'],
  },
});
