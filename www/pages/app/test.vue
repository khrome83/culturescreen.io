<template>
  <section>
    <base-section>
      <h1 class="header">App (Protected Area)</h1>
      <log-out/>
      <a href="/app">Back</a>
      <nuxt-link to="/app">Back</nuxt-link>
    </base-section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Jsonld } from "nuxt-jsonld";
import BaseSection from "~/components/BaseSection.vue";
import LogOut from "~/components/LogOut.vue";

@Jsonld
@Component({
  components: { BaseSection, LogOut }
})
export default class extends Vue {
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://www.culturescreen.io",
      logo: "https://www.culturescreen.io/logo.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-401-555-1212",
          contactType: "customer service"
        }
      ]
    };
  }
}
</script>

<style scoped></style>
