import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: ['digital-user-experience-production.up.railway.app'],
    host: '0.0.0.0',
  },
});
