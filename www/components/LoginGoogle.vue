<template>
  <base-button class="login-google" @click.native="login" secondary>Google Sign In</base-button>
</template>

<script lang="ts">
import { Action, Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";

@Component({
  components: { BaseButton }
})
export default class LoginGoogle extends Vue {
  @Action("user/signInWithGoogle") userSignInGoogle;

  formEmail = "";
  formPassword = "";

  async login() {
    try {
      await this.userSignInGoogle();
      console.log("google login");
    } catch (e) {
      console.log(e.message);
    }
  }
}
</script>

<style scoped>
.login-google {
  margin-top: 1rem;
  max-width: 10rem;
}
</style>
