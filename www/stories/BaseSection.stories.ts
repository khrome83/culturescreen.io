import { storiesOf } from "@storybook/vue";
import { radios, text, boolean } from "@storybook/addon-knobs";
import BaseSection from "../components/BaseSection.vue";

const stories = storiesOf("Components/Base Section", module);

stories.add(
  "Default",
  () =>
    ({
      components: { BaseSection },
      props: {
        text: {
          default: text("Text", "Section Content")
        },
        theme: {
          default: radios(
            "Theme",
            {
              Light: "light",
              Grey: "grey",
              Dark: "dark"
            },
            "light"
          )
        },
        layout: {
          default: radios(
            "Layout",
            {
              Short: "short",
              Normal: "normal",
              Tall: "tall"
            },
            "normal"
          )
        },
        centered: {
          default: boolean("Centered", false)
        },
        skinny: {
          default: boolean("Skinny", false)
        },
        extend: {
          default: boolean("Extend", false)
        },
      },
      template: `
    <base-section v-bind="{
      centered,
      skinny,
      extend,
      light: theme === 'light',
      grey: theme === 'grey',
      dark: theme === 'dark',
      short: layout === 'short',
      normal: layout === 'normal',
      tall: layout === 'tall' }"
    >
      {{text}}
    </base-section>`
    } as object)
);
