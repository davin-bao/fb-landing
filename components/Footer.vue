<script setup>
import LocaleBar from "./LocaleBar"
import { CONFIG } from '~/lib/config'
</script>

<template>
  <footer>
    <div
      class="items-center px-8 mx-auto py-12 md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl"
    >
      <div class="grid grid-cols-2 items-start gap-8 gap-y-24 xl:col-span-4">
        <a
          href="/"
          class="xl:col-span-1 text-foreground inline-flex items-center gap-3"
        >
          <img src="/assets/images/logo.svg" :alt="CONFIG.title" />
        </a>
        <div class="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-8">
          <div v-for="item of CONFIG.footer.links">
            <h3 class="text-lg text-foreground font-medium tracking-tight">
              {{ $t(item.title) }}
            </h3>
            <ul v-if="item.links && Array.isArray(item.links) && item.links.length > 0" role="list" class="mt-4 space-y-1">
              <li v-for="link of item.links">
                <a
                  :href="link.href"
                  class="text-base text-foreground-light hover:text-accent"
                >
                  {{$t(link.text)}}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg text-foreground font-medium tracking-tight">
              Share
            </h3>
            <div class="flex w-full flex-wrap mt-4 gap-1 text-white">
              <SocialShare network="facebook" :styled="true" :label="false" />
              <SocialShare network="x" :styled="true" :label="false" />
              <SocialShare network="linkedin" :styled="true" :label="false" />
              <SocialShare network="pinterest" :styled="true" :label="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer class="bg-card border-muted border-t">
    <div
      class="items-center px-8 mx-auto py-6 md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl"
    >
      <section class="mt-6" v-html="CONFIG.footer.note">
      </section>
    </div>
  </footer>
</template>