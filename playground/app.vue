<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-cyan-600 from-blue-500"
  >
    <Transition
      enter-from-class="opacity-0 scale-75"
      enter-active-class="transition-all transform duration-1000"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-active-class="transition-all transform duration-1000"
      leave-to-class="opacity-0 scale-75"
    >
      <div v-if="isReady">
        <div
          class="text-center p-8 rounded-full bg-green-400 w-[650px] h-[650px] shadow-lg"
        >
          <ul class="flex flex-col">
            <li
              v-for="(country, key) in groupedLocales"
              :key="key"
              class="text-3xl"
            >
              {{ key }}
              <div v-for="locale in country" :key="locale.id" class="text-sm">
                {{ locale.locale }}
              </div>
            </li>
          </ul>
          <TrustupLocaleMenu token="qsdqdqsd" :to-right="true" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useTranslation } from "#imports";

const isReady = ref<boolean>(false);
const { addTranslationsByKey, groupedLocales } = useTranslation();

setTimeout(() => addTranslationsByKey("worksite-admin"), 4000);

onMounted(() => (isReady.value = true));
</script>
