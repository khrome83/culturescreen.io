import { storiesOf, addDecorator } from "@storybook/vue";
import { number, radios, text, boolean } from "@storybook/addon-knobs";
import sectionStates from "./decorators/sectionStates";
import BaseTextarea from "../components/BaseTextarea.vue";

const stories = storiesOf("Components/Base Textarea", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { BaseTextarea },
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

        labelType: {
          default: radios(
            "Label Type",
            {
              Above: "above",
              Hidden: "hidden",
            },
            "above"
          )
        },
        placeholder: {
          default: text("Placeholder")
        }
      },
      data: () => ({
        textValue: "Vivamus ut fermentum quam. Integer massa nulla, aliquam id nibh non, porttitor pretium risus. Donec sodales urna lacus, vitae laoreet diam dapibus et. Nunc volutpat accumsan velit, nec volutpat magna efficitur vel. Etiam risus tortor, placerat varius nisi iaculis, commodo convallis erat. Vivamus sodales ultricies lectus sit amet fermentum. Pellentesque gravida faucibus vehicula. Pellentesque ornare nisl a magna mollis blandit. Nulla tortor velit, consectetur ultrices nunc sed, tincidunt cursus ipsum. Aliquam nec mi cursus, eleifend risus porta, tempor ex. Phasellus consequat nec diam a scelerisque."
      }),
      template: `
    <base-textarea
      v-model="textValue"
      v-bind="{
        disabled,
        hiddenLabel: labelType === 'hidden',
        placeholder,
        helpText,
        label
    }">
    </base-textarea>
  `
    } as object)
);
