import { storiesOf } from "@storybook/vue";
import TheAppFooter from "../components/TheAppFooter.vue";

const stories = storiesOf("Application/The App Footer", module);

stories.add(
  "Default",
  () =>
    ({
      components: { TheAppFooter },
      template: `<the-app-footer />`
    } as object)
);
