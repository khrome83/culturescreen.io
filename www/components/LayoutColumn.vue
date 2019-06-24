<template>
  <div class="col" :class="{ aligned, centered, stretch }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class LayoutRow extends Vue {
  @Prop(Boolean) private aligned!: boolean;
  @Prop(Boolean) private centered!: boolean;
  @Prop(Boolean) private stretch!: boolean;
}
</script>

<style scoped>
.col {
  display: block;
  margin: 0 0 1rem;
  padding: 0;
  flex-basis: 0;
  flex-grow: 1;
  flex-direction: column;
}

.col.aligned {
  display: flex;
  align-items: center;
}

.col.centered {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.col.stretch > svg {
  width: 100%;
}

.row > .col:last-of-type {
  margin-bottom: 0;
}

@media (min-width: 48rem) {
}

@media (min-width: 71.25rem) {
  .col {
    display: flex;
    padding: 0;
    flex-basis: 0;
    flex-grow: 1;
    flex-direction: column;
    margin: 0.5rem;
  }

  .row > .col:first-of-type {
    margin-left: 0;
  }

  .row > .col:last-of-type {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style>
