<template>
  <div v-if="badAccess || invalidCode" class="response">
    <p v-if="badAccess" class="message">Something went wrong.</p>
    <p v-else class="message">Your verification link is expired or incorrect.</p>
  </div>
  <div v-else class="response">
    <p v-if="validated" class="message">Sweet! Your email address has been verified.</p>
    <base-button v-if="validated" :to="continueLink" tertiary large>Continue to App</base-button>
    <p v-if="!validated" class="message">Checking...</p>
  </div>
</template>

<script lang="ts">
import { Action, Component, Getter, Prop, Vue } from "nuxt-property-decorator";
import { getErrorMsgs } from "~/library";
import BaseButton from "~/components/BaseButton.vue";

@Component({
  components: { BaseButton }
})
export default class ConfirmEmail extends Vue {
  @Action("user/verifyEmail") userVerifyEmail;
  @Getter("user/authError") authError;

  mode = "";
  actionCode = "";
  continueUrl = "";
  lang = "";
  invalidCode = false;
  validated = false;

  created() {
    if (this.$route.query["mode"]) {
      this.mode = this.$route.query["mode"].toString();
    }

    if (this.$route.query["continueUrl"]) {
      this.continueUrl = this.$route.query["continueUrl"].toString();
    }

    if (this.$route.query["oobCode"]) {
      this.actionCode = this.$route.query["oobCode"].toString();
    }

    if (this.$route.query["lang"]) {
      this.lang = this.$route.query["lang"].toString();
    }
  }

  mounted() {
    if (!this.badAccess) {
      this.verifyEmail();
    }
  }

  get badAccess() {
    if (this.mode !== "verifyEmail" || !this.actionCode) {
      return true;
    }

    return false;
  }

  get continueLink() {
    return this.continueUrl ? this.continueUrl : "/app";
  }

  async verifyEmail() {
    try {
      const resp = await this.userVerifyEmail(this.actionCode);
      this.validated = true;
      this.invalidCode = false;
      console.log("verified email");
    } catch (e) {
      this.validated = true;
      this.invalidCode = true;
      console.log(e.message);
    }
  }
}
</script>

<style scoped>
.response {
  font-size: 1.5rem;
  text-align: center;
  margin: 4rem 0;
}

.message {
  margin-bottom: 4rem;
}
</style>
