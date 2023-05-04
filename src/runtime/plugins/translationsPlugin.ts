import { translationPlugin } from "@deegital/vue-3-trustup-io-i18n";
import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  const appName = useRuntimeConfig().public.appName;
  nuxtApp?.vueApp.use(translationPlugin, { appName });
});
