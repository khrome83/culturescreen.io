<template>
  <div class="container">
    <the-app-header :menu-items="5"/>
    <nuxt/>
    <the-app-footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheAppHeader from "~/components/TheAppHeader.vue";
import TheAppFooter from "~/components/TheAppFooter.vue";

@Component({
  components: {
    TheAppHeader,
    TheAppFooter,
  }
})
export default class extends Vue {}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "http://www.your-company-site.com",
  "logo": "http://www.example.com/logo.png",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+1-401-555-1212",
    "contactType": "customer service"
  }]
