<script setup>
import { Icon } from '@iconify/vue'
const email = ref('')
const errorData = ref([])

async function handleSubmit(event) {
  const { status, data, error } = useFetch(`/api/user/subscribe`, {
    method: 'POST',
    body: { email: email.value, name: 'Unknown' },
  })

  console.log("hello world", error?.value?.statusCode)
  if (error?.value?.statusCode == 400) {
    errorData.value = []
    if (error.value.data.message == 'ZodError') {
      error.value.data.data.forEach(({ message }) => {
        errorData.value.push('Invalid ' + message)
      })
    } else {
      errorData.value = [{ message }]
    }
  } else {  
    errorData.value = []
  }
}
</script>

<template>
  <section>
      <div
        class="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24">
        <div>
          <div class="text-center max-w-4xl mx-auto">
            <p
              class="text-foreground mt-8 font-extrabold lg:text-5xl text-4xl tracking-tight">
              {{ $t("index.hero.title") }}
            </p>
            <p class="text-foreground lg:text-xl max-w-2xl mt-4 mx-auto text-base" id="features">
              {{ $t("index.hero.tip") }}
            </p>
            <div class="mx-auto flex w-full flex-col justify-center mt-10 px-5 md:h-[unset] md:max-w-[70%] lg:max-w-[60%] lg:px-10 xl:pl-0">
              <div class="flex justify-end">
                <input v-model="email" class="h-full w-full border px-5 py-5 text-sm font-medium outline-none border-accent focus:border-accent-light bg-transparent text-primary placeholder:text-zinc-400" placeholder="Your best email…">
                <button @click="handleSubmit" class="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex h-[unset] w-[200px] items-center justify-center px-4  text-base font-medium bg-accent text-white hover:bg-accent-light active:bg-accent-light">
                  Early access
                </button>
              </div>
              <div v-for="err in errorData" class="flex justify-start mt-1 px-3 py-1 border border-warning bg-warning-foreground">
                <Icon icon="radix-icons:info-circled" class="font-semibold text-warning mt-1 mr-3" />
                <Label class="font-semibold text-warning" for="firstName" >Invalid email</Label>
              </div>
            </div>
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
</template>