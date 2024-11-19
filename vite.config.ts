import { defineConfig } from "vite";

export default defineConfig({
  root: process.cwd(),

  build: {
    outDir: "dist",
    target: "esnext",
    rollupOptions: {
      input: "src/app/index.ts",
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
