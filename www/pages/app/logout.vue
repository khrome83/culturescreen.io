<template>
  <div class="content">
    <base-section centered tall skinny>
      <h1>Signing you out</h1>
      <layout-row>
        <layout-column centered aligned>
          <p>Goodbye!</p>
        </layout-column>
      </layout-row>
    </base-section>
  </div>
</template>

<script lang="ts">
import { Action, Component, Vue } from "nuxt-property-decorator";
import { Jsonld } from "nuxt-jsonld";
import BaseSection from "~/components/BaseSection.vue";
import LayoutColumn from "~/components/LayoutColumn.vue";
import LayoutRow from "~/components/LayoutRow.vue";

@Jsonld
@Component({
  components: {
    BaseSection,
    LayoutColumn,
    LayoutRow
  }
})
export default class extends Vue {
  @Action("user/signOut") userSignOut;

  layout() {
    return "authenticated";
  }

  async mounted() {
    try {
      await this.userSignOut();
      console.log("signed out");
      this.$router.replace({ path: "/" });
    } catch (e) {
      console.log(e.message);
    }
  }

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
