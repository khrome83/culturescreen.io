<template>
  <div class="pricing-table" :class="{ promoted }">
    <div class="icon">
      <slot name="graphic"></slot>
    </div>
    <h3 class="heading">{{heading}}</h3>
    <div class="price-set">
      <span class="currency">{{currency}}</span>
      <span class="price">{{price}}</span>
      {{frequency}}
    </div>
    <component :is="parsedText"></component>
    <div class="list">
      <slot name="list"></slot>
    </div>
    <div class="cta">
      <base-button :to="route" :secondary="!promoted" large>{{ buttonLabel }}</base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import { parseLinks } from "~/library";

@Component({
  components: { BaseButton }
})
export default class PricingTable extends Vue {
  @Prop({ required: true }) heading!: string;
  @Prop({ required: true }) identifier!: string;
  @Prop({ required: true }) text!: string;
  @Prop({ required: true }) buttonLabel!: string;
  @Prop({ default: "$" }) currency!: string;
  @Prop({ required: true }) frequency!: string;
  @Prop({ required: true, type: Number }) price!: number;
  @Prop(Boolean) private promoted!: boolean;

  get parsedText() {
    return {
      attrs: {
        class: "feature-text"
      },
      render: createElement => {
        return createElement("p", parseLinks(createElement, this.text));
      }
    };
  }

  get route() {
    return `/signup?plan=${this.identifier}`;
  }
}
</script>

<style scoped>
.pricing-table {
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: thin solid #eaeaea;
  border-radius: 0.25rem;
  flex-grow: 1;
}

/* Grey Modifications - .pricing-table */
.__bg-grey .pricing-table {
  border-color: #cccbcb;
}

/* Dark Modifications - .pricing-table */
.__bg-dark .pricing-table {
  border-color: #33333c;
}

.promoted {
  box-shadow: 0px 0px 0.5rem 0.25rem rgba(0, 0, 0, 0.05);
}

/* Grey Modifications - .promoted */
.__bg-grey .promoted {
  background-color: #fff;
}

/* Dark Modifications - .promoted */
.__bg-dark .promoted {
  background-color: #000;
  box-shadow: 0px 0px 0.5rem 0.25rem rgba(255, 255, 255, 0.1);
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

/* Dark Modifications - .icon .graphic-priamry */
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

/* Dark Modifications - .icon .graphic-secondary */
.__bg-dark .icon .graphic-secondary {
  fill: #737373;
}

.heading {
  margin: 0 0 1rem;
  text-align: center;
}

.feature-text {
  margin-bottom: 0;
}

.price-set {
  font-size: 2.25rem;
  line-height: 1.15;
  margin: 0 0 2rem;
  padding: 0 0 2rem;
  width: 100%;
  border-bottom: thin solid #eaeaea;
}

/* Grey Modifications - .price-set */
.__bg-grey .price-set {
  border-color: #cccbcb;
}

/* Dark Modifications - .price-set */
.__bg-dark .price-set {
  border-color: #33333c;
}

.price {
  font-size: 3.5rem;
  line-height: 1;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
}

.list {
  text-align: left;
  width: 100%;
  padding: 1rem 2rem 4rem;
  box-sizing: border-box;
}

.cta {
  margin-top: auto;
}

.cta > .button {
  min-width: 12.5rem;
}
</style>
