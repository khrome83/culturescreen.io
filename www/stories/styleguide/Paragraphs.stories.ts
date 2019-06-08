import { storiesOf } from "@storybook/vue";
import sectionStates from "../decorators/sectionStates";

// Paragraphs
const paragraphs = storiesOf("Styleguide/Paragraphs", module).addDecorator(sectionStates)

paragraphs.add("Normal", () => `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="#">laboris</a> nisi ut aliquip ex ea commodo consequat.</p>`);
paragraphs.add("Within Footer", () => `<footer><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="#">laboris</a> nisi ut aliquip ex ea commodo consequat.</p></footer>`);
