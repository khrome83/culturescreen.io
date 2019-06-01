<template>
  <div class="col" :class="{ centered, pink, blue, green, red, orange, yellow, purple }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class LayoutRow extends Vue {
  @Prop(Boolean) private centered!: boolean;
  @Prop(Boolean) private pink!: boolean;
  @Prop(Boolean) private blue!: boolean;
  @Prop(Boolean) private green!: boolean;
  @Prop(Boolean) private red!: boolean;
  @Prop(Boolean) private orange!: boolean;
  @Prop(Boolean) private yellow!: boolean;
  @Prop(Boolean) private purple!: boolean;
}
</script>

<style scoped>
.col {
  display: flex;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  flex-direction: column;
}

.col.centered {
  justify-content: center;
  flex-direction: column;
}

.pink {
  background-color: pink;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.red {
  background-color: red;
}
.orange {
  background-color: orange;
}
.yellow {
  background-color: yellow;
}
.purple {
  background-color: purple;
}

@media (min-width: 48rem) {
}

@media (min-width: 71.25rem) {
  .col {
    margin: 0.5rem;
  }
}
</style>
