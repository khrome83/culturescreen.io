import { storiesOf } from "@storybook/vue";
import sectionStates from "./decorators/sectionStates";
import HorizontalLogo from "../assets/svg/logo-horizontal-on-light.svg";
import VerticalLogo from "../assets/svg/logo-vertical-on-light.svg";
import CloseIcon from "../assets/svg/close.svg";
import MenuIcon from "../assets/svg/menu.svg";

// Headings
const headings = storiesOf("Styleguide/Headings", module).addDecorator(sectionStates)

headings.add("H1", () => "<h1>Heading 1</h1>");
headings.add("H2", () => "<h2>Heading 2</h2>");
headings.add("H3", () => "<h3>Heading 3</h3>");
headings.add("H4", () => "<h4>Heading 4</h4>");

// Paragraphs
const paragraphs = storiesOf("Styleguide/Paragraphs", module).addDecorator(sectionStates)

paragraphs.add("Normal", () => `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="#">laboris</a> nisi ut aliquip ex ea commodo consequat.</p>`);
paragraphs.add("Within Footer", () => `<footer><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="#">laboris</a> nisi ut aliquip ex ea commodo consequat.</p></footer>`);

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

// Links
const links = storiesOf("Styleguide/Links", module).addDecorator(sectionStates)

links.add("Basic Link", () => "<a href='#' title='nothing'>Link</a>");

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

// Tables
const tables = storiesOf("Styleguide/Tables", module).addDecorator(sectionStates)

tables.add("Default", () => `
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Street Address</th>
        <th>City</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Maurice Weaver</td>
        <td>1844 Seban Ridge</td>
        <td>Popihmo</td>
        <td>Vatican City</td>
      </tr>
      <tr>
        <td>Belle Mendoza</td>
        <td>1530 Anona Manor</td>
        <td>Suwcowa</td>
        <td>Costa Rica</td>
      </tr>
      <tr>
        <td>Alejandro Washington</td>
        <td>227 Ludki Grove</td>
        <td>Hawecgan</td>
        <td>Caribbean Netherlands</td>
      </tr>
    </tbody>
  </table>
`);

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

// Inline Code
const inlineCode = storiesOf("Styleguide/Inline Code", module).addDecorator(sectionStates)

inlineCode.add("Default", () => `
  <p>The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the array.</p>
`);

// Icons
const icons = storiesOf("Styleguide/Icons", module)

icons.add("All Icon", () => ({
  components: { CloseIcon, MenuIcon },
  data: () => ({
    item: {
      margin: '1rem',
      border: 'thin solid transparent',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0rem 0.125rem 0.3125rem 0rem',
      borderRadius: '0.3125rem',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

    },
    light: {
      backgroundColor: '#ffffff',
    },
    grey: {
      backgroundColor: '#fdfcfb',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0rem 0.125rem 0.3125rem 0rem',
    },
    dark: {
      backgroundColor: '#010b19',
      boxShadow: 'rgba(0, 0, 0, 0.5) 0rem 0.125rem 0.3125rem 0rem',
    },
    heading: {
      fontSize: '0.75rem',
      margin: '0',
      padding: '0.5rem 0 0.5rem 1rem',
      color: '#737373',
      textTransform: 'uppercase',
    },
    set: {
      display: 'flex',
      flexDirection: 'row',
      flexFlow: 'flex-wrap',
      marginBottom: '2rem',
    },
    label: {
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: '300',
      paddingTop: '0.5rem',
    },
    wrapper: {
      padding: '2rem',
    }
  }),
  template: `
    <div :style="wrapper">
      <div :style="heading">On Light Background</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <menu-icon />
          <div :style="label">Menu</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <close-icon />
          <div :style="label">Close</div>
        </div>
      </div>
      <div :style="heading">On Dark Background</div>
      <div :style="set">
        <div :style="[item, dark]" class="__bg-dark">
          <menu-icon />
          <div :style="label">Menu</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <close-icon />
          <div :style="label">Close</div>
        </div>
      </div>
    </div>
  `
}));
