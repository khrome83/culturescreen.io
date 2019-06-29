<template>
  <base-button class="login-github" @click.native="login" :isLoading="loading" secondary>
    <template v-slot:pre-icon>
      <github-logo aria-hidden="true"/>
    </template>
    <template v-slot:default>Sign in with GitHub</template>
  </base-button>
</template>

<script lang="ts">
import { Action, Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import GithubLogo from "~/assets/svg/brands/github.svg";

@Component({
  components: {
    BaseButton,
    GithubLogo
  }
})
export default class LoginGithub extends Vue {
  @Action("user/signInWithGithub") userSignInGithub;

  loading = false;

  async login() {
    try {
      this.loading = true;
      await this.userSignInGithub();
      this.loading = false;
      console.log("github login");
      this.$router.replace({ path: "/app" });
    } catch (e) {
      this.loading = false;
      console.log(e.message);
    }
  }
}
</script>

<style scoped>
.login-github {
  margin-bottom: 1rem;
  text-align: left;
  padding: 0.5rem 1rem;
  width: 16rem;
}

.login-github .text > svg {
  height: 1.2rem;
  width: 1.2rem;
  transform: scale(1.2);
  margin: 0 0.625rem -0.2rem 0;
}
</style>
