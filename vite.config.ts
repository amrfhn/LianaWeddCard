import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_APP_BASE_URL || "/",
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    server: {
      port: 8081,
      proxy: {
        "/api/": {
          target: env.VITE_APP_BACKEND_URL,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/api/, "/"),
        },
      },
    },
    plugins: [vue()],
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
      },
    },
  };
});
