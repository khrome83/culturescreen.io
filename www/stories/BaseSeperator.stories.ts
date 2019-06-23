import { storiesOf, addDecorator } from "@storybook/vue";
import { radios, text, boolean } from "@storybook/addon-knobs";
import sectionStates from "./decorators/sectionStates";
import BaseSeperator from "../components/BaseSeperator.vue";
import LayoutRow from "../components/LayoutRow.vue";
import LayoutColumn from "../components/LayoutColumn.vue";

const stories = storiesOf("Components/Base Seperator", module).addDecorator(sectionStates);

stories.add(
  "Default",
  () =>
    ({
      components: { LayoutRow, LayoutColumn, BaseSeperator },
      props: {},
      template: `
        <layout-row>
        <layout-column aligned>Left Side</layout-column>
        <layout-column centered aligned>
          <base-seperator />
        </layout-column>
        <layout-column aligned>Right Side</layout-column>

        </layout-row>
      `
    } as object)
);

