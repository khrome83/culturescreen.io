<template>
  <section>
    <h1 class="header">Content</h1>
    <base-button overpanel="Default">Open Default Overpanel</base-button>
    <base-button target="_blank" alt>Testing</base-button>
    <base-button to="https://www.example.com">Primary</base-button>
    <base-button title="secondary" to="https://www.example.com" secondary
      >Secondary</base-button
    >
    <base-button to="https://www.example.com" tertiary>Tertiary</base-button>
    <base-button to="/signup" danger>Danger</base-button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";

@Component({
  components: {
    BaseButton
  }
})
export default class extends Vue {}
</script>

<style scoped></style>
