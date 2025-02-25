<script setup>
import LocaleBar from './LocaleBar'
import { CONFIG } from '~/lib/config'

const { setLocale } = useI18n()

const open = ref(0)
function handleOpen() {
  open.value = !open.value
}

</script>

<template>
  <section class="bg-default border-b border-default-deep/30">
    <div class="w-full mx-auto md:px-12 px-8 max-w-7xl lg:px-16">
      <div class="relative flex flex-col w-full py-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6">
        <div class="flex flex-row items-center justify-between lg:justify-start">
          <a href="/" class="text-link hover:text-accent inline-flex items-center gap-3">
            <img src="/assets/images/logo.svg" :alt="CONFIG.siteName" />
            <span class="font-bold font-display hidden">{{ CONFIG.siteName }}</span>
          </a>
          <button @click="handleOpen"
            class="inline-flex items-center justify-center p-2 text-link hover:accent focus:outline-none focus:text-primary md:hidden">
            <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path v-show="!open" class="inline-flex" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-show="open" class="inline-flex" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav :class="{ hidden: !open, flex: open }" class="flex flex-col items-center flex-grow md:pb-0 md:flex md:justify-end md:flex-row lg:flex">
          <a v-for="menu in CONFIG.header.menus" class="px-2 lg:px-6 py-2 md:px-3 text-sm font-medium text-link hover:text-accent first:lg:ml-auto" :href="menu.href">{{$t(menu.text)}}</a>
          <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
            <LocaleBar />
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>