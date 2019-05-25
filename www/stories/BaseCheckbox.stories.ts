import { storiesOf, addDecorator } from "@storybook/vue";
import { select, radios, text, boolean } from "@storybook/addon-knobs";
import sectionStates from "./decorators/sectionStates";
import BaseCheckbox from "../components/BaseCheckbox.vue";

const stories = storiesOf("Components/Base Checkbox", module).addDecorator(sectionStates);

stories.add(
  "Single True/False",
  () =>
    ({
      components: { BaseCheckbox },
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
        <base-checkbox v-model="checkboxValue" v-bind="{ value, disabled }">
          {{label}}
        </base-checkbox>
        <span :style="results"><strong>Selected Values:&nbsp;</strong>{{checkboxValue}}</span>
      </div>
      `
    } as object)
);

stories.add(
  "Multiple Values",
  () =>
    ({
      components: { BaseCheckbox },
      props: {
        label1: {
          default: text("Label (1)", "Checkbox Label 1", "Item 1")
        },
        value1: {
          default: text("Value (1)", "A", "Item 1")
        },
        disabled1: {
          default: boolean("Disabled (1)", false, "Item 1")
        },
        label2: {
          default: text("Label (2)", "Checkbox Label 2", "Item 2")
        },
        value2: {
          default: text("Value (2)", "B", "Item 2")
        },
        disabled2: {
          default: boolean("Disabled (2)", false, "Item 2")
        },
        label3: {
          default: text("Label (3)", "Checkbox Label 3", "Item 3")
        },
        value3: {
          default: text("Value (3)", "C", "Item 3")
        },
        disabled3: {
          default: boolean("Disabled (3)", false, "Item 3")
        }
      },
      data: () => ({
        checkboxValue: ["A"],
        results: {
          padding: '1rem',
          display: 'inline-block',
        }
      }),
      template: `
      <div>
        <base-checkbox v-model="checkboxValue" v-bind="{ value: value1, disabled: disabled1 }">
          {{label1}}
        </base-checkbox>
        <base-checkbox v-model="checkboxValue" v-bind="{ value: value2, disabled: disabled2 }">
          {{label2}}
        </base-checkbox>
        <base-checkbox v-model="checkboxValue" v-bind="{ value: value3, disabled: disabled3 }">
          {{label3}}
        </base-checkbox>
        <span :style="results"><strong>Selected Values:&nbsp;</strong>{{checkboxValue.join(', ')}}</span>
      </div>
      `
    } as object)
);
