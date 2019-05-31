<template>
  <form class="hero-signup" action>
    <base-input
      id="hs-email"
      v-model="email"
      type="email"
      internal-label
      inline
      required
    >{{ emailLabel }}</base-input>
    <base-button :to="submitPath">{{ buttonLabel }}</base-button>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import BaseInput from "~/components/BaseInput.vue";

@Component({
  components: {
    BaseButton,
    BaseInput
  }
})
export default class HeroSignup extends Vue {
  @Prop({ required: true }) emailLabel!: string;
  @Prop({ required: true }) buttonLabel!: string;

  email = "";

  get submitPath() {
    return `/action/signup?email=${this.email}`;
  }
}
</script>

<style scoped>
.hero-signup {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 30rem;
}
</style>
