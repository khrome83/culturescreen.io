<template>
  <div class="avatar-set" :class="{ small, large }">
    <slot></slot>
    <span v-if="overage" class="overage">{{overage}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class BaseAvatarSet extends Vue {
  @Prop({ type: Number, default: 3 }) limit!: number;
  @Prop(Boolean) private small!: boolean;
  @Prop(Boolean) private large!: boolean;

  ttlCount = 0;
  diffCount = 0;
  avatars = [];

  beforeUpdate() {
    const results = this.$slots.default.filter(item => item.tag);
    this.ttlCount = results.length;
    this.diffCount = results.length - this.limit;
    this.avatars = results;

    // Hide Children Listed Over
    for (let i = this.ttlCount - this.diffCount; i < this.ttlCount; ++i) {
      this.avatars[i].componentOptions.propsData["hide"] = true;
    }
  }

  get overage() {
    if (this.diffCount <= 0) return false;

    return `+ ${this.diffCount}`;
  }
}
</script>

<style scoped>
.avatar-set {
  display: flex;
  width: 100%;
  flex-basis: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}

.avatar-set .avatar {
  margin-left: -1rem;
}

.overage {
  font-size: 1.2rem;
  margin-left: 1rem;
  display: inline-block;
  font-weight: 400;
}

.small .overage {
  font-size: 0.85rem;
  margin-left: 0.5rem;
}

.avatar-set.small .avatar {
  margin-left: -0.5rem;
}

.large .overage {
  font-size: 2rem;
  margin-left: 2rem;
}

.avatar-set.large .avatar {
  margin-left: -2rem;
}
</style>
