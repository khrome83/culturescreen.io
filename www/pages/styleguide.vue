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
      <base-button overpanel="Default" secondary disabled>Secondary</base-button>
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
      <base-button @click.native="test" secondary disabled>Secondary</base-button>
      <base-button @click.native="test" tertiary disabled>Tertiary</base-button>
      <base-button @click.native="test" danger disabled>Danger</base-button>
      <h3>External Link</h3>
      <base-button to="https://www.example.com">Primary</base-button>
      <base-button title="secondary" to="https://www.example.com" secondary>Secondary</base-button>
      <base-button to="https://www.example.com" tertiary>Tertiary</base-button>
      <base-button to="/signup" danger>Danger</base-button>
      <h4>Disabled</h4>
      <base-button to="https://www.example.com" disabled>Primary</base-button>
      <base-button title="secondary" to="https://www.example.com" secondary disabled>Secondary</base-button>
      <base-button to="https://www.example.com" tertiary disabled>Tertiary</base-button>
      <base-button to="https://www.example.com" danger disabled>Danger</base-button>
      <h3>Left Icons</h3>
      <base-button to="https://www.example.com">
        <template v-slot:pre-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Primary</template>
      </base-button>
      <base-button title="secondary" to="https://www.example.com" secondary>
        <template v-slot:pre-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Secondary</template>
      </base-button>
      <base-button to="https://www.example.com" tertiary>
        <template v-slot:pre-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Tertiary</template>
      </base-button>
      <base-button to="https://www.example.com" danger>
        <template v-slot:pre-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Danger</template>
      </base-button>
      <h3>Right Icons</h3>
      <base-button to="https://www.example.com">
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Primary</template>
      </base-button>
      <base-button title="secondary" to="https://www.example.com" secondary>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Secondary</template>
      </base-button>
      <base-button to="https://www.example.com" tertiary>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Tertiary</template>
      </base-button>
      <base-button to="https://www.example.com" danger>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Danger</template>
      </base-button>
      <br>
      <br>
      <h4>Disabled</h4>
      <base-button to="https://www.example.com" disabled>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Primary</template>
      </base-button>
      <base-button title="secondary" to="https://www.example.com" secondary disabled>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Secondary</template>
      </base-button>
      <base-button to="https://www.example.com" tertiary disabled>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Tertiary</template>
      </base-button>
      <base-button to="https://www.example.com" danger disabled>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Danger</template>
      </base-button>
      <h4>Nuxt Route w/ Icon</h4>
      <base-button to="/signup">
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Primary</template>
      </base-button>
      <base-button title="secondary" to="/signup" secondary>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Secondary</template>
      </base-button>
      <base-button to="/signup" tertiary>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Tertiary</template>
      </base-button>
      <base-button to="/signup" danger>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Danger</template>
      </base-button>
      <h4>Small Buttons w/ Icons</h4>
      <base-button overpanel="Default" small>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Primary</template>
      </base-button>
      <base-button overpanel="Default" secondary small>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Secondary</template>
      </base-button>
      <base-button overpanel="Default" tertiary small>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Tertiary</template>
      </base-button>
      <base-button overpanel="Default" danger small>
        <template v-slot:post-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Danger</template>
      </base-button>
      <h4>Large Buttons w/ Icons</h4>
      <base-button overpanel="Default" large>
        <template v-slot:pre-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Primary</template>
      </base-button>
      <base-button overpanel="Default" secondary large>
        <template v-slot:pre-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Secondary</template>
      </base-button>
      <base-button overpanel="Default" tertiary large>
        <template v-slot:pre-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Tertiary</template>
      </base-button>
      <base-button overpanel="Default" danger large>
        <template v-slot:pre-icon>
          <heart-icon aria-hidden="true"/>
        </template>
        <template v-slot:default>Danger</template>
      </base-button>
    </base-section>
    <base-section :layout="layout.Thin">
      <h2>Section Types</h2>
    </base-section>
    <base-section :theme="theme.Dark">Dark Theme</base-section>
    <base-section>Default Theme</base-section>
    <base-section :theme="theme.Grey">Grey Theme</base-section>
    <base-section :layout="layout.Tall">Tall Layout</base-section>
    <base-section :theme="theme.Grey">Default Layout</base-section>
    <base-section :layout="layout.Thin" :theme="theme.Dark">Thin Layout</base-section>
    <base-section>
      <h2>Form Fields</h2>
      <h3>Input</h3>
      <base-input id="text-1">Text</base-input>
      <base-input id="email-1" :type="type.Email" v-model="email">Email</base-input>
      <base-input id="hidden-1" :type="type.Hidden">Hidden</base-input>
      <base-input id="number-1" :type="type.Number">Number</base-input>
      <base-input id="password-1" :type="type.Password">Password</base-input>
      <base-input id="tel-1" :type="type.Tel">Telephone</base-input>
      <h4>Hidden Label</h4>
      <base-input id="text-2" hidden-label>Hidden Label</base-input>
      <h4>Internal Label</h4>
      <base-input id="text-3" internal-label v-model="innerText">Inline Label</base-input>
      <h4>Placeholder Attribute</h4>
      <base-input id="text-4" v-model="placeholderText" placeholder="John Doe">Placeholder</base-input>
      <h4>Placeholder Attribute w/ Internal Label</h4>
      <base-input
        id="text-4"
        v-model="placeholderText"
        placeholder="John Doe"
        internal-label
        help-text="Testing [[/origin|Orign]]"
      >Internal Label</base-input>
    </base-section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import BaseSection, { Layout, Theme } from "~/components/BaseSection.vue";
import BaseInput, { Type } from "~/components/BaseInput.vue";
import HeartIcon from "~/assets/svg/heart.svg";

@Component({
  components: {
    BaseButton,
    BaseSection,
    BaseInput,
    HeartIcon
  }
})
export default class extends Vue {
  layout = Layout;
  theme = Theme;
  type = Type;
  innerText = "";
  placeholderText = "";
  email = "testing@example.com";

  test() {
    console.log("test");
  }
}
</script>

<style scoped></style>
