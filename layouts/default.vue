<script>
import { CONFIG } from "~/lib/config"
const route = useRoute()
useSeoMeta({
  ogSiteName: CONFIG.siteName,
  author: "Fb-ads.sorter",
  description: "A chrome plugin tool that can help you sorting Facebook ADS Library.",
  ogTitle: "A chrome plugin tool that can help you sorting Facebook ADS Library.",
  ogDescription: "You can resort facebook ads by uses.",
  ogImage: "/opengraph-image.png",
  ogImageAlt: "A chrome plugin tool that can help you sorting Facebook ADS Library",
  ogUrl: "/",
  twitterTitle: "A chrome plugin tool that can help you sorting Facebook ADS Library",
  twitterDescription: "You can resort facebook ads by uses.",
  twitterImage: "/twitter-image.png",
  twitterImageAlt: "A chrome plugin tool that can help you sorting Facebook ADS Library",
});

useHead({
  titleTemplate: "%s %separator %siteName",
  templateParams: {
    separator: "|", // choose a separator, i like using this one
    siteName: CONFIG.siteName, // set a site name
  },
})
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>