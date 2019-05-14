<template>
  <section :class="theme">
    <div class="container" :class="layout">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

export enum Layouts {
  Small = "small",
  Medium = "medium",
  Large = "large"
}

export enum Themes {
  Light = "light",
  Grey = "grey",
  Dark = "dark"
}

@Component({})
export default class BaseSection extends Vue {
  @Prop({ default: Layouts.Medium })
  private layout!: Layouts;
  @Prop({ default: Themes.Light }) private theme!: Themes;
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

.small {
  padding: 2rem 0;
}

.medium {
  padding: 4rem 0;
}

.large {
  padding: 6rem 0;
}

.light {
  background-color: #fff;
}

.grey {
  background-color: #e1e4ea;
}

.dark {
  background-color: #010b19;
  color: #fff;
}
</style>
