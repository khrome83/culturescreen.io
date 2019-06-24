import { storiesOf, addDecorator } from "@storybook/vue";
import { select, radios, text, boolean } from "@storybook/addon-knobs";
import sectionStates from "./decorators/sectionStates";
import BaseInput from "../components/BaseInput.vue";

const stories = storiesOf("Components/Base Input", module).addDecorator(sectionStates);

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
        errorText: {
          default: text("Error Text", "")
        },
        inline: {
          default: boolean("Inline", false)
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
      v-model="textValue"
      v-bind="{
        disabled,
        type,
        hiddenLabel: labelType === 'hidden',
        internalLabel: labelType === 'internal',
        placeholder,
        helpText,
        errorText,
        inline
    }">
      {{label}}
    </base-input>
  `
    } as object)
);
