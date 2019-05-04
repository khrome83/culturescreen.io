<template>
  <div class="container">
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";

@Component({
  components: {
    TheHeader,
    TheFooter
  }
})
export default class extends Vue {}
</script>

<style scoped>
.container { margin: 0; padding: 0; box-sizing: border-box; }
</style>
