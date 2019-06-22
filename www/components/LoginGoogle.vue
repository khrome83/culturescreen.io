<template>
  <base-button class="login-google" @click.native="login" :isLoading="loading" tertiary>
    <template v-slot:pre-icon>
      <google-logo aria-hidden="true"/>
    </template>
    <template v-slot:default>Sign in with Google</template>
  </base-button>
</template>

<script lang="ts">
import { Action, Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import GoogleLogo from "~/assets/svg/brands/google.svg";

@Component({
  components: {
    BaseButton,
    GoogleLogo
  }
})
export default class LoginGoogle extends Vue {
  @Action("user/signInWithGoogle") userSignInGoogle;

  loading = false;

  async login() {
    try {
      this.loading = true;
      await this.userSignInGoogle();
      this.loading = false;
      console.log("google login");
    } catch (e) {
      this.loading = false;
      console.log(e.message);
    }
  }
}
</script>

<style scoped>
.login-google {
  margin-top: 1rem;
  background-color: #ffffff;
  border: thin solid #bbbebf;
  color: #757575;
  text-align: left;
  padding: 0.5rem 1rem;
  max-width: 16rem;
}

.login-google:not(.isLoading):hover,
.login-google:not(.isLoading):active,
.login-google:not(.isLoading):focus {
  border-color: #2f2f2f;
  color: #2f2f2f;
  box-shadow: inset 0 0 0 0 #fff, inset 0 0 0 0 #2f2f2f;
}

.login-google:not(.isLoading):focus {
  box-shadow: inset 0 0 0 0.0625rem #fff, inset 0 0 0 0.125rem #2f2f2f;
}

.login-google .text > svg {
  height: 1.2rem;
  width: 1.2rem;
  transform: scale(1.2);
  margin: 0 0.625rem -0.275rem 0;
}
</style>
