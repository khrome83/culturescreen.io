<template>
  <form class="register-email">
    <base-input
      :focus="!setPassword"
      v-model.trim="$v.formEmail.$model"
      @input="$v.formEmail.$reset"
      @blur="$v.formEmail.$touch"
      id="registerEmail"
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
      id="registerPassword"
      type="password"
      autocomplete="new-password"
      :error-text="passwordError"
      required
    >Password</base-input>
    <base-button class="action" @click.native.prevent="create">Register</base-button>
    <p class="assertation">
      By signing up, you agree to the
      <nuxt-link to="/terms">Terms of Service</nuxt-link>&nbsp;and
      <nuxt-link to="/privacy">Privacy Policy</nuxt-link>, including
      <nuxt-link to="/cookies">Cookie Use</nuxt-link>.
    </p>
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
export default class RegisterEmail extends Vue {
  @Action("user/createWithEmail") userCreateWithEmail;
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

  async create() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      try {
        await this.userCreateWithEmail({
          email: this.formEmail,
          password: this.formPassword
        });
        console.log("email register");
      } catch (e) {
        console.log(e.message);
      }
    }
  }
}
</script>

<style scoped>
.register-email {
  display: flex;
  flex-direction: column;
}

.assertation {
  text-align: left;
  font-size: 0.875rem;
  margin-bottom: 0;
  margin-top: 2rem;
}

.action {
  max-width: 8rem;
}
</style>
