<template>
  <section class="section" :class="[`__bg-${theme}`, { centered }]">
    <div class="container" :class="[layout, { skinny }]">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

export enum Layout {
  Short = "short",
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
  @Prop(Boolean) private centered!: boolean;
  @Prop(Boolean) private skinny!: boolean;
}
</script>

<style scoped>
.section {
  font-family: "Montserrat", sans-serif;
}

.section.centered .container > h1,
.section.centered .container > h2,
.section.centered .container > h3,
.section.centered .container > h4 {
  text-align: center;
}

.section.centered .container > p {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.container {
  max-width: 90rem;
  margin: 0 auto;
}

.container.skinny {
  max-width: 56rem;
}

.short {
  padding: 2rem 2.5vw;
}

.normal {
  padding: 4rem 2.5vw;
}

.tall {
  padding: 6rem 2.5vw;
}

.__bg-light {
  background-color: #fff;
}

.__bg-grey {
  background-color: #fdfcfb;
}

.__bg-dark {
  background-color: #010b19;
  color: #fff;
}
</style>
