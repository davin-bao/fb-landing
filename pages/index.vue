<script setup>
import Hero from '~/components/index/Hero.vue'
import Testimonial from '~/components/index/Testimonial.vue'
const { setLocale } = useI18n()
async function onSubmit() {
  await $fetch(`/api/user/subscribe`, {
    method: 'POST',
    body: { email: 'test@example.com', name: 'test' },
  })
}
const value = []
function handleComplete(e) {
  // eslint-disable-next-line no-alert
  alert(e.join(''))
}

</script>

<template>
  <div>
    <Hero />
    <Testimonial />
  </div>
</template>
