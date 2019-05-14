<template>
  <section>
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class BaseButton extends Vue {
  @Prop({ default: "#" }) to!: string;
  @Prop() title!: string;
  @Prop(Boolean) private secondary!: boolean;
  @Prop(Boolean) tertiary!: boolean;
  @Prop(Boolean) danger!: boolean;
  @Prop(Boolean) disabled!: boolean;
  @Prop() overpanel!: string;
}
</script>

<style scoped>
section {
  font-family: "Montserrat", sans-serif;
}

.container {
  padding: 0.5rem 2.5vw 1.5rem;
  max-width: 90rem;
  margin: 0 auto;
}
</style>
