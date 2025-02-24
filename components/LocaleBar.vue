<script setup lang="ts">
import { Icon } from '@iconify/vue'
const { locale, locales, setLocale } = useI18n()

const currentLocales = computed(() => {
  return locales.value.find(i => i.code == locale.value)
})

function selectUpdated(value: string) {
  setLocale(value)
}

</script>

<template>
  <SelectRoot model="locales" @update:modelValue="selectUpdated">
    <SelectTrigger
      class="inline-flex min-w-[100px] items-center justify-between text-sm font-medium outline-none"
      aria-label="Customise options"
    >
      <SelectValue :placeholder="currentLocales.name" />
      <Icon
        icon="radix-icons:globe"
        class="h-3.5 w-3.5"
      />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="min-w-[160px] bg-white rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
        :side-offset="5"
      >
        <SelectScrollUpButton class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <Icon icon="radix-icons:chevron-up" />
        </SelectScrollUpButton>

        <SelectViewport class="p-[5px]">
          <SelectGroup>
            <SelectItem
              v-for="(locale, index) in locales"
              :key="index"
              class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              :value="locale.code"
            >
              <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Icon icon="radix-icons:check" />
              </SelectItemIndicator>
              <SelectItemText>
                {{ locale.name }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <Icon icon="radix-icons:chevron-down" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>