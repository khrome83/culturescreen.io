<template>
  <form class="register-email">
    <base-input
      v-model="formEmail"
      id="registerEmail"
      type="email"
      autocomplete="username"
      required
    >Email</base-input>
    <base-input
      v-model="formPassword"
      id="registerPassword"
      type="password"
      autocomplete="new-password"
      required
    >Password</base-input>
    <base-input
      v-model="formBio"
      id="registerBio"
      type="text"
      autocomplete="off"
    >Short Biographical Statement</base-input>
    <base-button class="action" @click.native.prevent="create">Register</base-button>
  </form>
</template>

<script lang="ts">
import { Action, Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import BaseInput from "~/components/BaseInput.vue";

@Component({
  components: { BaseButton, BaseInput }
})
export default class RegisterEmail extends Vue {
  @Action("user/createWithEmail") userCreateWithEmail;

  formEmail = "";
  formPassword = "";
  formBio = "";

  async create() {
    try {
      await this.userCreateWithEmail({
        email: this.formEmail,
        password: this.formPassword,
        bio: this.formBio
      });
      console.log("email register");
    } catch (e) {
      console.log(e.message);
    }
  }
}
</script>

<style scoped>
.register-email {
  display: flex;
  flex-direction: column;
}

.action {
  max-width: 10rem;
}
</style>
