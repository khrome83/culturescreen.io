import { storiesOf } from "@storybook/vue";
import HorizontalLightLogo from "../../assets/svg/logo-horizontal-on-light.svg";
import HorizontalDarkLogo from "../../assets/svg/logo-horizontal-on-dark.svg";
import VerticalLightLogo from "../../assets/svg/logo-vertical-on-light.svg";
import VerticalDarkLogo from "../../assets/svg/logo-vertical-on-dark.svg";
import { createConnection } from "net";

// Logos
const logos = storiesOf("Styleguide/Logos", module)

logos.add("Default", () => ({
  components: { HorizontalLightLogo, HorizontalDarkLogo, VerticalLightLogo, VerticalDarkLogo },
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
      minWidth: '5rem',
      minHeight: '5rem',
      position: 'relative',

    },
    light: {
      backgroundColor: '#ffffff',
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
      marginBottom: '4rem',
    },
    label: {
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: '300',
      position: 'absolute',
      bottom: '-1.5rem',
      left: '0',
      right: '0',
      textAlign: 'center',
      color: '#aaa',
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
        <horizontal-light-logo />
        <div :style="label">Horizontal</div>
      </div>
      <div :style="[item, light]" class="__bg-light">
        <vertical-light-logo />
        <div :style="label">Verticle</div>
      </div>
    </div>
    <div :style="heading">On Dark Background</div>
    <div :style="set">
      <div :style="[item, dark]" class="__bg-dark">
        <horizontal-dark-logo />
        <div :style="label">Horizontal</div>
      </div>
      <div :style="[item, dark]" class="__bg-dark">
        <vertical-dark-logo />
        <div :style="label">Verticle</div>
      </div>
    </div>
  </div>
`
}));
