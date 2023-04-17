import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { chromeExtension } from "vite-plugin-chrome-extension";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
