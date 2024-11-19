import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    rollupOptions: {
      input: "src/app/index.ts",
    },
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "node",
    include: ["src/test/unit/**/*.test.ts"],
  },
});
