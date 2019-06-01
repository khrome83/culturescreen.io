<template>
  <div class="row" :class="{ reversed, centered }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class LayoutRow extends Vue {
  @Prop(Boolean) private reversed!: boolean;
  @Prop(Boolean) private centered!: boolean;
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

.row.centered {
  text-align: center;
  align-content: center;
  align-items: center;
  align-self: center;
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

  .row > .col:first-of-type {
    margin-left: 0;
  }

  .row > .col:last-of-type {
    margin-right: 0;
  }
}
</style>
