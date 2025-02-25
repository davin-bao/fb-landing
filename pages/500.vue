<script setup>
definePageMeta({
  layout: false,
})
</script>
<template>
  <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
        <p class="text-base font-semibold text-accent">500</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-primary-light sm:text-5xl">{{ $t("error.500.title") }}</h1>
        <p class="mt-6 text-base leading-7 text-primary-light">{{ $t("error.500.tips") }}</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="/" class="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-default shadow-sm hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{$t('toHomeBtn')}}</a>
        </div>
    </div>
  </main>
</template>
