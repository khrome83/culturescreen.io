<template>
  <span class="toggle-set">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class BaseToggleSet extends Vue {
  @Prop({ required: true }) group!: string;

  created() {
    const results = this.$slots.default.filter(item => item.tag);
    results.forEach(toggle => {
      toggle.componentOptions.propsData["group"] = this.group;
    });
  }
}
</script>

<style>
.toggle-set {
  display: flex;
  flex-direction: row;
}

.toggle-set > .toggle:first-child > .label {
  border-left-width: thin;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.toggle-set > .toggle:last-child > .label {
  border-right-width: thin;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
