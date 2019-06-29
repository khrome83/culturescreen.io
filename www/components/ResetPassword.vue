<template>
  <form v-if="showForm" class="reset-email">
    <base-input
      :focus="true"
      v-model.trim="$v.formEmail.$model"
      @input="$v.formEmail.$reset"
      @blur="$v.formEmail.$touch"
      id="resetEmail"
      type="email"
      autocomplete="username"
      :error-text="emailError"
      required
    >Your Email Address</base-input>
    <div class="action-set">
      <base-button class="action" @click.native.prevent="login">Reset Password</base-button>
      <base-button class="login" to="/login" danger small>Sign in</base-button>
    </div>
  </form>
  <div v-else>
    <p class="confirm">
      We sent a password reset link to the email address
      <span class="email-confirm">{{formEmail}}</span>.
    </p>
    <base-button :to="signLink" tertiary>Sign in</base-button>
  </div>
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
    }
  }
})
export default class ResetPassword extends Vue {
  @Action("user/passwordResetEmail") passwordResetEmail;
  @Getter("user/authError") authError;

  formEmail = "";
  showForm = true;

  created() {
    if (this.$route.query["email"]) {
      this.formEmail = this.$route.query["email"].toString();
    }
  }

  get emailError() {
    return getErrorMsgs(this.$v.formEmail, this.authError, "email")[0];
  }

  get signLink() {
    return this.formEmail ? `/login?email=${this.formEmail}` : "/login";
  }

  async login() {
    this.$v.$touch();
    if (!this.$v.$invalid) {
      try {
        await this.passwordResetEmail(this.formEmail);
        this.showForm = false;
        console.log("password reset email sent");
      } catch (e) {
        console.log(e.message);
      }
    }
  }
}
</script>

<style scoped>
.reset-email {
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

.login {
  max-width: 10rem;
}

.confirm {
  width: 17.5rem;
  margin: 2rem auto;
}

.email-confirm {
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
}
</style>
