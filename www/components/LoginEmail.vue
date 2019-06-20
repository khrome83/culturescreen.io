<template>
  <form class="login-email">
    <base-input
      v-model="formEmail"
      id="loginEmail"
      type="email"
      autocomplete="username"
      required
    >Email</base-input>
    <base-input
      v-model="formPassword"
      id="loginPassword"
      type="password"
      autocomplete="current-password"
      required
    >Password</base-input>
    <base-button class="action" @click.native.prevent="login">Login</base-button>
  </form>
</template>

<script lang="ts">
import { Action, Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import BaseInput from "~/components/BaseInput.vue";

@Component({
  components: { BaseButton, BaseInput }
})
export default class LoginEmail extends Vue {
  @Action("user/signInWithEmail") userSignInEmail;

  formEmail = "";
  formPassword = "";

  async login() {
    try {
      await this.userSignInEmail({
        email: this.formEmail,
        password: this.formPassword
      });
      console.log("email login");
    } catch (e) {
      console.log(e.message);
    }
  }
}
</script>

<style scoped>
.login-email {
  display: flex;
  flex-direction: column;
}

.action {
  max-width: 10rem;
}
</style>
