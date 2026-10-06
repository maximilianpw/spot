import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const proxy = {
  "/api": { target: process.env.BACKEND_URL ?? "http://127.0.0.1:3001", changeOrigin: true },
};

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: { tsconfigPaths: true },
  server: { port: Number(process.env.FRONTEND_PORT ?? "5173"), strictPort: true, proxy },
  preview: { port: 4173, proxy },
});
