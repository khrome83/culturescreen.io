import { storiesOf } from "@storybook/vue";
import TheHeader from "../components/TheHeader.vue";

const stories = storiesOf("Marketing/The Header", module);

stories.add(
  "Default",
  () =>
    ({
      components: { TheHeader },
      template: `<the-header :menu-items="5"/>`
    } as object)
);
