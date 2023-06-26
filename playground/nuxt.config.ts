import * as dotenv from "dotenv";
dotenv.config();

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appName: "",
    },
  },
  ssr: false,
  modules: ["../src/module"],
  trustupIoTranslations: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: true,
  },
  devServer: {
    port: parseInt(process.env.APP_PORT || "3000"),
  },
  vite: {
    server: {
      hmr: {
        port: parseInt(process.env.WEBSOCKET_PORT || "24678"),
      },
    },
  },
});
