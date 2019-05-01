<template>
  <div class="container">
    <nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheFooter from "~/components/TheFooter.vue";

@Component({
  components: {
    TheFooter
  }
})
export default class extends Vue {}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
