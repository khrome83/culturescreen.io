<template>
  <div class="feature-tile-verticle">
    <div class="icon">
      <slot></slot>
    </div>
    <component :is="headingLevel" class="heading">{{heading}}</component>
    <component :is="parsedText"></component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { parseLinks } from "~/library";

@Component({})
export default class FeatureTileVerticle extends Vue {
  @Prop({ required: true }) heading!: string;
  @Prop({ default: 2, type: Number }) level!: number;
  @Prop({ required: true }) text!: string;

  get parsedText() {
    return {
      template: `<p class="feature-text">
        ${parseLinks(this.text)}
      </p>`
    };
  }

  get headingLevel() {
    const headings = ["h1", "h2", "h3", "h4"];
    return !this.level || this.level > 4
      ? headings[2]
      : headings[this.level - 1];
  }
}
</script>

<style scoped>
.feature-tile-verticle {
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 20rem;
}

.icon > svg {
  width: 6rem;
  height: 6rem;
}

.icon .graphic-primary {
  fill: #f32144;
}

/* Grey Modifications - .icon .graphic-priamry */
.__bg-grey .icon .graphic-primary {
  fill: #f32144;
}

/* Dark Modifications - .icon .graphic-priamry  */
.__bg-dark .icon .graphic-primary {
  fill: #f32144;
}

.icon .graphic-secondary {
  fill: #cccbcb;
}

/* Grey Modifications - .icon .graphic-secondary */
.__bg-grey .icon .graphic-secondary {
  fill: #cccbcb;
}

/* Dark Modifications - .icon .graphic-secondary  */
.__bg-dark .icon .graphic-secondary {
  fill: #737373;
}

.heading {
  margin: 1rem 0 0;
}

.feature-text {
  margin-bottom: 0;
}
</style>
