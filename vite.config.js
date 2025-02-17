import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePlugin as remix } from "@remix-run/dev";

export default defineConfig({
  plugins: [
    react(),
    remix({
      future: {
        v7_skipActionErrorRevalidation: true,
      },
    }),
  ],
})



