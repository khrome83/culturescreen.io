<template>
  <div class="row" :class="{ reversed }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class LayoutRow extends Vue {
  @Prop(Boolean) private reversed!: boolean;
}
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
  display: block;
}

@media (min-width: 48rem) {
}

@media (min-width: 71.25rem) {
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .row.reversed {
    flex-flow: row-reverse;
    flex-direction: row-reverse;
  }
}
</style>
