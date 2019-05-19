import Vue from "vue";
import { configure, addDecorator, addParameters } from "@storybook/vue";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

// global css
import "../assets/css/reset.css";
import "../assets/css/main.css";

// icons
// import HeartIcon from "../assets/svg/heart.svg";
import CloseIcon from "../assets/svg/close.svg";
import MenuIcon from "../assets/svg/menu.svg";

// logos
import HorizontalLogo from "../assets/svg/logo-horizontal-on-light.svg";
import VerticalLogo from "../assets/svg/logo-vertical-on-light.svg";

// components
// import BaseButton from "../components/BaseButton.vue";
// import BaseSection from "../components/BaseSection.vue";
import BaseInput from "../components/BaseInput.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";

// global decorators
addDecorator(withKnobs);
addDecorator(withA11y);

// viewports
const newViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px"
    }
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px"
    }
  }
};

// global parameters
addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports
    }
  }
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// register icons
// Vue.component("heart-icon", HeartIcon);
Vue.component("close-icon", CloseIcon);
Vue.component("menu-icon", MenuIcon);

// register logos
Vue.component("horizontal-logo", HorizontalLogo);
Vue.component("vertical-logo", VerticalLogo);

// register components - base
// Vue.component("base-button", BaseButton);
// Vue.component("base-section", BaseSection);
Vue.component("base-input", BaseInput);

// register components - single use
Vue.component("the-header", TheFooter);
Vue.component("the-footer", TheHeader);

configure(loadStories, module);
