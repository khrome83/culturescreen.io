<template>
  <span class="badge" :class="{ secondary, small, large }">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  inheritAttrs: false
})
export default class BaseBadge extends Vue {
  @Prop(Boolean) private secondary!: boolean;
  @Prop(Boolean) private small!: boolean;
  @Prop(Boolean) private large!: boolean;
}
</script>

<style scoped>
.badge {
  display: inline-block;
  text-align: center;
  color: #fff;
  fill: #fff;
  background-color: #ee0028;
  border-radius: 2px;
  padding: 4px 6px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
}

/* Grey Modifications - Badge */
.__bg-grey .badge {
  background-color: #da0629;
  color: #fdfcfb;
  fill: #fdfcfb;
}

/* Dark Modifications - Badge */
.__bg-dark .badge {
  background-color: #f32144;
  color: #010b19;
  fill: #010b19;
}

.secondary {
  background-color: #010b19;
}

/* Grey Modifications - Secondary */
.__bg-grey .secondary {
  background-color: #010b19;
  color: #fdfcfb;
  fill: #fdfcfb;
}

/* Dark Modifications - Secondary */
.__bg-dark .secondary {
  background-color: #ffffff;
  color: #010b19;
  fill: #010b19;
}

.small {
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 16px;
  line-height: 1;
  font-weight: 300;
  letter-spacing: 1.25;
}

.large {
  font-size: 20px;
  padding: 6px 12px;
  letter-spacing: 0.1rem;
  line-height: 1;
}
</style>
