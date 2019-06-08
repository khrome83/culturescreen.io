import { storiesOf } from "@storybook/vue";
import sectionStates from "../decorators/sectionStates";

// Lists
const lists = storiesOf("Styleguide/Lists", module).addDecorator(sectionStates)

lists.add("Unordered", () => `
  <ul>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </ul>
`);

lists.add("Ordered", () => `
  <ol>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
  </ol>
`);
