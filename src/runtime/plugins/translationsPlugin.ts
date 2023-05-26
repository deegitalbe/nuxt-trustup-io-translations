import { translationPlugin } from "@deegital/vue-3-trustup-io-translations";
import { defineNuxtPlugin, useRuntimeConfig } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
  const appName = useRuntimeConfig().public.appName;
  nuxtApp.vueApp.use(translationPlugin, { appName });
});
