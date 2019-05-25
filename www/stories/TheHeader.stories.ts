import { storiesOf } from "@storybook/vue";
import TheHeader from "../components/TheHeader.vue";
import HorizontalLogo from "../assets/svg/logo-horizontal-on-light.svg";
import CloseIcon from "../assets/svg/close.svg";
import MenuIcon from "../assets/svg/menu.svg";

const stories = storiesOf("Application/The Header", module);

stories.add(
  "Default",
  () =>
    ({
      components: { TheHeader, HorizontalLogo, CloseIcon, MenuIcon },
      template: `<the-header />`
    } as object)
);
