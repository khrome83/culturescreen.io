<template>
  <base-button class="login-microsoft" @click.native="login" :isLoading="loading" secondary>
    <template v-slot:pre-icon>
      <microsoft-logo aria-hidden="true"/>
    </template>
    <template v-slot:default>Sign in with Microsoft</template>
  </base-button>
</template>

<script lang="ts">
import { Action, Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import MicrosoftLogo from "~/assets/svg/brands/microsoft.svg";

@Component({
  components: {
    BaseButton,
    MicrosoftLogo
  }
})
export default class LoginMicrosoft extends Vue {
  @Action("user/signInWithMicrosoft") userSignInMicrosoft;

  loading = false;

  async login() {
    try {
      this.loading = true;
      await this.userSignInMicrosoft();
      this.loading = false;
      console.log("microsoft login");
      this.$router.replace({ path: "/app" });
    } catch (e) {
      this.loading = false;
      console.log(e.message);
    }
  }
}
</script>

<style scoped>
.login-microsoft {
  margin-bottom: 1rem;
  background-color: #2f2f2f;
  border: thin solid #2f2f2f;
  text-align: left;
  padding: 0.5rem 1rem;
  width: 16rem;
}

.login-microsoft:not(.isLoading):hover,
.login-microsoft:not(.isLoading):active,
.login-microsoft:not(.isLoading):focus {
  border-color: #2f2f2f;
  color: #2f2f2f;
  box-shadow: inset 0 0 0 0 #fff, inset 0 0 0 0 #2f2f2f;
}

.login-microsoft:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #fff, inset 0 0 0 0.125rem #2f2f2f;
}

.login-microsoft .text > svg {
  height: 1.2rem;
  width: 1.2rem;
  transform: scale(1.2);
  margin: 0 0.625rem -0.275rem 0;
}
</style>
