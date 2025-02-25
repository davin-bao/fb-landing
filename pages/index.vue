<script setup>
import Hero from '~/components/index/Hero.vue'
import Testimonial from '~/components/index/Testimonial.vue'
import seo from '~/lib/seo.js'
seo({ title: 'Home', description: 'A chrome plugin tool that can help you sorting Facebook ADS Library.' })

async function onSubmit() {
  await $fetch(`/api/user/subscribe`, {
    method: 'POST',
    body: { email: 'test@example.com', name: 'test' },
  })
}

</script>

<template>
  <div>
    <Hero />
    <Testimonial />
  </div>
</template>
