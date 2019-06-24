<template>
  <div class="content">
    <base-section centered tall skinny>
      <h1>Sign In</h1>
      <layout-row>
        <layout-column centered aligned>
          <login-email/>
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
      <h2>Need an Account?</h2>
      <p>Get started minutes.</p>
      <layout-row>
        <layout-column>
          <feature-tile-horizontal v-bind="promo.one"/>
        </layout-column>
        <layout-column>
          <feature-tile-horizontal v-bind="promo.two"/>
        </layout-column>
      </layout-row>
      <hero-signup v-bind="{ ...signup }"/>
    </base-section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Jsonld } from "nuxt-jsonld";
import BaseSection from "~/components/BaseSection.vue";
import BaseSeperator from "~/components/BaseSeperator.vue";
import FeatureTileHorizontal from "~/components/FeatureTileHorizontal.vue";
import HeroSignup from "~/components/HeroSignup.vue";
import LayoutColumn from "~/components/LayoutColumn.vue";
import LayoutRow from "~/components/LayoutRow.vue";
import LoginGoogle from "~/components/LoginGoogle.vue";
import LoginGithub from "~/components/LoginGithub.vue";
import LoginMicrosoft from "~/components/LoginMicrosoft.vue";
import LoginEmail from "~/components/LoginEmail.vue";

@Jsonld
@Component({
  components: {
    BaseSection,
    BaseSeperator,
    FeatureTileHorizontal,
    HeroSignup,
    LayoutColumn,
    LayoutRow,
    LoginGoogle,
    LoginGithub,
    LoginMicrosoft,
    LoginEmail
  }
})
export default class extends Vue {
  signup = {
    emailLabel: "Your email address",
    buttonLabel: "Get Started"
  };

  promo = {
    one: {
      heading: "14 Day Trial",
      text: "Start for free. See, we are a good fit already.",
      level: 3
    },
    two: {
      heading: "Cancel Anytime",
      text: "We make it painless to signup and never lock you in.",
      level: 3
    }
  };

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

<style scoped>
</style>
