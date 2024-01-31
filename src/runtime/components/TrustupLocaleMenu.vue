<template>
  <div>
    <div
      class="bg-white cursor-pointer relative hover:bg-neutral-100 flex justify-center items-center px-[20px] w-fit text-[13px] h-[40px] gap-1 rounded-[5px]"
      @click="showMenu = !showMenu"
    >
      <i class="fa-regular fa-globe"></i>
      Changer de Langue
      <div
        v-if="showMenu"
        class="bg-white shadow-lg rounded-[5px] p-4 w-[300px] absolute top-[45px]"
        :class="toRight ? 'right-0' : 'left-0'"
      >
        <div
          v-for="(country, key) in groupedLocales"
          :key="key"
          class="first-of-type:border-0 border-t"
        >
          <div
            v-for="locale in country"
            :key="locale.id"
            class="flex items-center gap-3 text-sm p-2 hover:bg-neutral-100 cursor-pointer rounded-[5px]"
            @click="service.updateLocale(locale.locale)"
          >
            <img class="w-4 h-4" :src="locale.flag" alt="flag" />
            {{ locale.language_name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChangeLocaleFactory from "../services/ChangeLocaleFactory";
import { ref, useTranslation, useRuntimeConfig } from "#imports";

const props = defineProps<{
  toRight: boolean;
  token: string;
}>();

const { groupedLocales } = useTranslation();

const showMenu = ref<boolean>(false);

const authUrl = useRuntimeConfig().public.trustupIoAuthUrl;
const service = new ChangeLocaleFactory().create(authUrl, props.token);
</script>
