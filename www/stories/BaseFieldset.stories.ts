import { storiesOf } from "@storybook/vue";
import { select, radios, text, boolean } from "@storybook/addon-knobs";
import nanoid from "nanoid";
import sectionStates from "./decorators/sectionStates";
import BaseFieldset from "../components/BaseFieldset.vue";
import BaseCheckbox from "../components/BaseCheckbox.vue";
import BaseRadio from "../components/BaseRadio.vue";

const stories = storiesOf("Components/Base Fieldset", module).addDecorator(sectionStates);

stories.add(
  "Checkboxes",
  () =>
    ({
      components: { BaseFieldset, BaseCheckbox },
      props: {
        heading: {
          default: text("Heading", "Fieldset Heading", "General")
        },
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
      <base-fieldset v-bind:heading="heading">
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
      </base-fieldset>
      `
    } as object)
);

stories.add(
  "Radio Buttons",
  () =>
    ({
      components: { BaseFieldset, BaseRadio },
      props: {
        heading: {
          default: text("Heading", "Fieldset Heading", "General")
        },
        label1: {
          default: text("Label (1)", "Radio Label 1", "Item 1")
        },
        value1: {
          default: text("Value (1)", "A", "Item 1")
        },
        disabled1: {
          default: boolean("Disabled (1)", false, "Item 1")
        },
        label2: {
          default: text("Label (2)", "Radio Label 2", "Item 2")
        },
        value2: {
          default: text("Value (2)", "B", "Item 2")
        },
        disabled2: {
          default: boolean("Disabled (2)", false, "Item 2")
        },
        label3: {
          default: text("Label (3)", "Radio Label 3", "Item 3")
        },
        value3: {
          default: text("Value (3)", "C", "Item 3")
        },
        disabled3: {
          default: boolean("Disabled (3)", false, "Item 3")
        }
      },
      data: () => ({
        radioValue: "B",
        group: `group-${nanoid()}`,
        results: {
          padding: '1rem',
          display: 'inline-block',
        }
      }),
      template: `
      <base-fieldset v-bind:heading="heading">
        <base-radio v-model="radioValue" v-bind:value="value1" v-bind="{ group, disabled: disabled1 }">
          {{label1}}
        </base-radio>
        <base-radio v-model="radioValue" v-bind:value="value2" v-bind="{ group, disabled: disabled2 }">
          {{label2}}
        </base-radio>
        <base-radio v-model="radioValue" v-bind:value="value3" v-bind="{ group, disabled: disabled3 }">
          {{label3}}
        </base-radio>
        <span :style="results"><strong>Selected Value:&nbsp;</strong>{{radioValue}}</span>
      </base-fieldset>
      `
    } as object)
);
