<template>
  <article class="prose lg:prose-xl w-full mx-auto md:px-12 px-8 max-w-7xl lg:px-16 py-8 sm:py-16 lg:py-20">
    <div>
      <h1 class="text-center font-bold font-heading text-4xl md:text-5xl leading-tighter tracking-tighter">
	  	{{ privacy.title }}
      </h1>
    </div>
    <ContentRenderer v-if="privacy" :value="privacy" :data="mdcVars" />
  </article>
</template>

<script setup>
import { CONFIG } from '~/lib/config'
import seo from '~/lib/seo.js'
const { locale } = useI18n()
const mdcVars = ref(CONFIG)
const privacy = ref([])
const fetchContent = async () => {
  const data = await queryCollection('privacy').path(`/privacy/${locale.value}`).first()
  privacy.value = data || {}
  seo(privacy.value)
}
await fetchContent()
watch(locale, async () => {
  await fetchContent()
})
</script>