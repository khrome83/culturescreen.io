import { storiesOf, addDecorator } from "@storybook/vue";
import { select, radios, text, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/vue";
import BaseInput from "../components/BaseInput.vue";

const stories = storiesOf("Base Input", module).addDecorator(centered);

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
        placeholder
    }">
      {{label}}
    </base-input>
  `
    } as object)
);

// storiesOf("Base Input/Types", module)
//   .add("Text", () => '<base-input id="text-1">Text</base-input>')
//   .add("Email", () => '<base-input id="email-1" type="email" v-model="email">Email</base-input>')
//   .add("Hidden", () => '<base-input id="hidden-1" type="hidden">Hidden</base-input>')
//   .add("Number", () => '<base-input id="number-1" type="number">Number</base-input>')
//   .add("Password", () => '<base-input id="password-1" type="password">Password</base-input>')
//   .add("Telephone", () => '<base-input id="tel-1" type="tel">Telephone</base-input>')

// storiesOf("Base Input/Modifiers", module)
//   .add("Hidden Label", () => '<base-input id="text-2" hidden-label>Hidden Label</base-input>')
//   .add("Internal Label", () => '<base-input id="text-3" internal-label v-model="innerText">Inline Label</base-input>')
//   .add("Placeholder", () => '<base-input id="text-4" v-model="placeholderText" placeholder="John Doe">Placeholder</base-input>')
//   .add("Placeholder w/ Internal Label", () => '<base-input id="text-4" v-model="placeholderText" placeholder="John Doe" internal-label>Internal Label</base-input>')
