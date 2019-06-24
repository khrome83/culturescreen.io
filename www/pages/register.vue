<template>
  <div class="content">
    <base-section centered tall skinny>
      <h1>Register</h1>
      <layout-row>
        <layout-column centered aligned>
          <register-email/>
        </layout-column>
        <layout-column centered aligned>
          <base-seperator/>
        </layout-column>
        <layout-column centered aligned>
          <login-github/>
          <login-microsoft/>
          <login-google/>
        </layout-column>
      </layout-row>
    </base-section>
    <base-section dark centered skinny>
      <h2>Already have an account?</h2>
      <base-button to="/login" large secondary>Sign in</base-button>
    </base-section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Jsonld } from "nuxt-jsonld";
import BaseButton from "~/components/BaseButton.vue";
import BaseSection from "~/components/BaseSection.vue";
import BaseSeperator from "~/components/BaseSeperator.vue";
import LayoutColumn from "~/components/LayoutColumn.vue";
import LayoutRow from "~/components/LayoutRow.vue";
import LoginGoogle from "~/components/LoginGoogle.vue";
import LoginGithub from "~/components/LoginGithub.vue";
import LoginMicrosoft from "~/components/LoginMicrosoft.vue";
import RegisterEmail from "~/components/RegisterEmail.vue";

@Jsonld
@Component({
  components: {
    BaseButton,
    BaseSection,
    BaseSeperator,
    LayoutColumn,
    LayoutRow,
    LoginGoogle,
    LoginGithub,
    LoginMicrosoft,
    RegisterEmail
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
