// vite.config.ts
import { TanStackRouterVite } from "file:///T:/composer-frontend/node_modules/@tanstack/router-vite-plugin/dist/esm/index.js";
import react from "file:///T:/composer-frontend/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig, loadEnv } from "file:///T:/composer-frontend/node_modules/vite/dist/node/index.js";
var vite_config_default = ({ mode }) => defineConfig({
  plugins: [
    react(),
    TanStackRouterVite()
  ],
  define: {
    "process.env": loadEnv(mode, process.cwd())
  },
  resolve: {
    alias: [
      {
        find: "./runtimeConfig",
        replacement: "./runtimeConfig.browser"
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJUOlxcXFxjb21wb3Nlci1mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiVDpcXFxcY29tcG9zZXItZnJvbnRlbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1Q6L2NvbXBvc2VyLWZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVGFuU3RhY2tSb3V0ZXJWaXRlIH0gZnJvbSAnQHRhbnN0YWNrL3JvdXRlci12aXRlLXBsdWdpbic7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PiBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBUYW5TdGFja1JvdXRlclZpdGUoKSxcbiAgXSxcbiAgZGVmaW5lOiB7XG4gICAgJ3Byb2Nlc3MuZW52JzogbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICcuL3J1bnRpbWVDb25maWcnLFxuICAgICAgICByZXBsYWNlbWVudDogJy4vcnVudGltZUNvbmZpZy5icm93c2VyJyxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtQLFNBQVMsMEJBQTBCO0FBQ3JSLE9BQU8sV0FBVztBQUNsQixTQUFTLGNBQWMsZUFBZTtBQUd0QyxJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQU0sYUFBYTtBQUFBLEVBQ3hDLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixlQUFlLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUFBLEVBQzVDO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
