import { storiesOf } from "@storybook/vue";
import sectionStates from "../decorators/sectionStates";

// Headings
const headings = storiesOf("Styleguide/Headings", module).addDecorator(sectionStates)

headings.add("H1", () => "<h1>Heading 1</h1>");
headings.add("H2", () => "<h2>Heading 2</h2>");
headings.add("H3", () => "<h3>Heading 3</h3>");
headings.add("H4", () => "<h4>Heading 4</h4>");
