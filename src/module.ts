import {
  addImports,
  addPlugin,
  createResolver,
  defineNuxtModule,
  // createResolver,
  // addComponent,
  // addImports,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@deegital/nuxt-trustup-io-translations",
    configKey: "trustupIoTranslations",
  },
  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addPlugin(resolve("./runtime/plugins/translationsPlugin"));

    addImports({
      name: "useTranslation",
      from: "@deegital/vue-3-trustup-io-i18n",
    });

    addImports({
      name: "useTranslate",
      from: "@deegital/vue-3-trustup-io-i18n",
    });
  },
});
