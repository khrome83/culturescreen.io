<template>
  <base-button class="login-github" @click.native="login" secondary>Github Sign In</base-button>
</template>

<script lang="ts">
import { Action, Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";

@Component({
  components: { BaseButton }
})
export default class LoginGithub extends Vue {
  @Action("user/signInWithGithub") userSignInGithub;

  formEmail = "";
  formPassword = "";

  async login() {
    try {
      await this.userSignInGithub();
      console.log("github login");
    } catch (e) {
      console.log(e.message);
    }
  }
}
</script>

<style scoped>
.login-github {
  margin-top: 1rem;
  max-width: 10rem;
}
</style>
