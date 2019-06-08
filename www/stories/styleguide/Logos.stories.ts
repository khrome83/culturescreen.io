import { storiesOf } from "@storybook/vue";
import sectionStates from "../decorators/sectionStates";
import HorizontalLogo from "../../assets/svg/logo-horizontal-on-light.svg";
import VerticalLogo from "../../assets/svg/logo-vertical-on-light.svg";

// Logos
const logos = storiesOf("Styleguide/Logos", module).addDecorator(sectionStates)

logos.add("Horizontal", () => ({
  components: { HorizontalLogo },
  template: `<horizontal-logo />`
}));

logos.add("Vertical", () => ({
  components: { VerticalLogo },
  template: `<vertical-logo />`
}));
