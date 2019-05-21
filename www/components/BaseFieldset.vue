<template>
  <fieldset class="fieldset">
    <legend v-if="heading" class="heading">{{ heading }}</legend>
    <slot></slot>
  </fieldset>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class BaseFieldset extends Vue {
  @Prop() heading!: string;
}
</script>

<style scoped>
.fieldset {
  display: block;
  border: none;
  width: auto;
  margin: 0 0 2rem;
}

.heading {
  display: inline-block;
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  line-height: 1.33;
  font-weight: 400;
  letter-spacing: 0.0781rem;
  padding: 0.25rem 0 0.5rem;
  border-bottom: thin solid #5c6169;
  margin-bottom: 0.25rem;
}
</style>
