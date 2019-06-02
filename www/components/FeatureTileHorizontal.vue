<template>
  <div class="feature-tile-horizontal">
    <div v-if="$slots.default !== undefined" class="icon">
      <slot></slot>
    </div>
    <div v-else class="checkmark">
      <checkmark-icon/>
    </div>
    <div class="text-container">
      <component :is="headingLevel" class="heading">{{heading}}</component>
      <component :is="parsedText"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { parseLinks } from "~/library";
import CheckmarkIcon from "~/assets/svg/checkmark.svg";

@Component({
  components: { CheckmarkIcon }
})
export default class FeatureTileHorizontal extends Vue {
  @Prop({ required: true }) heading!: string;
  @Prop({ default: 3, type: Number }) level!: number;
  @Prop({ required: true }) text!: string;

  get parsedText() {
    return {
      render: createElement => {
        return createElement(
          "p",
          { class: "feature-text" },
          parseLinks(createElement, this.text)
        );
      }
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
.feature-tile-horizontal {
  padding: 1rem;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 30rem;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 2rem;
}

.checkmark > svg {
  width: 2rem;
  height: 2rem;
  fill: #ee0028;
}

/* Grey Modifications - .checkmark > svg  */
.__bg-grey .checkmark > svg {
  fill: #da0629;
}

/* Dark Modifications - .checkmark > svg   */
.__bg-dark .checkmark > svg {
  fill: #f32144;
}

.icon > svg {
  width: 6rem;
  height: 6rem;
}

.icon .graphic-primary {
  fill: #ee0028;
}

/* Grey Modifications - .icon .graphic-priamry */
.__bg-grey .icon .graphic-primary {
  fill: #da0629;
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
  margin: 0;
}

.feature-text {
  margin-bottom: 0;
}
</style>
