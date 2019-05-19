import { storiesOf } from "@storybook/vue";
import { radios, text } from "@storybook/addon-knobs";
import BaseSection from "../components/BaseSection.vue";

const stories = storiesOf("Base Section", module);

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
              Thin: "thin",
              Normal: "normal",
              Tall: "tall"
            },
            "normal"
          )
        }
      },
      template: `
    <base-section v-bind="{ theme, layout }">
      {{text}}
    </base-section>`
    } as object)
);
