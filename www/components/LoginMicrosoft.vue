<template>
  <base-button class="login-microsoft" @click.native="login" secondary>Microsoft Sign In</base-button>
</template>

<script lang="ts">
import { Action, Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";

@Component({
  components: { BaseButton }
})
export default class LoginMicrosoft extends Vue {
  @Action("user/signInWithMicrosoft") userSignInMicrosoft;

  formEmail = "";
  formPassword = "";

  async login() {
    try {
      await this.userSignInMicrosoft();
      console.log("microsoft login");
    } catch (e) {
      console.log(e.message);
    }
  }
}
</script>

<style scoped>
.login-microsoft {
  margin-top: 1rem;
  max-width: 10rem;
}
</style>
