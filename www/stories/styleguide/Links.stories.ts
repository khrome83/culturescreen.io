import { storiesOf } from "@storybook/vue";
import sectionStates from "../decorators/sectionStates";

// Links
const links = storiesOf("Styleguide/Links", module).addDecorator(sectionStates)

links.add("Basic Link", () => "<a href='#' title='nothing'>Link</a>");
