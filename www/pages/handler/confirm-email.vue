<template>
  <div class="content">
    <base-section centered tall skinny>
      <layout-row>
        <layout-column centered aligned>
          <confirm-email/>
        </layout-column>
      </layout-row>
    </base-section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Jsonld } from "nuxt-jsonld";
import BaseSection from "~/components/BaseSection.vue";
import LayoutColumn from "~/components/LayoutColumn.vue";
import LayoutRow from "~/components/LayoutRow.vue";
import ConfirmEmail from "~/components/ConfirmEmail.vue";

@Jsonld
@Component({
  components: {
    BaseSection,
    LayoutColumn,
    LayoutRow,
    ConfirmEmail
  }
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

<style scoped>
</style>
