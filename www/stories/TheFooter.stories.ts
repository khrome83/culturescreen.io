import { storiesOf } from "@storybook/vue";
import TheFooter from "../components/TheFooter.vue";

const stories = storiesOf("Marketing/The Footer", module);

stories.add(
  "Default",
  () =>
    ({
      components: { TheFooter },
      template: `<the-footer />`
    } as object)
);
