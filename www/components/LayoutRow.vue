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
  display: flex;
  flex-flow: column;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 48rem) {
}

@media (min-width: 71.25rem) {
  .row {
    flex-direction: row;
  }

  .row.reversed {
    flex-flow: row-reverse;
    flex-direction: row-reverse;
  }
}
</style>
