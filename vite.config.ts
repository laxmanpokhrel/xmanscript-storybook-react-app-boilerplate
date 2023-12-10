import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { domToCodePlugin } from 'dom-to-code/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    process.env.NODE_ENV !== 'production'
      ? domToCodePlugin({
          mode: 'react',
        })
      : undefined,
    tsconfigPaths(),
  ],
  server: {
    port: 8080,
    open: true,
  },
});
