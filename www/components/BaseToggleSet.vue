<template>
  <div class="toggle-set">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class BaseToggleSet extends Vue {}
</script>

<style>
.toggle-set {
  display: flex;
  flex-direction: row;
}

.toggle-set > .toggle:first-of-type > .label {
  border-left-width: thin;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.toggle-set > .toggle:last-of-type > .label {
  border-right-width: thin;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
