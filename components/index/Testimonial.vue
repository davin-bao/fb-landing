<script setup>
// 定义图片基础路径
import imageBasePath from '@/assets/images/avatar/Emma Johnson.jpg';

const imageModules = import.meta.glob('/assets/images/avatar/*.(jpg|png|jpeg|gif)', { eager: true });
const testimonialImages = ref([])
for (const path in imageModules) {
  testimonialImages.value.push(imageModules[path].default)
}

</script>

<template>
  <section class="bg-gray-100">
    <div
      class="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24"
    >
      <div class="max-w-2xl mx-auto md:text-center">
        <h2
          class="text-black font-extrabold lg:text-5xl text-4xl tracking-tight"
        >
          {{ $t("testimonial-title") }}
        </h2>
      </div>
      <ul
        role="list"
        class="max-w-2xl mx-auto mt-16 lg:mt-20 lg:max-w-none flex w-full flex-wrap"
      >
        <li v-for="i in 8" class="md:w-1/3 p-3">
          <figure class="relative h-full p-6 bg-white rounded-3xl">
            <blockquote class="relative">
              <p class="text-base text-gray-500">{{ $t('testimonial.' + i + '.content') }}</p>
            </blockquote>
            <figcaption
              class="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100"
            >
              <div>
                <div
                  class="text-lg font-semibold leading-6 text-black font-display"
                >
                  {{ $t('testimonial.' + i + '.author') }}
                </div>
                <div class="mt-1 text-sm text-gray-500">{{ $t('testimonial.' + i + '.position') }}</div>
              </div>
              <div class="overflow-hidden rounded-full bg-gray-50">
                <img alt="" :src="testimonialImages[i]" width="56"
                height="56" decoding="async" data-nimg="future"
                class="object-cover h-14 w-14" loading="lazy" style="color:
                transparent" />
              </div>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </section>
</template>