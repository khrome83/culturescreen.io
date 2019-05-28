<template>
  <div class="pricing-card" :class="{horizontal}">
    <div class="content">
      <div v-if="preText" class="pre-text">{{preText}}</div>
      <div class="price-set">
        <span class="currency">$</span>
        <span class="price">{{price}}</span>
        {{frequency}}
      </div>
      <div class="post-text">{{postText}}</div>
    </div>
    <div class="cta">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class PricingCard extends Vue {
  @Prop() preText!: string;
  @Prop({ required: true }) postText!: string;
  @Prop({ required: true }) frequency!: string;
  @Prop({ required: true, type: Number }) price!: number;
  @Prop(Boolean) private horizontal!: boolean;
}
</script>

<style scoped>
.pricing-card {
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 20rem;
  border: thin solid #eaeaea;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 0.5rem 0.25rem rgba(0, 0, 0, 0.05);
}

/* Grey Modifications - .pricing-card */
.__bg-grey .pricing-card {
  border-color: #cccbcb;
  background-color: #fff;
}

/* Dark Modifications - .pricing-card */
.__bg-dark .pricing-card {
  border-color: #33333c;
  background-color: #000;
  box-shadow: 0px 0px 0.5rem 0.25rem rgba(255, 255, 255, 0.1);
}

.content {
  border-bottom: thin solid #eaeaea;
  padding: 0 0 2rem;
  margin: 0 0 2rem;
  width: 100%;
}

/* Grey Modifications - .content */
.__bg-grey .content {
  border-color: #cccbcb;
}

/* Dark Modifications - .content */
.__bg-dark .content {
  border-color: #33333c;
}

.pre-text {
  margin-bottom: 1rem;
}

.price-set {
  font-size: 2.25rem;
  line-height: 1.15;
  margin: 0 0 2rem;
}

.price {
  font-size: 3.5rem;
  line-height: 1;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
}

.post-text {
  color: #737373;
}

/* Grey Modifications - .post-text */
.__bg-grey .post-text {
  color: #010b19;
}

/* Dark Modifications - .post-text */
.__bg-dark .post-text {
  color: #cccbcb;
}

.cta > .button {
  min-width: 12.5rem;
}

@media (min-width: 48rem) {
  .pricing-card.horizontal {
    flex-direction: row;
    max-width: initial;
    padding: 2rem;
    justify-content: space-around;
  }

  .horizontal .content {
    border: none;
    margin: 0;
    padding: 0;
    flex-basis: 50%;
  }

  .horizontal .cta {
    padding-left: 2rem;
    flex-basis: 50%;
  }
}
</style>
