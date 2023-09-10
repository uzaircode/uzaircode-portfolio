import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/uzaircode-portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Your main entry point
        project: resolve(__dirname, 'archive_project.html'), // Your additional entry point
        resume: resolve(__dirname, 'public/Nik_Uzair_Resume.pdf'),
      },
    },
  },
});
