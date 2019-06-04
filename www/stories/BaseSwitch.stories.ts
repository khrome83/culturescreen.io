import { storiesOf, addDecorator } from "@storybook/vue";
import { select, radios, text, boolean } from "@storybook/addon-knobs";
import sectionStates from "./decorators/sectionStates";
import BaseSwitch from "../components/BaseSwitch.vue";

const stories = storiesOf("Components/Base Switch", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { BaseSwitch },
      props: {
        label: {
          default: text("Label", "Checkbox Label")
        },
        value: {
          default: text("Value", "A")
        },
        disabled: {
          default: boolean("Disabled", false)
        }
      },
      data: () => ({
        checkboxValue: true,
        results: {
          padding: '1rem',
          display: 'inline-block',
        }
      }),
      template: `
      <div>
        <base-switch v-model="checkboxValue" v-bind="{ value, disabled }">
          {{label}}
        </base-switch>
        <span :style="results"><strong>Selected Value:&nbsp;</strong>{{checkboxValue}}</span>
      </div>
      `
    } as object)
);
