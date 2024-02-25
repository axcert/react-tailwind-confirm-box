// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.tsx', // Path to your library's entry file
      name: 'ReacTailwindConfirmBox',
      formats: ['es', 'cjs'], // Output both ES module and CommonJS formats
      fileName: (format) => `react-tailwind-confirm-box.${format}.js`
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into your library
      external: ['react', 'react-dom'],
      output: {
        // Properly configure globals for UMD builds if needed
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
