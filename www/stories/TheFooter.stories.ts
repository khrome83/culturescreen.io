import { storiesOf } from "@storybook/vue";
import TheFooter from "../components/TheFooter.vue";
import VerticalLogo from "../assets/svg/logo-vertical-on-light.svg";

const stories = storiesOf("Marketing/The Footer", module);

stories.add(
  "Default",
  () =>
    ({
      components: { TheFooter, VerticalLogo },
      template: `<the-footer />`
    } as object)
);
