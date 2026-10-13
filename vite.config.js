import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    host: true, // network'dan ochiq bo'lsin
    open: true  // brauzer avtomatik ochilsin
  }
});
