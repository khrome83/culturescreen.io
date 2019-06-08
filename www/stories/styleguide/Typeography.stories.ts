import { storiesOf } from "@storybook/vue";
import sectionStates from "../decorators/sectionStates";

// Typeography
const typeography = storiesOf("Styleguide/Typeography", module).addDecorator(sectionStates)

typeography.add("Montserrat 400", () => ({
  data: () => ({
    font: {
      fontSize: '2rem',
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: '400',
    },
  }),
  template: `
    <span :style="font">The spectacle before us was indeed sublime.</span>
  `
}));

typeography.add("Raleway 300", () => ({
  data: () => ({
    font: {
      fontSize: '2rem',
      fontFamily: '"Raleway", sans-serif',
      fontWeight: '300',
    },
  }),
  template: `
    <span :style="font">The spectacle before us was indeed sublime.</span>
  `
}));

typeography.add("Raleway 400", () => ({
  data: () => ({
    font: {
      fontSize: '2rem',
      fontFamily: '"Raleway", sans-serif',
      fontWeight: '400',
    },
  }),
  template: `
    <span :style="font">The spectacle before us was indeed sublime.</span>
  `
}));

typeography.add("Monospace 300", () => ({
  data: () => ({
    font: {
      fontSize: '2rem',
      fontFamily: '"Lucida Console", Courier, monospace',
      fontWeight: '300',
    },
  }),
  template: `
    <span :style="font">The spectacle before us was indeed sublime.</span>
  `
}));
