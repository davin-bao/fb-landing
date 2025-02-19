<script setup>
const { setLocale } = useI18n()
async function onSubmit() {
  await $fetch(`/api/user/subscribe`, {
    method: 'POST',
    body: {},
  })
}

</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>
      <button @click="onSubmit()">submit</button>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
</template>
