import { storiesOf, addDecorator } from "@storybook/vue";
import { select, radios, text, boolean } from "@storybook/addon-knobs";
import nanoid from "nanoid";
import sectionStates from "./decorators/sectionStates";
import BaseToggle from "../components/BaseToggle.vue";
import BaseToggleSet from "../components/BaseToggleSet.vue";

const stories = storiesOf("Components/Base Toggle Set", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { BaseToggle, BaseToggleSet },
      props: {
        label: {
          default: text("Label", "Monthly")
        },
        value: {
          default: text("Value", "monthly")
        }
      },
      data: () => ({
        toggleValue: "monthly",
        group: `group-${nanoid()}`,
        results: {
          padding: '1rem',
          display: 'inline-block',
        }
      }),
      template: `
      <div>
        <base-toggle-set v-bind="{ group }">
          <base-toggle v-model="toggleValue" v-bind="{ group }" value="daily">Daily</base-toggle>
          <base-toggle v-model="toggleValue" v-bind="{ group }" value="monthly">Monthly</base-toggle>
          <base-toggle v-model="toggleValue" v-bind="{ group }" value="yearly">Yearly</base-toggle>
        </base-toggle-set>
        <span :style="results"><strong>Selected Value:&nbsp;</strong>{{toggleValue}}</span>
      </div>
      `
    } as object)
);
