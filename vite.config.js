import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pluginRewriteAll from 'vite-plugin-rewrite-all';
// https://vitejs.dev/config/
export default defineConfig({
  base: "/PCCOE-ALL-Event-Frontend/",
  plugins: [react(), pluginRewriteAll()],
  build: { chunkSizeWarningLimit: 16000, }
})
