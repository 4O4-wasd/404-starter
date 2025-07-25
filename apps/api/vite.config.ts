import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
   plugins: [cloudflare()],
   server: {
      port: 8000,
   },
   preview: {
      port: 8000,
   },
});

