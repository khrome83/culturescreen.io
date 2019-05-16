<template>
  <section :class="theme">
    <div class="container" :class="layout">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

export enum Layout {
  Thin = "thin",
  Normal = "normal",
  Tall = "tall"
}

export enum Theme {
  Light = "light",
  Grey = "grey",
  Dark = "dark"
}

@Component({})
export default class BaseSection extends Vue {
  @Prop({ default: Layout.Normal }) private layout!: Layout;
  @Prop({ default: Theme.Light }) private theme!: Theme;
}
</script>

<style scoped>
section {
  font-family: "Montserrat", sans-serif;
}

.container {
  max-width: 90rem;
  margin: 0 auto;
}

.thin {
  padding: 2rem 2.5vw;
}

.normal {
  padding: 4rem 2.5vw;
}

.tall {
  padding: 6rem 2.5vw;
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
