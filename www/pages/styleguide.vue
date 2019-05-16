<template>
  <div>
    <base-section>
      <h1 class="header">Styleguide</h1>

      <h2>Button Elements</h2>

      <h3>Overpanel Buttons</h3>
      <base-button overpanel="Default">Primary</base-button>
      <base-button overpanel="Default" secondary>Secondary</base-button>
      <base-button overpanel="Default" tertiary>Tertiary</base-button>
      <base-button overpanel="Default" danger>Danger</base-button>
      <h4>Disabled</h4>
      <base-button overpanel="Default" disabled>Primary</base-button>
      <base-button overpanel="Default" secondary disabled
        >Secondary</base-button
      >
      <base-button overpanel="Default" tertiary disabled>Tertiary</base-button>
      <base-button overpanel="Default" danger disabled>Danger</base-button>
      <h4>Small Buttons</h4>
      <base-button overpanel="Default" small>Primary</base-button>
      <base-button overpanel="Default" secondary small>Secondary</base-button>
      <base-button overpanel="Default" tertiary small>Tertiary</base-button>
      <base-button overpanel="Default" danger small>Danger</base-button>
      <h4>Large Buttons</h4>
      <base-button overpanel="Default" large>Primary</base-button>
      <base-button overpanel="Default" secondary large>Secondary</base-button>
      <base-button overpanel="Default" tertiary large>Tertiary</base-button>
      <base-button overpanel="Default" danger large>Danger</base-button>
      <h3>Custom Events</h3>
      <base-button @click.native="test">Primary</base-button>
      <base-button @click.native="test" secondary>Secondary</base-button>
      <base-button @click.native="test" tertiary>Tertiary</base-button>
      <base-button @click.native="test" danger>Danger</base-button>
      <h4>Disabled</h4>
      <base-button @click.native="test" disabled>Primary</base-button>
      <base-button @click.native="test" secondary disabled
        >Secondary</base-button
      >
      <base-button @click.native="test" tertiary disabled>Tertiary</base-button>
      <base-button @click.native="test" danger disabled>Danger</base-button>
      <h3>External Link</h3>
      <base-button to="https://www.example.com">Primary</base-button>
      <base-button title="secondary" to="https://www.example.com" secondary
        >Secondary</base-button
      >
      <base-button to="https://www.example.com" tertiary>Tertiary</base-button>
      <base-button to="/signup" danger>Danger</base-button>
      <h4>Disabled</h4>
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
      <h3>Left Icons</h3>
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
      <h3>Right Icons</h3>
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
      <h4>Disabled</h4>
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
      <h4>Nuxt Route w/ Icon</h4>
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
      <h4>Small Buttons w/ Icons</h4>
      <base-button overpanel="Default" small>
        <heart-icon slot="post-icon" />Primary
      </base-button>
      <base-button overpanel="Default" secondary small>
        <heart-icon slot="post-icon" />Secondary
      </base-button>
      <base-button overpanel="Default" tertiary small>
        <heart-icon slot="post-icon" />Tertiary
      </base-button>
      <base-button overpanel="Default" danger small>
        <heart-icon slot="post-icon" />Danger
      </base-button>
      <h4>Large Buttons w/ Icons</h4>
      <base-button overpanel="Default" large>
        <heart-icon slot="pre-icon" />Primary
      </base-button>
      <base-button overpanel="Default" secondary large>
        <heart-icon slot="pre-icon" />Secondary
      </base-button>
      <base-button overpanel="Default" tertiary large>
        <heart-icon slot="pre-icon" />Tertiary
      </base-button>
      <base-button overpanel="Default" danger large>
        <heart-icon slot="pre-icon" />Danger
      </base-button>
    </base-section>
    <base-section :theme="theme.Light">Default Section</base-section>
    <base-section :layout="layout.Thin" :theme="theme.Dark"
      >Dark Section</base-section
    >
    <base-section :layout="layout.Tall" :theme="theme.Grey"
      >Grey Section</base-section
    >
    <base-section :layout="layout.Tall">Large Section</base-section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import BaseSection, { Layout, Theme } from "~/components/BaseSection.vue";
import HeartIcon from "~/assets/svg/heart.svg";

@Component({
  components: {
    BaseButton,
    BaseSection,
    HeartIcon
  }
})
export default class extends Vue {
  layout = Layout;
  theme = Theme;

  test() {
    console.log("test");
  }
}
</script>

<style scoped></style>
