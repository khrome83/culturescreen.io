import { storiesOf, addDecorator } from "@storybook/vue";
import { radios, text, boolean } from "@storybook/addon-knobs";
import sectionStates from "./decorators/sectionStates";
import BaseAvatar from "../components/BaseAvatar.vue";

const stories = storiesOf("Components/Base Avatar", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { BaseAvatar },
      props: {
        username: {
          default: text("Username", "Khrome83")
        },
        displayName: {
          default: text("Display Name", "Zane Milakovic")
        },
        src: {
          default: text("Source", "https://s.gravatar.com/avatar/bd4ab01cca64e633e003aefe3e1232ab?s=200&d=retro&r=pg")
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
        hide: {
          default: boolean("Hide", false)
        },
      },
      template: `
        <base-avatar v-bind="{
          small: size === 'small',
          large: size === 'large',
          displayName,
          username,
          src,
          hide
        }" />
      `
    } as object)
);

