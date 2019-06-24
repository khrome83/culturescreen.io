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
    return `/register?email=${this.email}`;
  }
}
</script>

<style scoped>
.hero-signup {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 20rem;
  margin: 4rem auto 2rem;
}

.hero-signup .button {
  flex-grow: 1;
  max-width: 10rem;
  margin: 0 auto;
}

.hero-signup .fieldset {
  padding-bottom: 1rem;
  display: flex;
  margin-bottom: 0;
}

@media (min-width: 48rem) {
  .hero-signup {
    flex-direction: row;
    max-width: 30rem;
  }

  .hero-signup .fieldset {
    margin-right: 2rem;
    padding-bottom: 0;
    flex-grow: 2;
  }

  .hero-signup .button {
    flex-grow: 1;
    max-width: 10rem;
    margin: 0 auto;
  }
}
</style>
