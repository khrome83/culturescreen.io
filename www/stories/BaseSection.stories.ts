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
              Thin: "thin",
              Normal: "normal",
              Tall: "tall"
            },
            "normal"
          )
        },
        centered: {
          default: boolean("Centered", false)
        },
      },
      template: `
    <base-section v-bind="{ theme, layout, centered }">
      {{text}}
    </base-section>`
    } as object)
);
