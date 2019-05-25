import { storiesOf, addDecorator } from "@storybook/vue";
import { select, radios, text, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/vue";
import BaseInput from "../components/BaseInput.vue";

const stories = storiesOf("Components/Base Input", module).addDecorator(centered);

stories.add(
  "Default",
  () =>
    ({
      components: { BaseInput },
      props: {
        label: {
          default: text("Label", "Input Label")
        },
        disabled: {
          default: boolean("Disabled", false)
        },
        helpText: {
          default: text("Help Text", "")
        },
        type: {
          default: select(
            "Input Type",
            {
              Text: "text",
              Email: "email",
              Hidden: "hidden",
              Number: "number",
              Password: "password",
              Telephone: "telephone"
            },
            "text"
          )
        },
        labelType: {
          default: radios(
            "Label Type",
            {
              Above: "above",
              Hidden: "hidden",
              Internal: "internal"
            },
            "above"
          )
        },
        placeholder: {
          default: text("Placeholder")
        }
      },
      data: () => ({
        textValue: ""
      }),
      template: `
    <base-input
      id="text-1"
      v-model="textValue"
      v-bind="{
        disabled,
        type,
        hiddenLabel: labelType === 'hidden',
        internalLabel: labelType === 'internal',
        placeholder,
        helpText
    }">
      {{label}}
    </base-input>
  `
    } as object)
);
