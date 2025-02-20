<script setup>
import { Button } from '@/components/ui/button'

const { setLocale } = useI18n()
async function onSubmit() {
  await $fetch(`/api/user/subscribe`, {
    method: 'POST',
    body: { email: 'test@example.com', name: 'test' },
  })
}

</script>

<template>
  <div>
    <section>
      <div
        class="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24">
        <div>
          <div class="text-center max-w-4xl mx-auto">
            <p
              class="text-primary-400 mt-8 font-extrabold lg:text-5xl text-4xl tracking-tight">
              {{ $t("index.hero.title") }}
            </p>
            <p class="text-gray-500 lg:text-xl max-w-2xl mt-4 mx-auto text-base"  id="features">
              {{ $t("index.hero.tip") }}
            </p>
          </div>
        </div>
        <div class="relative w-full mx-auto max-w-7xl items-center py-12 pb-12">
          <div class="bg-gray-100 p-8 rounded-3xl" style="">
            <img
              alt=""
              class="relative w-full border lg:rounded-2xl object-cover rounded shadow-2xl"
              src="~/assets/images/dashboard.gif"
            />
          </div>
        </div>
      </div>
    </section>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('zh')">fr</button>
      <Button class="text-primary-light" @click="onSubmit()">submit</Button>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
</template>
