import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
  ],
  define: {
    'process.env': loadEnv(mode, process.cwd()),
  },
  resolve: {
    alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
    ]
  },
});
