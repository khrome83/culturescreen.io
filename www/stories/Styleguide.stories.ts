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

// Colors
const colors = storiesOf("Styleguide/Colors", module)

colors.add("Color Pallet", () => ({
  components: { CloseIcon, MenuIcon },
  data: () => ({
    item: {
      margin: '1rem',
      border: 'thin solid transparent',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0rem 0.125rem 0.3125rem 0rem',
      borderRadius: '0.3125rem',
      padding: ' 0 0 1rem',
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
      flexWrap: 'wrap',
      marginBottom: '2rem',
    },
    label: {
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: '300',
      paddingTop: '1rem',
    },
    pallet: {
      display: 'block',
      width: '6rem',
      height: '6rem',
      borderRadius: '0.3125rem',
      boxShadow: 'inset 0px 0px 0px 1px rgba(0,0,0,0.5)',
    },
    wrapper: {
      padding: '2rem',
    }
  }),
  template: `
    <div :style="wrapper">
      <div :style="heading">Primary</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ee0028'}]"></div>
          <div :style="label">#ee0028</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <div :style="[pallet, { backgroundColor: '#da0629'}]"></div>
          <div :style="label">#da0629</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <div :style="[pallet, { backgroundColor: '#f32144'}]"></div>
          <div :style="label">#f32144</div>
        </div>
      </div>
      <div :style="heading">Secondary</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#010b19'}]"></div>
          <div :style="label">#010b19</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <div :style="[pallet, { backgroundColor: '#010b19'}]"></div>
          <div :style="label">#010b19</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <div :style="[pallet, { backgroundColor: '#ffffff'}]"></div>
          <div :style="label">#ffffff</div>
        </div>
      </div>
      <div :style="heading">Grey - Border</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#eaeaea'}]"></div>
          <div :style="label">#eaeaea</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <div :style="[pallet, { backgroundColor: '#cccbcb'}]"></div>
          <div :style="label">#cccbcb</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <div :style="[pallet, { backgroundColor: '#33333c'}]"></div>
          <div :style="label">#33333c</div>
        </div>
      </div>
      <div :style="heading">Grey - Background</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#fafafa'}]"></div>
          <div :style="label">#fafafa</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <div :style="[pallet, { backgroundColor: '#f3f3f3'}]"></div>
          <div :style="label">#f3f3f3</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <div :style="[pallet, { backgroundColor: '#111119'}]"></div>
          <div :style="label">#111119</div>
        </div>
      </div>
      <div :style="heading">Grey - Foreground</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#737373'}]"></div>
          <div :style="label">#737373</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <div :style="[pallet, { backgroundColor: '#010b19'}]"></div>
          <div :style="label">#010b19</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <div :style="[pallet, { backgroundColor: '#6b6a6a'}]"></div>
          <div :style="label">#6b6a6a</div>
        </div>
      </div>
      <div :style="heading">Success</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#11c17b'}]"></div>
          <div :style="label">#11c17b</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <div :style="[pallet, { backgroundColor: '#11c17b'}]"></div>
          <div :style="label">#11c17b</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <div :style="[pallet, { backgroundColor: '#11c17b'}]"></div>
          <div :style="label">#11c17b</div>
        </div>
      </div>
      <div :style="heading">Warning</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ff9c5b'}]"></div>
          <div :style="label">#ff9c5b</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <div :style="[pallet, { backgroundColor: '#ff9c5b'}]"></div>
          <div :style="label">#ff9c5b</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <div :style="[pallet, { backgroundColor: '#ff9c5b'}]"></div>
          <div :style="label">#ff9c5b</div>
        </div>
      </div>
      <div :style="heading">Error</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ff3867'}]"></div>
          <div :style="label">#ff3867</div>
        </div>
        <div :style="[item, grey]" class="__bg-grey">
          <div :style="[pallet, { backgroundColor: '#ff3867'}]"></div>
          <div :style="label">#ff3867</div>
        </div>
        <div :style="[item, dark]" class="__bg-dark">
          <div :style="[pallet, { backgroundColor: '#ff3867'}]"></div>
          <div :style="label">#ff3867</div>
        </div>
      </div>
      <div :style="heading">Tonal Pallet - Red</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ee0028'}]"></div>
          <div :style="label">#ee0028</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#f3405e'}]"></div>
          <div :style="label">#f3405e</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#f67f93'}]"></div>
          <div :style="label">#f67f93</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#fbbfc9'}]"></div>
          <div :style="label">#fbbfc9</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#fde5e9'}]"></div>
          <div :style="label">#fde5e9</div>
        </div>
      </div>
      <div :style="heading">Tonal Pallet - Teal</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#3b8183'}]"></div>
          <div :style="label">#3b8183</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#6ca1a2'}]"></div>
          <div :style="label">#6ca1a2</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#9dc0c1'}]"></div>
          <div :style="label">#9dc0c1</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#cedfe0'}]"></div>
          <div :style="label">#cedfe0</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ebf2f2'}]"></div>
          <div :style="label">#ebf2f2</div>
        </div>
      </div>
      <div :style="heading">Accent Colors - Greens</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#4dd19c'}]"></div>
          <div :style="label">#4dd19c</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#88e0bc'}]"></div>
          <div :style="label">#88e0bc</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#c3efde'}]"></div>
          <div :style="label">#c3efde</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#e7f8f1'}]"></div>
          <div :style="label">#e7f8f1</div>
        </div>
      </div>
      <div :style="heading">Accent Colors - Oranges</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ffb584'}]"></div>
          <div :style="label">#ffb584</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ffcdad'}]"></div>
          <div :style="label">#ffcdad</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ffe6d6'}]"></div>
          <div :style="label">#ffe6d6</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#fff5ee'}]"></div>
          <div :style="label">#fff5ee</div>
        </div>
      </div>
      <div :style="heading">Accent Colors - Pinks</div>
      <div :style="set">
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ff6a8d'}]"></div>
          <div :style="label">#ff6a8d</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ff9bb2'}]"></div>
          <div :style="label">#ff9bb2</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ffcdd9'}]"></div>
          <div :style="label">#ffcdd9</div>
        </div>
        <div :style="[item, light]" class="__bg-light">
          <div :style="[pallet, { backgroundColor: '#ffebef'}]"></div>
          <div :style="label">#ffebef</div>
        </div>
      </div>
    </div>
  `
}));
