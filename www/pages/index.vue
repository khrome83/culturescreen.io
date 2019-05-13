<template>
  <section>
    <h1 class="header">Content</h1>
    <base-button overpanel="Default">Open Default Overpanel</base-button>
    <base-button overpanel="Default" secondary
      >Open Default Overpanel</base-button
    >
    <base-button overpanel="Default" tertiary
      >Open Default Overpanel</base-button
    >
    <base-button overpanel="Default" danger>Open Default Overpanel</base-button>
    <br />
    <br />
    <base-button overpanel="Default" disabled
      >Open Default Overpanel</base-button
    >
    <base-button overpanel="Default" secondary disabled
      >Open Default Overpanel</base-button
    >
    <base-button overpanel="Default" tertiary disabled
      >Open Default Overpanel</base-button
    >
    <base-button overpanel="Default" danger disabled
      >Open Default Overpanel</base-button
    >
    <br />
    <br />
    <base-button @click.native="test">Form Submission</base-button>
    <base-button @click.native="test" secondary>Form Submission</base-button>
    <base-button @click.native="test" tertiary>Form Submission</base-button>
    <base-button @click.native="test" danger>Form Submission</base-button>
    <br />
    <br />
    <base-button @click.native="test" disabled>Form Submission</base-button>
    <base-button @click.native="test" secondary disabled
      >Form Submission</base-button
    >
    <base-button @click.native="test" tertiary disabled
      >Form Submission</base-button
    >
    <base-button @click.native="test" danger disabled
      >Form Submission</base-button
    >
    <br />
    <br />
    <base-button to="https://www.example.com">Primary</base-button>
    <base-button title="secondary" to="https://www.example.com" secondary
      >Secondary</base-button
    >
    <base-button to="https://www.example.com" tertiary>Tertiary</base-button>
    <base-button to="/signup" danger>Danger</base-button>
    <br />
    <br />
    <base-button to="https://www.example.com" disabled>Primary</base-button>
    <base-button
      title="secondary"
      to="https://www.example.com"
      secondary
      disabled
      >Secondary</base-button
    >
    <base-button to="https://www.example.com" tertiary disabled
      >Tertiary</base-button
    >
    <base-button to="https://www.example.com" danger disabled
      >Danger</base-button
    >
    <br />
    <br />
    <base-button to="https://www.example.com">
      <heart-icon slot="pre-icon" />Primary
    </base-button>
    <base-button title="secondary" to="https://www.example.com" secondary>
      <heart-icon slot="pre-icon" />Secondary
    </base-button>
    <base-button to="https://www.example.com" tertiary>
      <heart-icon slot="pre-icon" />Tertiary
    </base-button>
    <base-button to="https://www.example.com" danger>
      <heart-icon slot="pre-icon" />Danger
    </base-button>
    <br />
    <br />
    <base-button to="https://www.example.com">
      <heart-icon slot="post-icon" />Primary
    </base-button>
    <base-button title="secondary" to="https://www.example.com" secondary>
      <heart-icon slot="post-icon" />Secondary
    </base-button>
    <base-button to="https://www.example.com" tertiary>
      <heart-icon slot="post-icon" />Tertiary
    </base-button>
    <base-button to="https://www.example.com" danger>
      <heart-icon slot="post-icon" />Danger
    </base-button>
    <br />
    <br />
    <base-button to="https://www.example.com" disabled>
      <heart-icon slot="post-icon" />Primary
    </base-button>
    <base-button
      title="secondary"
      to="https://www.example.com"
      secondary
      disabled
    >
      <heart-icon slot="post-icon" />Secondary
    </base-button>
    <base-button to="https://www.example.com" tertiary disabled>
      <heart-icon slot="post-icon" />Tertiary
    </base-button>
    <base-button to="https://www.example.com" danger disabled>
      <heart-icon slot="post-icon" />Danger
    </base-button>
    <br />
    <br />
    <base-button to="/signup">
      <heart-icon slot="post-icon" />Primary
    </base-button>
    <base-button title="secondary" to="/signup" secondary>
      <heart-icon slot="post-icon" />Secondary
    </base-button>
    <base-button to="/signup" tertiary>
      <heart-icon slot="post-icon" />Tertiary
    </base-button>
    <base-button to="/signup" danger>
      <heart-icon slot="post-icon" />Danger
    </base-button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import HeartIcon from "~/assets/svg/heart.svg";

@Component({
  components: {
    BaseButton,
    HeartIcon
  }
})
export default class extends Vue {
  test() {
    console.log("test");
  }
}
</script>

<style scoped></style>
