import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  root: process.cwd(),

  build: {
    outDir: "dist",
    target: "esnext",
    rollupOptions: {
      input: "src/app/index.ts",
    },
  },

  plugins: [tsconfigPaths()],

  server: {
    port: 3000,
    open: true,
  },
});
