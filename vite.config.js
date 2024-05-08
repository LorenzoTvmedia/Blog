import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000, open: true },
  define: {
    // env variable from .env file
    "process.env.VITE_API_BASE_URL": JSON.stringify(
      process.env.VITE_API_BASE_URL
    ),
    "process.env.VITE_COOKIE_EXPIRY_TIME": JSON.stringify(
      process.env.VITE_COOKIE_EXPIRY_TIME
    ),
    "process.env.VITE_POSTS_PER_PAGE": JSON.stringify(
      process.env.VITE_POSTS_PER_PAGE
    ),
  },
});
