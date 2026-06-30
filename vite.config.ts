import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid(), tailwindcss(), solidPlugin()],
});
