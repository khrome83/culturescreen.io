import { storiesOf } from "@storybook/vue";
import TheAppHeader from "../components/TheAppHeader.vue";
import store from '~/.storybook/store'

const stories = storiesOf("Application/The App Header", module);

stories.add(
  "Default",
  () =>
    ({
      components: { TheAppHeader },
      store,
      template: `<the-app-header :menu-items="5"/>`
    } as object)
);
