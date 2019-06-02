<template>
  <div class="col" :class="{ centered }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class LayoutRow extends Vue {
  @Prop(Boolean) private centered!: boolean;
}
</script>

<style scoped>
.col {
  display: flex;
  margin: 0 0 1rem;
  padding: 0;
  flex-grow: 1;
  flex-direction: column;
}

.col.centered {
  justify-content: center;
  flex-direction: column;
}

.row > .col:last-of-type {
  margin-bottom: 0;
}

@media (min-width: 48rem) {
}

@media (min-width: 71.25rem) {
  .col {
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
