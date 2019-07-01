<template>
  <base-section v-if="!userIsVerified" class="notice-section" :class="{ closed: isClosed }" dark>
    <div class="notice">
      <p v-if="!isSent" class="content">
        <strong class="warning">Hey!</strong>You have not verified your email address. Do you need us to resend a confirmation email?
      </p>
      <p v-if="isSent && showError" class="content">
        <strong class="warning">Opps...</strong>We had an issue sending the confirmation email. Try again?
      </p>
      <p v-if="isSent && !showError" class="content">
        <strong class="warning">Sweet!</strong>We sent you another email verification.
      </p>
      <div class="verify" v-if="showError || !isSent">
        <base-button
          class="verify"
          @click.native="sendVerificationEmail"
          :isLoading="isLoading"
          secondary
          small
        >Yes</base-button>
        <base-button class="verify" @click.native="closeNotice" tertiary small>No</base-button>
      </div>
    </div>
  </base-section>
</template>

<script lang="ts">
import { Action, Getter, Component, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import BaseSection from "~/components/BaseSection.vue";

@Component({
  components: {
    BaseButton,
    BaseSection
  }
})
export default class VerifyEmailNotice extends Vue {
  @Getter("user/isVerified") userIsVerified;
  @Action("user/verifyEmail") userVerifyEmail;

  isClosed = false;
  showError = false;
  isSent = false;
  isLoading = false;

  async sendVerificationEmail() {
    try {
      this.isLoading = true;
      await this.userVerifyEmail();
      console.log("email verification sent");
      this.showError = false;
      this.isSent = true;
      this.isLoading = false;
      setTimeout(() => {
        this.isClosed = true;
      }, 3000);
    } catch (e) {
      console.log(e.message);
      this.isLoading = false;
      this.showError = true;
      this.isSent = true;
    }
  }

  closeNotice() {
    setTimeout(() => {
      this.isClosed = true;
    }, 200);
  }
}
</script>

<style scoped>
.notice-section {
  overflow: hidden;
  max-height: 10rem;
  transition: all 200ms ease-in-out;
}

.notice-section.closed {
  max-height: 0;
  transition: all 200ms ease-in-out;
}

.notice {
  padding: 0.25rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.content {
  margin: 0;
  font-size: 0.875rem;
}

.warning {
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  color: #f30b73;
  font-size: 1rem;
  display: inline-block;
  padding-right: 1rem;
}

.verify {
  margin-top: 1rem;
  margin-left: auto;
  margin-bottom: 0.25rem;
  align-self: center;
}

@media (min-width: 48rem) {
  .verify {
    margin-top: 0;
    margin-left: none;
    margin-bottom: 0;
    justify-self: auto;
  }
}
</style>
<style>
.notice-section > .container {
  padding: 0.25rem 2.5vw !important;
}
</style>
