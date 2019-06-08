<template>
  <section class="section" :class="[`__bg-${theme}`, { centered }]">
    <div class="container" :class="[layouts, { skinny, extend }]">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class BaseSection extends Vue {
  @Prop(Boolean) private light!: boolean;
  @Prop(Boolean) private grey!: boolean;
  @Prop(Boolean) private dark!: boolean;
  @Prop(Boolean) private short!: boolean;
  @Prop(Boolean) private normal!: boolean;
  @Prop(Boolean) private tall!: boolean;
  @Prop(Boolean) private centered!: boolean;
  @Prop(Boolean) private skinny!: boolean;
  @Prop(Boolean) private extend!: boolean;

  get theme() {
    // Defaults to Light
    return this.dark ? "dark" : this.grey ? "grey" : "light";
  }

  get layouts() {
    // Defaults to Normal
    return this.tall ? "tall" : this.short ? "short" : "normal";
  }
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

.skinny {
  max-width: 56rem;
}

.normal {
  padding: 4rem 2.5vw;
}

.normal.extend {
  padding-bottom: 6rem;
}
.short {
  padding: 2rem 2.5vw;
}

.short.extend {
  padding-bottom: 4rem;
}

.tall {
  padding: 6rem 2.5vw;
}

.tall.extend {
  padding-bottom: 8rem;
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
