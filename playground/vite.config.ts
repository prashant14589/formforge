import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@df/core": path.resolve(__dirname, "../packages/core/src"),
      "@df/react-binding": path.resolve(
        __dirname,
        "../packages/react-binding/src"
      )
    },

    preserveSymlinks: true
  }
});
