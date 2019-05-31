import { storiesOf, addDecorator } from "@storybook/vue";
import { select, radios, text, boolean } from "@storybook/addon-knobs";
import sectionStates from "./decorators/sectionStates";
import BaseSelect from "../components/BaseSelect.vue";

const stories = storiesOf("Components/Base Select", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { BaseSelect },
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
        inline: {
          default: boolean("Inline", false)
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
      },
      data: () => ({
        selectValue: "",
        results: {
          padding: '1rem 1rem 1rem 0',
          display: 'inline-block',
        }
      }),
      template: `
      <div>
        <base-select
          v-model="selectValue"
          v-bind="{
            disabled,
            helpText,
            label,
            inline,
            hiddenLabel: labelType === 'hidden'
        }">
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </base-select>
        <span :style="results"><strong>Selected Value:&nbsp;</strong>{{selectValue}}</span>
      </div>
  `
    } as object)
);
