import { storiesOf, addDecorator } from "@storybook/vue";
import { select, radios, text, boolean } from "@storybook/addon-knobs";
import nanoid from "nanoid";
import sectionStates from "./decorators/sectionStates";
import BaseToggle from "../components/BaseToggle.vue";

const stories = storiesOf("Components/Base Toggle", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { BaseToggle },
      props: {
        label: {
          default: text("Label", "Monthly")
        },
        value: {
          default: text("Value", "monthly")
        },
        disabled: {
          default: boolean("Disabled", false)
        }
      },
      data: () => ({
        toggleValue: "",
        group: `group-${nanoid()}`,
        results: {
          padding: '1rem',
          display: 'inline-block',
        }
      }),
      template: `
      <div>
        <base-toggle v-model="toggleValue" v-bind:value="value" v-bind="{ group, disabled }">
          {{label}}
        </base-toggle>
        <span :style="results"><strong>Selected Value:&nbsp;</strong>{{toggleValue}}</span>
      </div>
      `
    } as object)
);
