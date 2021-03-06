import { storiesOf } from "@storybook/vue";
import sectionStates from "../decorators/sectionStates";

// Blockquote
const blockquote = storiesOf("Styleguide/Blockquote", module).addDecorator(sectionStates)

blockquote.add("Default", () => `
  <div>
    <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>Words can be like X-rays, if you use them properly – they'll go through anything. You read and you're pierced.</p>
    </blockquote>
    <cite>Aldous Huxley, Brave New World</cite>
  </div>
`);
