<template>
  <div class="seperator">OR</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class BaseSeperator extends Vue {}
</script>

<style scoped>
.seperator {
  position: relative;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 2rem auto;
  padding: 0.5rem;
  border: thin solid #cccbcb;
  border-radius: 0.25rem;
  display: inline-block;
}

.seperator::before {
  position: absolute;
  content: "";
  border-bottom: thin solid #eaeaea;
  width: 8rem;
  left: -8rem;
  top: 50%;
}

.seperator::after {
  position: absolute;
  content: "";
  border-bottom: thin solid #eaeaea;
  width: 8rem;
  right: -8rem;
  bottom: 50%;
}

@media (min-width: 71.25rem) {
  .seperator::before {
    border-right: thin solid #eaeaea;
    border-bottom: none;
    height: 6rem;
    width: 0;
    top: -6rem;
    left: 50%;
  }

  .seperator::after {
    position: absolute;
    content: "";
    border-right: thin solid #eaeaea;
    border-bottom: none;
    height: 6rem;
    width: 0;
    bottom: -6rem;
    right: 50%;
  }
}
</style>
