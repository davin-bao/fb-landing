<script setup>
import { Icon } from '@iconify/vue'
import Alert from '~/components/Alert'
const email = ref('')
const errorData = ref([])
const successAlertOpen = ref(false)

async function handleSubmit(event) {
  if (email.value == '') {
    errorData.value = ['required_email']
    return
  }
  const { status, data, error } = await useFetch(`/api/user/subscribe`, {
    method: 'POST',
    body: { email: email.value, name: 'Unknown' },
  })

  if (error?.value?.statusCode == 400) {
    errorData.value = []
    if (error.value.data.message == 'ZodError' && Array.isArray(error.value.data.data)) {
      for (var item of error.value.data.data) {
        errorData.value.push(item.code + '_' + item.validation)
      }
    } else if (error.value.data.message == 'internal server error') {
      errorData.value = ['inernal_error']
    } else {
      errorData.value = [ error.value.data.message ]
    }
  } else {  
    errorData.value = []
  }
  if (status.value == 'success') {
    successAlertOpen.value = true
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
                <input v-model="email" class="h-full w-full border px-5 py-5 text-sm font-medium outline-none border-accent focus:border-accent-light bg-transparent text-primary placeholder:text-zinc-400" :placeholder="$t('index.hero.subscribe.placeholder')">
                <button @click="handleSubmit" class="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex h-[unset] w-[200px] items-center justify-center px-4  text-base font-medium bg-accent text-white hover:bg-accent-light active:bg-accent-light">
                  {{$t('index.hero.subscribe.btn')}}
                </button>
              </div>
              <div v-for="err in errorData" class="flex justify-start mt-1 px-3 py-1 border border-warning bg-warning-foreground">
                <Icon icon="radix-icons:info-circled" class="font-semibold text-warning mt-1 mr-3" />
                <Label class="font-semibold text-warning" for="firstName" >{{$t('index.hero.subscribe.error.' + err)}}</Label>
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
      <Alert 
      :open="successAlertOpen" 
      @onClose="successAlertOpen=false" 
      :title="$t('index.hero.subscribe.success.title')"
      :content="$t('index.hero.subscribe.success.tips')"
      />
    </section>
</template>