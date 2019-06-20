<template>
  <base-section centered skinny>
    <h1>Access Application</h1>
    <p>Login or Register</p>
    <layout-row>
      <layout-column>
        <h2 class="header">Login</h2>
        <login-email/>
        <login-google/>
        <login-github/>
        <login-microsoft/>
      </layout-column>
      <layout-column>
        <h2 class="header">Registration</h2>
        <register-email/>
      </layout-column>
    </layout-row>
    <log-out/>
  </base-section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Jsonld } from "nuxt-jsonld";
import BaseSection from "~/components/BaseSection.vue";
import LayoutColumn from "~/components/LayoutColumn.vue";
import LayoutRow from "~/components/LayoutRow.vue";
import LoginGoogle from "~/components/LoginGoogle.vue";
import LoginGithub from "~/components/LoginGithub.vue";
import LoginMicrosoft from "~/components/LoginMicrosoft.vue";
import LoginEmail from "~/components/LoginEmail.vue";
import LogOut from "~/components/LogOut.vue";
import RegisterEmail from "~/components/RegisterEmail.vue";

@Jsonld
@Component({
  components: {
    BaseSection,
    LayoutColumn,
    LayoutRow,
    LoginGoogle,
    LoginGithub,
    LoginMicrosoft,
    LoginEmail,
    LogOut,
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
    "";
  }
}
</script>

<style scoped></style>
