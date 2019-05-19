import { storiesOf, addDecorator } from "@storybook/vue";
import { radios, text, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/vue";
import BaseButton from "../components/BaseButton.vue";
import HeartIcon from "../assets/svg/heart.svg";

const stories = storiesOf("Base Button", module).addDecorator(centered);

stories.add(
  "Default",
  () =>
    ({
      components: { BaseButton },
      props: {
        text: {
          default: text("Text", "Button Text")
        },
        theme: {
          default: radios(
            "Theme",
            {
              Primary: "primary",
              Secondary: "secondary",
              Tertiary: "tertiary",
              Danger: "danger"
            },
            "primary"
          )
        },
        size: {
          default: radios(
            "Size",
            {
              Small: "small",
              Normal: "normal",
              Large: "large"
            },
            "normal"
          )
        },
        disabled: {
          default: boolean("Disabled", false)
        }
      },
      template: `
  <base-button v-bind="{
      secondary: theme === 'secondary',
      tertiary: theme === 'tertiary',
      danger: theme === 'danger',
      small: size === 'small',
      large: size === 'large',
      disabled
    }">
    {{text}}
  </base-button>`
    } as object)
);

stories.add(
  "with Icon (Pre)",
  () =>
    ({
      components: { BaseButton, HeartIcon },
      props: {
        text: {
          default: text("Text", "Button Text")
        },
        theme: {
          default: radios(
            "Theme",
            {
              Primary: "primary",
              Secondary: "secondary",
              Tertiary: "tertiary",
              Danger: "danger"
            },
            "primary"
          )
        },
        size: {
          default: radios(
            "Size",
            {
              Small: "small",
              Normal: "normal",
              Large: "large"
            },
            "normal"
          )
        },
        disabled: {
          default: boolean("Disabled", false)
        }
      },
      template: `
  <base-button v-bind="{
    secondary: theme === 'secondary',
    tertiary: theme === 'tertiary',
    danger: theme === 'danger',
    small: size === 'small',
    large: size === 'large',
    disabled
  }">
    <template v-slot:pre-icon>
      <heart-icon aria-hidden="true" />
    </template>
    <template v-slot:default>{{text}}</template>
  </base-button>`
    } as object)
);

stories.add(
  "with Icon (Post)",
  () =>
    ({
      components: { BaseButton, HeartIcon },
      props: {
        text: {
          default: text("Text", "Button Text")
        },
        theme: {
          default: radios(
            "Theme",
            {
              Primary: "primary",
              Secondary: "secondary",
              Tertiary: "tertiary",
              Danger: "danger"
            },
            "primary"
          )
        },
        size: {
          default: radios(
            "Size",
            {
              Small: "small",
              Normal: "normal",
              Large: "large"
            },
            "normal"
          )
        },
        disabled: {
          default: boolean("Disabled", false)
        }
      },
      template: `
  <base-button v-bind="{
    secondary: theme === 'secondary',
    tertiary: theme === 'tertiary',
    danger: theme === 'danger',
    small: size === 'small',
    large: size === 'large',
    disabled
  }">
    <template v-slot:post-icon>
      <heart-icon aria-hidden="true" />
    </template>
    <template v-slot:default>{{text}}</template>
  </base-button>`
    } as object)
);
