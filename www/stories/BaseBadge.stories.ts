import { storiesOf, addDecorator } from "@storybook/vue";
import { radios, text, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/vue";
import BaseBadge from "../components/BaseBadge.vue";
import addonAPI from "@storybook/addons";
const stories = storiesOf("Components/Base Badge", module).addDecorator(centered);


addonAPI.getChannel().on("storybook/background/update", bg => {
  console.log("Background color", bg.selected);
  console.log("Background name", bg.name);
});

stories.add(
  "Default",
  () =>
    ({
      components: { BaseBadge },
      props: {
        text: {
          default: text("Text", "NEW")
        },
        theme: {
          default: radios(
            "Theme",
            {
              Primary: "primary",
              Secondary: "secondary"
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
        }
      },
      template: `
        <base-badge v-bind="{
          secondary: theme === 'secondary',
          small: size === 'small',
          large: size === 'large',
        }">
          {{text}}
        </base-badge>
      `
    } as object)
);

