import { storiesOf } from "@storybook/vue";
import sectionStates from "../decorators/sectionStates";

// Inline Code
const inlineCode = storiesOf("Styleguide/Inline Code", module).addDecorator(sectionStates)

inlineCode.add("Default", () => `
  <p>The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the array.</p>
`);
