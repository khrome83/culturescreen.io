<template>
  <form class="login-email">
    <base-input
      :focus="!setPassword"
      v-model.trim="$v.formEmail.$model"
      @input="$v.formEmail.$reset"
      @blur="$v.formEmail.$touch"
      id="loginEmail"
      type="email"
      autocomplete="username"
      :error-text="emailError"
      required
    >Email</base-input>
    <base-input
      :focus="setPassword"
      v-model.trim="$v.formPassword.$model"
      @input="$v.formPassword.$reset"
      @blur="$v.formPassword.$touch"
      id="loginPassword"
      type="password"
      autocomplete="current-password"
      :error-text="passwordError"
      required
    >Password</base-input>
    <div class="action-set">
      <base-button class="action" @click.native.prevent="login">Sign in</base-button>
      <base-button class="reset" :to="resetEmailLink" danger small>Forgot password?</base-button>
    </div>
  </form>
</template>

<script lang="ts">
import { Action, Component, Getter, Prop, Vue } from "nuxt-property-decorator";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import { getErrorMsgs } from "~/library";
import BaseButton from "~/components/BaseButton.vue";
import BaseInput from "~/components/BaseInput.vue";

@Component({
  components: { BaseButton, BaseInput },
  mixins: [validationMixin],
  validations: {
    formEmail: {
      required,
      email
    },
    formPassword: {
      required,
      minLength: minLength(6)
    }
  }
})
export default class LoginEmail extends Vue {
  @Action("user/signInWithEmail") userSignInEmail;
  @Getter("user/authError") authError;

  formEmail = "";
  formPassword = "";
  setPassword = false;

  created() {
    if (this.$route.query["email"]) {
      this.formEmail = this.$route.query["email"].toString();
      this.setPassword = true;
    }
  }

  get emailError() {
    return getErrorMsgs(this.$v.formEmail, this.authError, "email")[0];
  }

  get passwordError() {
    return getErrorMsgs(this.$v.formPassword, this.authError, "password")[0];
  }

  get resetEmailLink() {
    return this.formEmail
      ? `/reset-password?email=${this.formEmail}`
      : "/reset-password";
  }

  async login() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      try {
        await this.userSignInEmail({
          email: this.formEmail,
          password: this.formPassword
        });
        console.log("email login");
        this.$router.replace({ path: "/app" });
      } catch (e) {
        console.log(e.message);
      }
    }
  }
}
</script>

<style scoped>
.login-email {
  display: flex;
  flex-direction: column;
}

.action-set {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.action {
  display: inline-block;
  width: auto;
}

.reset {
  max-width: 10rem;
}
</style>
